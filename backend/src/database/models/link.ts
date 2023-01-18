import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('link');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const LinkSchema = new Schema(
    {
      source: {
        type: Schema.Types.ObjectId,
        ref: 'task',
      },
      target: {
        type: Schema.Types.ObjectId,
        ref: 'task',
      },
      type: {
        type: Number,
      },
      tenant: {
        type: Schema.Types.ObjectId,
        ref: 'tenant',
        required: true
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

  LinkSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  

  LinkSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  LinkSchema.set('toJSON', {
    getters: true,
  });

  LinkSchema.set('toObject', {
    getters: true,
  });

  return database.model('link', LinkSchema);
};
