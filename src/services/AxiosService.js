import { default as Axios } from "axios";

export const api = Axios.create({
  baseURL: 'https://drag-vs-champ.herokuapp.com/api',
  timeout: 10000
})