const BASE_URL = "http://localhost:5678/api";
const fetchgellery = async () => {
  const response = await fetch(`${BASE_URL}/works`);
  const data = await response.json();
  console.log(data);
  return data;
};

const fetchcategories = async () => {
  const response = await fetch(`${BASE_URL}/categories`);
  const data = await response.json();
  console.log(data);
  return data;
};

const login = async (user) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    if (response.ok) {
      return {
        connected: true,
        token: data.token,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      connected: false,
      error: error,
    };
  }
};

export { fetchcategories, fetchgellery, login };
