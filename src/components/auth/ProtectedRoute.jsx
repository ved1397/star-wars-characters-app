import { useAuth } from '../../hooks/useAuth';
import LoginForm from './LoginForm';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div className="flex justify-center py-20"><div className="animate-spin h-10 w-10 border-t-4 border-yellow-400 rounded-full"></div></div>;
  if (!user) return <LoginForm />;

  return children;
}