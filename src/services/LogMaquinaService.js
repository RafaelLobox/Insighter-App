import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const URL = "https://api-insighter-postgresql-rkym.vercel.app/";

class LogMaquinaService {
  async listarLogMaquina() {
    const token = await AsyncStorage.getItem("TOKEN");

    return axios
      .get(`${URL}logmaquinas`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((error) => {
        console.log("errou");
        return Promise.reject(error);
      });
  }
}

const logMaquinaService = new LogMaquinaService();
export default logMaquinaService;
