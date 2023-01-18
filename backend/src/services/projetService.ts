import ProjetRepository from '../database/repositories/projetRepository';
import Error400 from '../errors/Error400';
import MongooseRepository from '../database/repositories/mongooseRepository';
import { IServiceOptions } from './IServiceOptions';
import TypeProjetRepository from '../database/repositories/typeProjetRepository';

export default class ProjetService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      data.typeProjet =
        await TypeProjetRepository.filterIdInTenant(
          data.typeProjet,
          { ...this.options, session },
        );
      const record = await ProjetRepository.create(data, {
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
        'projet',
      );
      throw error;
    }
  }

  async ProjetStatus() {
    return ProjetRepository.ProjetStatus(this.options);
  }
  async ProjetType() {
    return ProjetRepository.ProjetType(this.options);
  }

  async CountProjet() {
    return ProjetRepository.TotaleProjet(this.options);
  }
  async update(id, data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      data.typeProjet =
        await TypeProjetRepository.filterIdInTenant(
          data.typeProjet,
          { ...this.options, session },
        );
      const record = await ProjetRepository.update(
        id,
        data,
        {
          ...this.options,
          session,
        },
      );

      await MongooseRepository.commitTransaction(session);

      return record;
    } catch (error) {
      await MongooseRepository.abortTransaction(session);

      MongooseRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'projet',
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
        await ProjetRepository.destroy(id, {
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
    return ProjetRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return ProjetRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return ProjetRepository.findAndCountAll(
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
    const count = await ProjetRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
