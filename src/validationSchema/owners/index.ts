import * as yup from 'yup';

export const ownerValidationSchema = yup.object().shape({
  assigned_at: yup.date().required(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
