const fetchgellery = async () => {
  const response = await fetch("http://localhost:5678/api/works");
  const data = await response.json();
  console.log(data);
  return data;
};

export { fetchgellery };
