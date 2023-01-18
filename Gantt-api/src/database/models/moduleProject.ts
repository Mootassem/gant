import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('moduleProject');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const ModuleProjectSchema = new Schema(
    {
      title: {
        type: String,
      },
      description: {
        type: String,
      },
      project: {
        type: Schema.Types.ObjectId,
        ref: 'project',
      },
      module: {
        type: Schema.Types.ObjectId,
        ref: 'moduleProject',
      },
      tasks: [
        {
          type: Schema.Types.ObjectId,
          ref: 'task',
        },
      ],
      startDate: {
        type: String,
      },
      endDate: {
        type: String,
      },
      tenant: {
        type: Schema.Types.ObjectId,
        ref: 'tenant',
        required: true,
      },
      createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      importHash: { type: String },
    },
    { timestamps: true },
  );

  ModuleProjectSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  ModuleProjectSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  ModuleProjectSchema.set('toJSON', {
    getters: true,
  });

  ModuleProjectSchema.set('toObject', {
    getters: true,
  });

  return database.model(
    'moduleProject',
    ModuleProjectSchema,
  );
};
