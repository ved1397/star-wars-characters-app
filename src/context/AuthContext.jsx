import { createContext, useState, useEffect } from 'react';
import { login, logout, getToken, initAuth } from '../utils/mockAuth';

// Export as named AND default (helps autocomplete and flexible imports)
export const AuthContext = createContext();
export default AuthContext;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initAuth();
    const token = getToken();
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[0]));
        setUser({ email: payload.sub, name: payload.name });
      } catch {
        logout();
      }
    }
    setLoading(false);
  }, []);

  const signIn = async (email, password) => {
    const res = await login(email, password);
    localStorage.setItem('token', res.token);
    setUser(res.user);
  };

  const signOut = () => {
    logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
