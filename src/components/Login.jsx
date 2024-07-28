import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { account } from './appwriteConfig'; // Import the Appwrite configuration

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      try {
        const user = await account.get();
        setLoggedInUser(user);
      } catch (error) {
        setLoggedInUser(null);
      }
    };

    checkUser();
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    setError('');
    if (!email || !password) {
      setError('All fields are required.');
      setLoading(false);
      return;
    }
    try {
      await account.createEmailPasswordSession(email, password);
      const user = await account.get();
      setLoggedInUser(user);
    } catch (error) {
      if (error.message.includes('Invalid credentials')) {
        setError('Check your email and password.');
      } else if (error.message.includes('not found')) {
        setError('User not found.');
      } else {
        setError('An error occurred. Please try again.');
      }
      console.error('Login failed', error);
      setLoggedInUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await account.deleteSession('current');
      setLoggedInUser(null);
    } catch (error) {
      console.error('Logout failed', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-teal-300 to-blue-900">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">
          {loggedInUser ? `Welcome, ${loggedInUser.name}` : 'Login to MavericksTrails'}
        </h2>
        {!loggedInUser ? (
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => login(email, password)}
                className={`bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50' : ''}`}
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
              <button
                type="button"
                onClick={() => navigate('/register')}
                className={`bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50' : ''}`}
                disabled={loading}
              >
                Register
              </button>
            </div>
            <div className="mt-4">
              <button
                type="button"
                onClick={() => navigate('/forgot-password')}
                className="inline-block align-baseline font-bold text-sm text-primary hover:text-primary-dark"
              >
                Forgot Password?
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <p>Logged in as {loggedInUser.name}</p>
            <button
              type="button"
              onClick={logout}
              className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50' : ''}`}
              disabled={loading}
            >
              {loading ? 'Logging out...' : 'Logout'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
