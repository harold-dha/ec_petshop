const BASE_URL = "https://http-nodejs-production-78a7.up.railway.app/api/v1";

const URL = "https://6363105f66f75177ea3c9364.mockapi.io/products";

export const get = async (url) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const post = async (url, body) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getProducts = async (id) => {
  try {
    const response = await fetch(`${URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
