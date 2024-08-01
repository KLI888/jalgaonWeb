// utils/csrf.js

export function getCsrfToken() {
    return fetch('http://127.0.0.1:8000/app/csrf-token/', {
      method: 'GET',
      credentials: 'include', // Include cookies in the request
    })
      .then(response => response.json())
      .then(data => data.csrfToken);
  }
  