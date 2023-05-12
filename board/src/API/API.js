const IP = '10.58.52.75';
const PORT = 9000;
const URL = `http://${IP}:${PORT}`;

const API = {
  createDiary: `${URL}/diary`,
  uploadImg: `${URL}/diary/image/upload`,
};
export default API;
