// Mock JWT
const generateToken = (user) => {
  const payload = {
    sub: user.email,
    name: user.name,
    iat: Date.now() / 1000,
    exp: Date.now() / 1000 + 3600, // 1 hour
  };
  return btoa(JSON.stringify(payload));
};

const mockUsers = {
  'luke@skywalker.com': { password: 'force123', name: 'Luke Skywalker' },
};

let token = null;
let refreshTimeout = null;

export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUsers[email];
      if (user && user.password === password) {
        token = generateToken({ email, name: user.name });
        scheduleRefresh();
        resolve({ token, user: { email, name: user.name } });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 500);
  });
};

export const logout = () => {
  token = null;
  if (refreshTimeout) clearTimeout(refreshTimeout);
  localStorage.removeItem('token');
};

export const getToken = () => token;

const scheduleRefresh = () => {
  if (refreshTimeout) clearTimeout(refreshTimeout);
  refreshTimeout = setTimeout(() => {
    if (token) {
      const payload = JSON.parse(atob(token));
      payload.exp = Date.now() / 1000 + 3600;
      token = btoa(JSON.stringify(payload));
      localStorage.setItem('token', token);
      scheduleRefresh();
    }
  }, 55 * 60 * 1000); // Refresh 5 mins before expiry
};

export const initAuth = () => {
  const saved = localStorage.getItem('token');
  if (saved) {
    token = saved;
    scheduleRefresh();
  }
};