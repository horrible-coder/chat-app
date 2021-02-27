import socketTypes from "./types";

export const setSocket = (socket) => {
  return {
    type: socketTypes.SET_SOCKET,
    info: "Action to set the socket.",
    payload: socket,
  };
};
