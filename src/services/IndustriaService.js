import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const URL = "https://api-insighter-postgresql-rkym.vercel.app/";

class IndustriaService {
  async login(data) {
    return axios
      .post(`${URL}loginindustria`, {
        email: data.email,
        senha: data.senha,
      })
      .then((response) => {
        AsyncStorage.setItem("TOKEN", response.data.token);
        return Promise.resolve(response);
      })
      .catch((error) => {
        console.log(data);
        return Promise.reject(error);
      });
  }

  async cadastrar(data) {
    const token = await AsyncStorage.getItem("TOKEN");

    return axios
    .post(`${URL}industrias`, {
      nome: data.nome,
      cnpj: data.cnpj,
      telefone: data.telefone,
      email: data.email,
      cep: data.cep,
      uf: data.uf,
      cidade: data.cidade,
      bairro: data.bairro,
      rua: data.rua,
      numero: data.numero,
      senha: data.senha,
      status: "true",
    }, {
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



  async listarIndustria() {
    const token = await AsyncStorage.getItem("TOKEN");

    return axios
      .get(`${URL}industrias`, {
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

const industriaService = new IndustriaService();
export default industriaService;
