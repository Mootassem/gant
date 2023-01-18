import MongooseRepository from './mongooseRepository';
import MongooseQueryUtils from '../utils/mongooseQueryUtils';
import AuditLogRepository from './auditLogRepository';
import Error404 from '../../errors/Error404';
import { IRepositoryOptions } from './IRepositoryOptions';
import lodash from 'lodash';
import Objectif from '../models/objectif';
import Election from '../models/election';
import objectif from '../models/objectif';

class ObjectifRepository {
  static async create(data, options: IRepositoryOptions) {
    const currentTenant =
      MongooseRepository.getCurrentTenant(options);
    const currentUser =
      MongooseRepository.getCurrentUser(options);
    const [record] = await Objectif(
      options.database,
    ).create(
      [
        {
          ...data,

          tenant: currentTenant.id,
          createdBy: currentUser.id,
          updatedBy: currentUser.id,
        },
      ],
      options,
    );
    await this._createAuditLog(
      AuditLogRepository.CREATE,
      record.id,
      data,
      options,
    );
    return this.findById(record.id, options);
  }

  static async update(
    id,
    data,
    options: IRepositoryOptions,
  ) {
    const currentTenant =
      MongooseRepository.getCurrentTenant(options);
    let record =
      await MongooseRepository.wrapWithSessionIfExists(
        Objectif(options.database).findOne({
          _id: id,
          tenant: currentTenant.id,
        }),
        options,
      );

    if (!record) {
      throw new Error404();
    }

    await Objectif(options.database).updateOne(
      { _id: id },
      {
        ...data,
        updatedBy:
          MongooseRepository.getCurrentUser(options).id,
      },
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.UPDATE,
      id,
      data,
      options,
    );

    record = await this.findById(id, options);

    return record;
  }

  static async destroy(id, options: IRepositoryOptions) {
    const currentTenant =
      MongooseRepository.getCurrentTenant(options);

    let record =
      await MongooseRepository.wrapWithSessionIfExists(
        Objectif(options.database).findOne({
          _id: id,
          tenant: currentTenant.id,
        }),
        options,
      );

    if (!record) {
      throw new Error404();
    }

    await Objectif(options.database).deleteOne(
      { _id: id },
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.DELETE,
      id,
      record,
      options,
    );

    await MongooseRepository.destroyRelationToMany(
      id,
      Election(options.database),
      'objectifs',
      options,
    );
  }

  static async filterIdInTenant(
    id,
    options: IRepositoryOptions,
  ) {
    return lodash.get(
      await this.filterIdsInTenant([id], options),
      '[0]',
      null,
    );
  }

  static async filterIdsInTenant(
    ids,
    options: IRepositoryOptions,
  ) {
    if (!ids || !ids.length) {
      return [];
    }

    const currentTenant =
      MongooseRepository.getCurrentTenant(options);

    const records = await Objectif(options.database)
      .find({
        _id: { $in: ids },
        tenant: currentTenant.id,
      })
      .select(['_id']);

    return records.map((record) => record._id);
  }

  static async count(filter, options: IRepositoryOptions) {
    const currentTenant =
      MongooseRepository.getCurrentTenant(options);

    return MongooseRepository.wrapWithSessionIfExists(
      Objectif(options.database).countDocuments({
        ...filter,
        tenant: currentTenant.id,
      }),
      options,
    );
  }

  static async findById(id, options: IRepositoryOptions) {
    const currentTenant =
      MongooseRepository.getCurrentTenant(options);

    let record =
      await MongooseRepository.wrapWithSessionIfExists(
        Objectif(options.database)
          .findOne({ _id: id, tenant: currentTenant.id })
          .populate('election'),
        options,
      );

    if (!record) {
      throw new Error404();
    }

    return this._mapRelationshipsAndFillDownloadUrl(record);
  }

  static async findAndCountAll(
    { object, filter, limit = 0, offset = 0, orderBy = '' },
    options: IRepositoryOptions,
  ) {
    const currentTenant =
      MongooseRepository.getCurrentTenant(options);
    let criteriaAnd: any = [];
    criteriaAnd.push({
      tenant: currentTenant.id,
    });

    if (filter) {
      if (filter.id) {
        criteriaAnd.push({
          ['_id']: MongooseQueryUtils.uuid(filter.id),
        });
      }

      if (filter.numberRange) {
        const [start, end] = filter.numberRange;

        if (
          start !== undefined &&
          start !== null &&
          start !== ''
        ) {
          criteriaAnd.push({
            number: {
              $gte: start,
            },
          });
        }

        if (
          end !== undefined &&
          end !== null &&
          end !== ''
        ) {
          criteriaAnd.push({
            number: {
              $lte: end,
            },
          });
        }
      }

      if (filter.title) {
        criteriaAnd.push({
          title: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.title,
            ),
            $options: 'i',
          },
        });
      }

