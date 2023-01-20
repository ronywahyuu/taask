import axios from "axios";
import { Todo } from "./Todo";

const url = "http://localhost:4000/todos";

function statusToError(status: number): string {
  switch (status) {
    case 404:
      return "Not Found";
    case 500:
      return "Server Error";
    default:
      return "Unknown Error";
  }
}

const todoAPI = {
  get(id?: number): Promise<any> {
    if (id) {
      return axios
        .get(`${url}/${id}`)
        .then((res) => res)
        .catch((err) => console.log(err));
    }

    return axios
      .get(url)
      .then((res) => res)
      .catch((err) => console.log(err));
  },

  add(payload: Todo): Promise<any> {
    return (
      axios
        .post(url, payload)
        // .then((res) => res)
        .catch((err) => console.log(err))
    );
  },

  put(id: number, payload: Todo): Promise<any> {
    return axios
      .put(`${url}/${id}`, payload)
      .then((res) => res)
      .catch((err) => console.log(`edit error: ${err}`));
  },
};

export { todoAPI };
