import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const URL = "https://api-insighter-postgresql-rkym.vercel.app/";

class MaquinaService {
  async listarMaquina() {
    const token = await AsyncStorage.getItem("TOKEN");

    return axios
      .get(`${URL}maquinas`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((error) => {
        Alert.alert("errou");
        return Promise.reject(error);
      });
  }
}

const maquinaService = new MaquinaService();
export default maquinaService;
