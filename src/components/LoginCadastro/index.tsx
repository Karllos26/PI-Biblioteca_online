// authUtils.ts
export const isUserAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token; // Retorna true se houver um token, caso contrário, retorna false
};
