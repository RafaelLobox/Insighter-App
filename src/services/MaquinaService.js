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
        return Promise.reject(error);
      });
  }

  async cadastrarMaquina(data) {
    const token = await AsyncStorage.getItem("TOKEN");

    return axios
      .post(
        `${URL}maquinas`,
        {
          id_setor: data.id_setor,
          nome: data.nome,
          temperatura_min: data.temperatura_min,
          temperatura_max: data.temperatura_max,
          vibracao_min: data.vibracao_min,
          vibracao_max: data.vibracao_max,
          ruido_min: data.ruido_min,
          ruido_max: data.ruido_max,
          status: "true",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}

const maquinaService = new MaquinaService();
export default maquinaService;
