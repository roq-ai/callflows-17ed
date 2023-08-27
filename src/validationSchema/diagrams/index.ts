import * as yup from 'yup';

export const diagramValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  company_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
