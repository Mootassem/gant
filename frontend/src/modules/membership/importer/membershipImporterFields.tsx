import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import membershipEnumerators from 'src/modules/membership/membershipEnumerators';

export default [
  {
    name: 'status',
    label: i18n('entities.membership.fields.status'),
    schema: schemas.enumerator(
      i18n('entities.membership.fields.status'),
      {
        options: membershipEnumerators.status,
      },
    ),
  },
  {
    name: 'paymentMethod',
    label: i18n('entities.membership.fields.paymentMethod'),
    schema: schemas.enumerator(
      i18n('entities.membership.fields.paymentMethod'),
      {
        options: membershipEnumerators.paymentMethod,
      },
    ),
  },
  {
    name: 'formule',
    label: i18n('entities.membership.fields.formule'),
    schema: schemas.relationToOne(
      i18n('entities.membership.fields.formule'),
      {},
    ),
  },
  {
    name: 'attachements',
    label: i18n('entities.membership.fields.attachements'),
    schema: schemas.files(
      i18n('entities.membership.fields.attachements'),
      {},
    ),
  },
  {
    name: 'user',
    label: i18n('entities.membership.fields.user'),
    schema: schemas.relationToOne(
      i18n('entities.membership.fields.user'),
      {},
    ),
  },
  {
    name: 'campaign',
    label: i18n('entities.membership.fields.campaign'),
    schema: schemas.relationToOne(
      i18n('entities.membership.fields.campaign'),
      {},
    ),
  },
  {
    name: 'amount',
    label: i18n('entities.membership.fields.amount'),
    schema: schemas.decimal(
      i18n('entities.membership.fields.amount'),
      {},
    ),
  },
];
