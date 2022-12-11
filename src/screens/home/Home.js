import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>        
        <View style={styles.usernameViewPerson}>
          <Ionicons name='person' style={styles.iconPerson} size={30} color = "#F6F4F3"  />
          <Text style={styles.username}>Olá, Weslley Rafael!</Text>
        </View>
        <View style={styles.viewBell}>
          <MaterialCommunityIcons name='bell' style={styles.iconBell} size={30} color = "#F6F4F3"/>
        </View>
      </View>
      {/* <LinearGradient 
     colors={['#6e45e2', '#88d3ce']}
     style = { styles.container }>
          <View>
               //your elements here
          </View> 
      </LinearGradient> */}
      <View style={styles.space}>
        <View style={styles.notifications}>
          <Text>notificações</Text>
        </View>
      </View>
      
      <View style={styles.space}>
        <View style={styles.lastProblems}>
          <View style={styles.lastProblemsTextView}>
            <Text style={styles.lastProblemsText}>Últimas anomalias encontradas</Text>
          </View>
          <View style={styles.lastProblemsSwiper}>
            <View style={styles.problem1}>
              <Text>treta 1</Text>
            </View>
            <View style={styles.problem2}>
              <Text>treta 2</Text>
            </View>
            <View style={styles.problem3}>
              <Text>treta 3</Text>
            </View>
          </View>
        </View>
      </View>
      
      <View style={styles.space}>
        <View style={styles.count}>
          <Text>contagem</Text>
        </View>
      </View>
      
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F4F3', 
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    backgroundColor: '#482EB5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '15%',
    width: '100%',
    // borderBottomLeftRadius: 15,
    // borderBottomRightRadius: 15,
    // paddingBottom: 5,
  },
  usernameViewPerson: { 
    height: '100%',
    width: '65%',
    // backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // marginTop: '15%',
    flexDirection: 'column', 
    paddingLeft: '5%',
    paddingTop: '5%',
  },
  viewBell: {
    height: '100%',
    width: '35%',
    // backgroundColor: 'grey',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: '5%',
    paddingBottom: '4%' //corrigir isso daqui, sobe o sino
  },
  username: {
    color: '#F6F4F3',
    fontSize: 22,
    fontWeight: 'bold',
    paddingTop: '6%',    
  },
  iconPerson: {
    // paddingLeft: '2%',
    // marginBottom: '5%'
      justifyContent: 'flex-start',
      
  },
  // iconBell: {
  //   paddingRight: '2%',
  //   marginBottom: '5%'
  // },
  space: {
    backgroundColor: '#F6F4F3',
    alignItems: 'center',
    justifyContent: 'center',
    height: '28.3%',
    width: '100%',    
  },
  notifications: {
    backgroundColor: '#6048c7',
    alignItems: 'center',
    justifyContent: 'center',
    height: '95%',
    width: '98%', 
    borderRadius: 15, 
  },
  lastProblems: {
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    width: '98%',
    borderRadius: 15,
  },
  lastProblemsTextView:{
    backgroundColor: 'black',
    // height: '20%',
    // flexDirection: 'row',
    // alignItems: 'flex-end',
    // marginTop: 25,
  },
  lastProblemsText:{
    color: '#482EB5',
    fontSize: 22,
    fontWeight: 'bold',
  },
  lastProblemsSwiper: {
    flexDirection: 'row',
    // backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
    width: '100%',
    // borderRadius: 15,
    
  },
  problem1: {
    flexDirection: 'row',
    backgroundColor: '#482EB5',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '60%',
    width: '30%',
    borderRadius: 15,
  },
  problem2: {
    flexDirection: 'row',
    backgroundColor: '#482EB5',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '60%',
    width: '30%',
    borderRadius: 15,
  },
  problem3: {
    flexDirection: 'row',
    backgroundColor: '#482EB5',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '60%',
    width: '30%',
    borderRadius: 15,
  },
  count: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    height: '95%',
    width: '98%',
    borderRadius: 15,
  },  
});
