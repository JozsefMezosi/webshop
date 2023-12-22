import axios from "axios";

export const authService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AUTH_SERVICE_URL,
});
