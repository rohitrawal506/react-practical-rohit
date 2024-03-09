const API_URL = "https://rickandmortyapi.com/api";

export const getCharacters = async (currentPage) => {
  const response = await fetch(`${API_URL}/character?page=${currentPage}`);
  const data = await response.json();
  return data;
};

export const getCharacterById = async (id) => {
  const response = await fetch(`${API_URL}/character/${id}`);
  const data = await response.json();
  return data;
};

export const searchCharacters = async (keyword) => {
  const response = await fetch(`${API_URL}/character/?name=${keyword}`);
  const data = await response.json();
  return data;
};

export const getEpisodeById = async (id) => {
  const response = await fetch(`${API_URL}/episode/${id}`);
  const data = await response.json();
  return data;
};
