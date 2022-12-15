import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
import Input from '../../components/Input';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../components/Colors';

export default function CadastroScreen(props) {
  return (

    <SafeAreaView style={{backgroundColor:'#F6F4F3', flex: 1}}>
        <ImageBackground  
    source={require('../../assets/background2.png')} 
    style={{width: '100%', height: '100%'}} resizeMode='cover' 
>
      <ScrollView
      contentContainerStyle={{
        paddingTop: 60,
        paddingHorizontal: 20,
      }}>
        <Text style={{color: 'black', fontSize: 40, fontWeight: 'bold'}}>Cadastro</Text>
        <Text style={{color: COLORS.grey, fontSize: 18, marginVertical: 10}}>Insira os dados da sua empresa</Text>
        <View style={{marginVertical: 20}}>
          <Input  label="Nome da Empresa" iconName='robot-industrial'/>
          <Input  label="CNPJ" iconName='file-document'/>
          <Input  label="Telefone" iconName='phone'/>
          <Input  label="E-mail" iconName='email'/>
          <Input  label="CEP" iconName='city'/>
          <Input  label="UF" iconName='city'/>
          <Input  label="Cidade" iconName='city'/>
          <Input  label="Bairro" iconName='city'/>
          <Input  label="Rua" iconName='city'/>
          <Input  label="Número" iconName='home'/>
          <Input  label="Senha" iconName='lock'/>
          <TouchableOpacity
          style={{
            height: 55,
            width: '100%',
            backgroundColor:'#3540e6',
            marginVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
      
          }}>
          <Text style={{color: '#F6F4F3', fontWeight: 'bold', fontSize: 18}}>
            Cadastrar
          </Text>
        </TouchableOpacity>
        <Text
         onPress={() =>{
          props.navigation.navigate("Login");
        }}
          style={{color: 'black', 
          textAlign:"center", 
          fontSize: 16, 
          fontWeight: 'bold' 
          }} >já tem uma conta?Login</Text>
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
