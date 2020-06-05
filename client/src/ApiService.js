const BASE_URL = 'http://localhost:3001';

// possible to refactor into a 'fetch factory' to reduce repetition

const apiService = {};

apiService.register = (user) => {
  return fetch(`${BASE_URL}/register`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.login = (user) => {
  // are these inconsistent paths ok?
  console.log('hey something login api service running');
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.logout = (user) => {
  // do I need to send the user to logout?
  return fetch(`${BASE_URL}/logout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export default apiService;
