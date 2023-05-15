const IP = '52.79.250.243';
const PORT = 9000;
const URL = `http://${IP}:${PORT}`;

const API = {
  diary: `${URL}/diary`,
  uploadImg: `${URL}/diary/image/upload`,
};
export default API;
