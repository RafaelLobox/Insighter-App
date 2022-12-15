import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput,SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, Alert, } from 'react-native';
import Input from '../../components/Input';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState } from "react";
import industriaService from "../../services/IndustriaService";
import COLORS from '../../components/Colors';

export default function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const entrar = () => {
    let data = {
      email: email,
      senha: password,
    };

    industriaService
      .login(data)
      .then((response) => {
        props.navigation.navigate("Home");
      })
      .catch((error) => {
        Alert.alert("Usuário inválido.");
      });
  };

  return (
    <SafeAreaView style={{backgroundColor:'#F6F4F3', flex: 1}}>
      <ImageBackground  
    source={require('../../assets/background2.png')} 
    style={{width: '100%', height: '100%'}} resizeMode='cover' 
      >
      <ScrollView
      contentContainerStyle={{
        paddingTop: 90,
        paddingHorizontal: 20,
      }}>
        <Text style={{color: 'black', fontSize: 40, fontWeight: 'bold'}}>Login</Text>
        <Text style={{color: COLORS.grey, fontSize: 18, marginVertical: 10}}>Informe seus Dados</Text>
        <View style={{marginVertical: 20}}>
          <Input
            label="Email"
            iconName="email"
            onChangeText={(email) => setEmail(email)}
          />
          
          <Input
            label="Senha"
            iconName="lock"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
          <TouchableOpacity
            onPress={() => entrar()}
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
           style={{color: '#F6F4F3', fontWeight: 'bold', fontSize: 18}}>
            Entrar
          </Text>
        </TouchableOpacity>
        <Text
        onPress={() =>{
          props.navigation.navigate("Cadastro");
        }}
          style={{color: 'black', 
          textAlign:"center", 
          fontSize: 16, 
          fontWeight: 'bold' 
          }}>Ainda não tem uma conta? cadastre-se</Text>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
      </ImageBackground>
    </SafeAreaView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
