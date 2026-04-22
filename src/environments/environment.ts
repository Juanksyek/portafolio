export const environment = {
  production: true,
  // ─── EmailJS Setup ───────────────────────────────────────────────
  // 1. Create a free account at https://www.emailjs.com
  // 2. Add a service (Outlook / Gmail) and note the Service ID
  // 3. Create an email template with variables:
  //    {{from_name}}, {{reply_to}}, {{phone}}, {{message}}, {{to_email}}
  // 4. Copy your Public Key from Account > API Keys
  // You can either set values here (not recommended for secrets) OR create
  // `src/assets/env.js` (copy from env.example.js) with the keys. The app
  // prefers keys injected via `window.__env` (assets/env.js) at runtime.
  emailjsServiceId:  'YOUR_SERVICE_ID',
  emailjsTemplateId: 'YOUR_TEMPLATE_ID',
  emailjsPublicKey:  'YOUR_PUBLIC_KEY',
};