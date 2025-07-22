import * as yup from 'yup';

const emailSchema = yup.object({
    name: yup.string().min(1).max(50).required(),
    email: yup.string().email().required(),
    message: yup.string().min(1).max(500).required(),
});

export { emailSchema };