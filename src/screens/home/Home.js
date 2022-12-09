import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>        
        <View style={styles.usernameView}>
          <Ionicons name='person' style={styles.iconPerson} size={30} color = "#F6F4F3"  />
          <Text style={styles.username}>Olá, Weslley Rafael!</Text>
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
          <View style={styles.lastProblemsText}>
            <Text>Últimas anomalias encontradas</Text>
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
      
      <StatusBar style="auto" />
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
    backgroundColor: '#F6F4F3',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '12%',
    width: '100%',
    // borderBottomLeftRadius: 15,
    // borderBottomRightRadius: 15,
    paddingBottom: 5,
  },
  usernameView: { 
    height: '100%',
    width: '100%',
    backgroundColor: '#482EB5',
    justifyContent: 'space-around',
    alignItems: 'center',
    // marginTop: '15%',
    flexDirection: 'row', 
    paddingTop: 25,
    
  },
  username: {
    color: '#F6F4F3',
    fontSize: 22,
    fontWeight: 'bold',    
  },
  // iconPerson: {
  //   paddingLeft: '2%',
  //   marginBottom: '5%'
  // },
  // iconBell: {
  //   paddingRight: '2%',
  //   marginBottom: '5%'
  // },
  space: {
    backgroundColor: '#F6F4F3',
    alignItems: 'center',
    justifyContent: 'center',
    height: '27.6%',
    width: '100%',    
  },
  notifications: {
    backgroundColor: '#6048c7',
    alignItems: 'center',
    justifyContent: 'center',
    height: '95%',
    width: '95%', 
    borderRadius: 15, 
  },
  lastProblems: {
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
    width: '95%',
    borderRadius: 15,
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
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '60%',
    width: '40%',
    borderRadius: 15,
  },
  problem2: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '60%',
    width: '40%',
    borderRadius: 15,
  },
  problem3: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '60%',
    width: '30%',
    borderRadius: 15,
    display: 'none',
  },
  count: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    height: '95%',
    width: '95%',
    borderRadius: 15,
  },  
});
