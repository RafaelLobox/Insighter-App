import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput,SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import Input from '../../components/Input';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function LoginScreen(props) {
  return (
    <SafeAreaView style={{backgroundColor:'#F6F4F3', flex: 1}}>
      <ScrollView
      contentContainerStyle={{
        paddingTop: 90,
        paddingHorizontal: 20,
      }}>
        <Text style={{color: 'black', fontSize: 40, fontWeight: 'bold'}}>Login</Text>
        <Text style={{color: 'grey', fontSize: 18, marginVertical: 10}}>Informe seus Dados</Text>
        <View style={{marginVertical: 20}}>
          <Input  label="Email" iconName='email'/>
          

          <Input  label="Senha" iconName='lock' secureTextEntry={true}/>
          <TouchableOpacity
             onPress={() =>{
              props.navigation.navigate("Home");
            }}
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
          }}>Ainda não tem uma contra?cadastre-se</Text>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
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
