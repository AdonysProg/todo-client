import axios from 'axios';
const api = 'http://localhost:4000/api';

export const getNotes = async () => {
  return await axios.get(`${api}/note`);
};
export const postNote = async (data) => {
  return await axios.post(`${api}/note`, {
    title: data.title,
    description: data.description,
  });
};

export const deleteNoteById = async (id) => {
  return await axios.delete(`${api}/note/${id}`);
};
