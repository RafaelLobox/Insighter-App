import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../components/Colors';

export default function PerfilScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.header}>
        <Icon
            onPress={() =>{
              props.navigation.navigate("Home");
            }}
          name='keyboard-backspace' size={25}/>
        <Text style={{fontSize: 20, fontWeight: 'bold', paddingLeft: 12}}>Perfil</Text>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.userInfoHeader}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
          <Icon name='account' size={80}/>
            <View style={{marginLeft: 20}}>
              <Text style={[styles.userName,{marginTop:15, marginBottom: 5}]}>Weslley Lobo</Text>
              <Text style={styles.caption}>Industry@gmail</Text>
            </View>
        </View>   
          
        <View style={styles.userAdressView}>
          <View style={styles.row}>
            <Icon style={styles.icon} name='home' color={COLORS.grey} size={20}/>
            <Text style={{color: COLORS.grey}}>La Plata,Argentina</Text>
          </View>
          <View style={styles.row}>
            <Icon style={styles.icon} name='phone' color={COLORS.grey} size={20}/>
            <Text style={{color: COLORS.grey}}>81 9917-2155</Text>
          </View>
          <View style={styles.row}>
            <Icon style={styles.icon} name='email' color={COLORS.grey} size={20}/>
            <Text style={{color: COLORS.grey}}>rafaelweslley99@gmail.com</Text>
          </View>
        </View> 
      </View>

      <View style={styles.infoBoxWrapper}>
        <View style={[styles.infoBox, {
          borderRightColor: '#dddddd',
          borderRightWidth: 1
        }]}>
          <Text  style={styles.userName}>13</Text>
          <Text style={styles.caption} >Manutenções</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.userName}>12</Text>
          <Text style={styles.caption}>Maquinas cadastradas</Text>
        </View>
      </View>     
    </View>

      
      <View style={styles.menuWrapper}>
      <TouchableOpacity   onPress={() =>{
            props.navigation.navigate("Notificacoes");
          }}>
          <View style={styles.menuItem}>
            <Icon name="bell-ring" color={COLORS.blue} size={25}/>
            <Text style={styles.menuItemText}>Notificações</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity   onPress={() =>{
            props.navigation.navigate("Seguranca");
          }}>
          <View style={styles.menuItem}>
            <Icon name="lock" color={COLORS.blue} size={25}/>
            <Text style={styles.menuItemText}>Segurança</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity   onPress={() =>{
            props.navigation.navigate("Termos");
          }}>
          <View style={styles.menuItem}>
            <Icon name="information" color={COLORS.blue} size={25}/>
            <Text style={styles.menuItemText}>Termos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="door-open" color={COLORS.red} size={25}/>
            <Text style={styles.menuItemText}>Sair</Text>
          </View>
        </TouchableOpacity>
      </View>

      
     
      
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
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    
  },
  userInfoHeader: {
    marginLeft: 25,
    marginBottom: 15,
  },
  profilePicture: {
    width:120,
    resizeMode: 'stretch',
    height: '100%',
  },
  row: {
    // marginLeft: 25,
  },
  icon:{
    // marginLeft: 25,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userAdressView:{
    marginTop:20,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
   
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
