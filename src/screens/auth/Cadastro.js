import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
import Input from '../../components/Input';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function CadastroScreen(props) {
  return (

    <SafeAreaView style={{backgroundColor:'#F6F4F3', flex: 1}}>
      <ScrollView
      contentContainerStyle={{
        paddingTop: 60,
        paddingHorizontal: 20,
      }}>
        <Text style={{color: 'black', fontSize: 40, fontWeight: 'bold'}}>Cadastro</Text>
        <Text style={{color: 'grey', fontSize: 18, marginVertical: 10}}>Informe seus Dados</Text>
        <View style={{marginVertical: 20}}>
          <Input  label="Email" iconName='email'/>
          <Input  label="Nome da Empresa" iconName='robot-industrial'/>
          <Input  label="Telefone" iconName='phone'/>

          <Input  label="Senha" iconName='lock' secureTextEntry={true}/>
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
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
            Cadastre-se
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
  </SafeAreaView>
   
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
