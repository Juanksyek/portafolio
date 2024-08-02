export const environment = {
  production: true,
  apiUrl: (window as { [key: string]: any })["env"]["API_URL"] || 'http://localhost:3000',
};