      if (filter.description) {
        criteriaAnd.push({
          description: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.description,
            ),
            $options: 'i',
          },
        });
      }

      if (filter.status) {
        criteriaAnd.push({
          status: filter.status,
        });
      }

      if (filter.yearRange) {
        const [start, end] = filter.yearRange;

        if (
          start !== undefined &&
          start !== null &&
          start !== ''
        ) {
          criteriaAnd.push({
            year: {
              $gte: start,
            },
          });
        }

        if (
          end !== undefined &&
          end !== null &&
          end !== ''
        ) {
          criteriaAnd.push({
            year: {
              $lte: end,
            },
          });
        }
      }

      if (filter.startDateRange) {
        const [start, end] = filter.startDateRange;

        if (
          start !== undefined &&
          start !== null &&
          start !== ''
        ) {
          criteriaAnd.push({
            startDate: {
              $gte: start,
            },
          });
        }

        if (
          end !== undefined &&
          end !== null &&
          end !== ''
        ) {
          criteriaAnd.push({
            startDate: {
              $lte: end,
            },
          });
        }
      }

      if (filter.endDateRange) {
        const [start, end] = filter.endDateRange;

        if (
          start !== undefined &&
          start !== null &&
          start !== ''
        ) {
          criteriaAnd.push({
            endDate: {
              $gte: start,
            },
          });
        }

        if (
          end !== undefined &&
          end !== null &&
          end !== ''
        ) {
          criteriaAnd.push({
            endDate: {
              $lte: end,
            },
          });
        }
      }

      if (filter.election) {
        criteriaAnd.push({
          election: MongooseQueryUtils.uuid(
            filter.election,
          ),
        });
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (
          start !== undefined &&
          start !== null &&
          start !== ''
        ) {
          criteriaAnd.push({
            ['createdAt']: {
              $gte: start,
            },
          });
        }

        if (
          end !== undefined &&
          end !== null &&
          end !== ''
        ) {
          criteriaAnd.push({
            ['createdAt']: {
              $lte: end,
            },
          });
        }
      }
    }

    const sort = MongooseQueryUtils.sort(
      orderBy || 'createdAt_DESC',
    );

    const skip = Number(offset || 0) || undefined;
    const limitEscaped = Number(limit || 0) || undefined;
    const criteria = criteriaAnd.length
      ? { $and: criteriaAnd }
      : null;

    let rows = await Objectif(options.database)
      .find(criteria)
      .skip(skip)
      .limit(limitEscaped)
      .sort(sort);

    const count = await Objectif(
      options.database,
    ).countDocuments(criteria);

    rows = await Promise.all(
      rows.map(this._mapRelationshipsAndFillDownloadUrl),
    );

    return { rows, count };
  }

  static async findAllAutocomplete(
    search,
    limit,
    options: IRepositoryOptions,
  ) {
    const currentTenant =
      MongooseRepository.getCurrentTenant(options);

    let criteriaAnd: Array<any> = [
      {
        tenant: currentTenant.id,
      },
    ];

    if (search) {
      criteriaAnd.push({
        $or: [
          {
            _id: MongooseQueryUtils.uuid(search),
          },
          {
            title: {
              $regex:
                MongooseQueryUtils.escapeRegExp(search),
              $options: 'i',
            },
          },
        ],
      });
    }

    const sort = MongooseQueryUtils.sort('title_ASC');
    const limitEscaped = Number(limit || 0) || undefined;

    const criteria = { $and: criteriaAnd };

    const records = await Objectif(options.database)
      .find(criteria)
      .limit(limitEscaped)
      .sort(sort);

    return records.map((record) => ({
      id: record.id,
      label: record.title,
    }));
  }

  static async _createAuditLog(
    action,
    id,
    data,
    options: IRepositoryOptions,
  ) {
    await AuditLogRepository.log(
      {
        entityName: Objectif(options.database).modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }

  static async _mapRelationshipsAndFillDownloadUrl(record) {
    if (!record) {
      return null;
    }

    const output = record.toObject
      ? record.toObject()
      : record;

    return output;
  }

  static async ObjectifStat(options: IRepositoryOptions) {
    let record = await objectif(options.database)
      .aggregate([
        // {
        //   $match: {
        //     assignedTo: Object(currentUser._id),
        //     testimonyType: 'testimony',
        //   },
        // },
        {
          $group: {
            _id: '$status',
            status: {
              $push: '$status',
            },
          },
        },
        // {
        //   $lookup: {
        //     from: 'typeprojets',
        //     localField: 'typeProjet',
        //     foreignField: '_id',
        //     as: 'projet',
        //   },
        // },
        {
          $project: {
            status: 1,
            count: { $size: '$status' },
          },
        },
      ])
      .allowDiskUse();
    return record;
  }
}

export default ObjectifRepository;
