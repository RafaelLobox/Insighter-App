import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Input from '../../components/Input';
import COLORS from '../../components/Colors';

export default function EditMaquinas(props) {
  return (
    <SafeAreaView  style={{backgroundColor:'#F6F4F3', flex: 1}}>
      <View style={styles.header}>
        <Icon
            onPress={() =>{
              props.navigation.navigate("Home");
            }}
          name='keyboard-backspace' size={25}/>
        <Text style={{fontSize: 20, fontWeight: 'bold', paddingLeft: 12}}> Edição de Máquinas</Text>
      </View>
      <ScrollView
      contentContainerStyle={{
        paddingTop: 20,
        paddingHorizontal: 20,
      }}>
        <Text style={{color: 'black', fontSize: 40, fontWeight: 'bold'}}>Edição de</Text>
        <Text style={{color: COLORS.blue, fontSize: 40, fontWeight: 'bold'}}>Maquinas</Text>

        <Text style={{color: 'grey', fontSize: 18, marginVertical: 10}}>Edite os Dados da Máquina</Text>
        <View style={{marginVertical: 20}}>
          <Input  label="Nome da Máquina:" iconName='robot-industrial'/>

          <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom:15}}>Sensores de Temperatura:</Text>
          <Input  label="Temperatura Max:" iconName='fire' keyboardType='numeric'/>
          <Input  label="Temperatura Min:" iconName='fire' keyboardType='numeric'/>

          <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 15}}>Sensores de Vibração:</Text>
          <Input  label="Vibração Max:" iconName='vibrate'  keyboardType='numeric'/>
          <Input  label="Vibração Min:" iconName='vibrate' keyboardType='numeric'/>
          
          <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 15}}>Sensores de Ruído:</Text>
          <Input  label="Ruído Max:" iconName='volume-vibrate' keyboardType='numeric'/>
          
          <Input  label="Ruído Min:" iconName='volume-vibrate' keyboardType='numeric'/>
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
            Salvar
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={{
                height: 55,
                width: '100%',
                backgroundColor:'#ec2f2f',
                marginVertical: 20,
                justifyContent: 'center',
                alignItems: 'center',
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
      
            }}>
            <Text style={{color: '#F6F4F3', fontWeight: 'bold', fontSize: 18}}>
            Cancelar
            </Text>
        </TouchableOpacity>
        </View>
    </ScrollView>
     
        <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
    // elevation: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

