import axios from 'axios';
import FormData from 'form-data';
import * as yup from 'yup';

const MAILER_URL = 'https://smtp.maileroo.com/send';

const emailSchema = yup.object({
  name: yup.string().min(1).max(50).required(),
  email: yup.string().email().required(),
  message: yup.string().min(1).max(500).required(),
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    await emailSchema.validate(req.body);

    const { name, email, message } = req.body;

    const data = new FormData();
    data.append('from', `<${process.env.SERVEREMAIL}>`);
    data.append('to', `To Name <${process.env.PERSONALEMAIL}>`);
    data.append('subject', 'Contact Request');
    data.append('plain', `New message from\nName: ${name}\nEmail address: ${email}\nMessage: ${message}`);

    const headers = {
      'X-API-Key': process.env.APIKEY,
      ...data.getHeaders(),
    };

    const response = await axios.post(MAILER_URL, data, { headers });

    return res.status(200).json({ status: 'success', data: response.data });
  } catch (err) {
    console.error('Contact API error:', err?.response?.data || err.message || err);
    const message = err?.message || 'An error occurred';
    return res.status(400).json({ status: 'error', message });
  }
}
