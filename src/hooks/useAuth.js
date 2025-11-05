import { useContext } from 'react';
import AuthContext from '../context';

/**
 * @returns {{ user: { email: string, name: string } | null, signIn: (email: string, password: string) => Promise<void>, signOut: () => void, loading: boolean }}
 */
export const useAuth = () => useContext(AuthContext);