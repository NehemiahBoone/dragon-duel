import { default as Axios } from "axios";

export const api = Axios.create({
  baseURL: ' https://dragon-duel.herokuapp.com/api',
  timeout: 3000
})