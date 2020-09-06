import io from "socket.io-client";
// import { SOCKET_URL } from "config";
const URL = "http://localhost:5000";
export const socket = io(URL);
