import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons'; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ListMaquinas from '../../components/Listmaquinas';

const List = [
  {
    id: 1,
    maquina: 'Fatiadora',
    date: '12/12/12'
  },
  {
    id: 1,
    maquina: 'Fatiadora',
    date: '12/12/12'
  },
  {
    id: 1,
    maquina: 'Fatiadora',
    date: '12/12/12'
  },
  {
    id: 1,
    maquina: 'Fatiadora',
    date: '12/12/12'
  },
  {
    id: 1,
    maquina: 'Fatiadora',
    date: '12/12/12'
  },
  {
    id: 1,
    maquina: 'Fatiadora',
    date: '12/12/12'
  },
  
]



export default function NotificScreen(props) {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Icon
            onPress={() =>{
              props.navigation.navigate("Home");
            }}
          name='keyboard-backspace' size={25}/>
        <Text style={{fontSize: 20, fontWeight: 'bold', paddingLeft: 12}}>Notificações</Text>
      </View>
      
      <FlatList
        style={styles.list}
        data={List}
        keyExtractor={(item) =>String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <ListMaquinas data={item}/>}
      />



        <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  footer: {
    position: 'absolute',
    justifyContent: 'flex-end',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
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
  list:{
    marginTop: 5,
    marginStart: 14,
    marginEnd: 14,
  }
  
});

