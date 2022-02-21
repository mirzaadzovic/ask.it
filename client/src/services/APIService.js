import axios from "../axios/axios";

export default class APIService {
  static async getAll(route, params) {
    const response = await axios
      .get(route, { params: params })
      .catch((err) => err);

    if (response.status === 200) return response.data;

    throw Error(response);
  }

  static getById = async (route, id) => {
    const response = await axios.get(`${route}/${id}`).catch((err) => null);

    if (response?.status === 200) {
      const messages = response.data;
      return messages;
    }
    return null;
  };

  static post = async (route, body) => {
    const response = await axios
      .post(route, body, { withCredentials: true })
      .catch((err) => null);

    if (response?.status === 201) {
      const data = response.data;
      return data;
    }
  };

  static put = async (route, data) => {
    const response = await axios
      .put(`${route}/${data.id}`, data, {
        withCredentials: true,
        data: data,
      })
      .catch((err) => null);

    if (response?.status === 200) {
      const chat = response.data;
      return chat;
    }
    return null;
  };
}
