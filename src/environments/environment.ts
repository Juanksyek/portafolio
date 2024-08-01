// environment.ts
// export const environment = {
//   production: false,
//   apiUrl: 'http://localhost:3000' // URL local para desarrollo
// };

// environment.prod.ts
export const environment = {
  production: true,
  apiUrl: process.env["API_URL"]
};
