import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import Input from "../../components/Input";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../../components/Colors";

import React, { useState } from "react";
import industriaService from "../../services/IndustriaService";

export default function CadastroScreen(props) {
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [uf, setUf] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [senha, setSenha] = useState("");

  const cadastrar = () => {
    let data = {
      nome: nome,
      cnpj: cnpj,
      telefone: telefone,
      email: email,
      cep: cep,
      uf: uf,
      cidade: cidade,
      bairro: bairro,
      rua: rua,
      numero: numero,
      senha: senha,
    };

    industriaService
      .cadastrar(data)
      .then((response) => {
        Alert.alert("Usuário cadastrado com sucesso.");
        props.navigation.navigate("Login");
      })
      .catch((error) => {
        Alert.alert("Falha ao cadastrar usuário.");
      });
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#F6F4F3", flex: 1 }}>
      <ImageBackground
        source={require("../../assets/background2.png")}
        style={{ width: "100%", height: "100%" }}
        resizeMode="cover"
      >
        <ScrollView
          contentContainerStyle={{
            paddingTop: 60,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ color: "black", fontSize: 40, fontWeight: "bold" }}>
            Cadastro
          </Text>
          <Text
            style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}
          >
            Insira os dados da sua empresa
          </Text>
          <View style={{ marginVertical: 20 }}>
            <Input
              label="Nome da Empresa"
              iconName="robot-industrial"
              onChangeText={(nome) => setNome(nome)}
            />
            <Input
              label="CNPJ"
              iconName="file-document"
              onChangeText={(cnpj) => setCnpj(cnpj)}
            />
            <Input
              label="Telefone"
              iconName="phone"
              onChangeText={(telefone) => setTelefone(telefone)}
            />
            <Input
              label="E-mail"
              iconName="email"
              onChangeText={(email) => setEmail(email)}
            />
            <Input
              label="CEP"
              iconName="city"
              onChangeText={(cep) => setCep(cep)}
            />
            <Input
              label="UF"
              iconName="city"
              onChangeText={(uf) => setUf(uf)}
            />
            <Input
              label="Cidade"
              iconName="city"
              onChangeText={(cidade) => setCidade(cidade)}
            />
            <Input
              label="Bairro"
              iconName="city"
              onChangeText={(bairro) => setBairro(bairro)}
            />
            <Input
              label="Rua"
              iconName="city"
              onChangeText={(rua) => setRua(rua)}
            />
            <Input
              label="Número"
              iconName="home"
              onChangeText={(numero) => setNumero(numero)}
            />
            <Input
              label="Senha"
              iconName="lock"
              onChangeText={(senha) => setSenha(senha)}
            />
            <TouchableOpacity
              onPress={() => cadastrar()}
              style={{
                height: 55,
                width: "100%",
                backgroundColor: "#3540e6",
                marginVertical: 20,
                justifyContent: "center",
                alignItems: "center",
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            >
              <Text
                style={{ color: "#F6F4F3", fontWeight: "bold", fontSize: 18 }}
              >
                Cadastrar
              </Text>
            </TouchableOpacity>
            <Text
              onPress={() => {
                props.navigation.navigate("Login");
              }}
              style={{
                color: "black",
                textAlign: "center",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              já tem uma conta?Login
            </Text>
          </View>
        </ScrollView>
        <StatusBar style="auto" />
      </ImageBackground>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
