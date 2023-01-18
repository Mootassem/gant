import Error400 from '../errors/Error400';
import MongooseRepository from '../database/repositories/mongooseRepository';
import { IServiceOptions } from './IServiceOptions';
import TaskRepository from '../database/repositories/taskRepository';
import ProjectRepository from '../database/repositories/projectRepository';
import ModuleProjectRepository from '../database/repositories/moduleProjectRepository';
import UserRepository from '../database/repositories/userRepository';

export default class TaskService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      data.parent = await TaskRepository.filterIdInTenant(
        data.parent,
        { ...this.options, session },
      );
      data.children =
        await TaskRepository.filterIdsInTenant(
          data.children,
          { ...this.options, session },
        );
      data.project =
        await ProjectRepository.filterIdInTenant(
          data.project,
          { ...this.options, session },
        );
      data.module =
        await ModuleProjectRepository.filterIdInTenant(
          data.module,
          { ...this.options, session },
        );
      data.owner = await UserRepository.filterIdInTenant(
        data.owner,
        { ...this.options, session },
      );
      const record = await TaskRepository.create(data, {
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
        'task',
      );

      throw error;
    }
  }

  async update(id, data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      data.parent = await TaskRepository.filterIdInTenant(
        data.parent,
        { ...this.options, session },
      );
      data.children =
        await TaskRepository.filterIdsInTenant(
          data.children,
          { ...this.options, session },
        );
      data.project =
        await ProjectRepository.filterIdInTenant(
          data.project,
          { ...this.options, session },
        );
      data.module =
        await ModuleProjectRepository.filterIdInTenant(
          data.module,
          { ...this.options, session },
        );

      const record = await TaskRepository.update(id, data, {
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
        'task',
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
        await TaskRepository.destroy(id, {
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
    return TaskRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return TaskRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return TaskRepository.findAndCountAll(
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
    const count = await TaskRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
