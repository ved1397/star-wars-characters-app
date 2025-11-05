import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import Input from '../ui/Input';
import Button from '../ui/Button';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Login to Access</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="Email"
          />
          <Input
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="Password"
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
        <p className="mt-4 text-sm text-gray-400 text-center">
          Try: <code className="bg-gray-700 px-2 py-1 rounded">luke@skywalker.com</code> / <code className="bg-gray-700 px-2 py-1 rounded">force123</code>
        </p>
      </div>
    </div>
  );
}