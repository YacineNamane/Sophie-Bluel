const BASE_URL = "http://localhost:5678/api";
const fetchgellery = async () => {
  const response = await fetch(`${BASE_URL}/works`);
  const data = await response.json();
  return data;
};

const fetchcategories = async () => {
  const response = await fetch(`${BASE_URL}/categories`);
  const data = await response.json();
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
    console.log(data);

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

// le paramètre formData corrspond aux données récupéré du formulaire

const fetchAddWork = async (formData, token) => {
  try {
    const response = await fetch(`${BASE_URL}/works`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    return response;
  } catch (error) {
    return error;
  }
};

export { fetchcategories, fetchgellery, login, fetchAddWork };
