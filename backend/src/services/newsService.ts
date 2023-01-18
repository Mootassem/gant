import Error400 from '../errors/Error400';
import MongooseRepository from '../database/repositories/mongooseRepository';
import { IServiceOptions } from './IServiceOptions';
import NewsRepository from '../database/repositories/newsRepository';
import NewsCategoryRepository from '../database/repositories/newsCategoryRepository';
import TagRepository from '../database/repositories/tagRepository';

export default class NewsService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      data.category =
        await NewsCategoryRepository.filterIdInTenant(
          data.category,
          { ...this.options, session },
        );
      data.tags = await TagRepository.filterIdsInTenant(
        data.tags,
        { ...this.options, session },
      );

      const record = await NewsRepository.create(data, {
        ...this.options,
        session,
      });

      await MongooseRepository.commitTransaction(session);

      return record;
    } catch (error) {
      await MongooseRepository.abortTransaction(session);

      MongooseRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'news',
      );

      throw error;
    }
  }

  async update(id, data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      data.category =
        await NewsCategoryRepository.filterIdInTenant(
          data.category,
          { ...this.options, session },
        );
      data.tags = await TagRepository.filterIdsInTenant(
        data.tags,
        { ...this.options, session },
      );

      const record = await NewsRepository.update(id, data, {
        ...this.options,
        session,
      });

      await MongooseRepository.commitTransaction(session);

      return record;
    } catch (error) {
      await MongooseRepository.abortTransaction(session);

      MongooseRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'news',
      );

      throw error;
    }
  }

  async destroyAll(ids) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      for (const id of ids) {
        await NewsRepository.destroy(id, {
          ...this.options,
          session,
        });
      }

      await MongooseRepository.commitTransaction(session);
    } catch (error) {
      await MongooseRepository.abortTransaction(session);
      throw error;
    }
  }

  async findById(id) {
    return NewsRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return NewsRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return NewsRepository.findAndCountAll(
      args,
      this.options,
    );
  }

  async import(data, importHash) {
    if (!importHash) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashRequired',
      );
    }

    if (await this._isImportHashExistent(importHash)) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashExistent',
      );
    }

    const dataToCreate = {
      ...data,
      importHash,
    };

    return this.create(dataToCreate);
  }

  async _isImportHashExistent(importHash) {
    const count = await NewsRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }

  async CountNews() {
    return NewsRepository.TotaleNews(this.options);
  }
}
