import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>Olá, Wesllesy pica torta!</Text>
      </View>
      {/* <LinearGradient 
     colors={['#6e45e2', '#88d3ce']}
     style = { styles.container }>

          <View>
               //your elements here
          </View> 
      </LinearGradient> */}
      {/* <View style={styles.notifications}>
        <Text>notificações</Text>
      </View>
      <View style={styles.lastProblems}>
        <Text>últimas tretas</Text>
      </View>
      <View style={styles.count}>
        <Text>contagem</Text>
      </View> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#482EB5',
    
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    backgroundColor: '#F6F4F3',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '15%',
    width: '100%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  username: {
    paddingLeft: '15%',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',    
  },
  notifications: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
    width: '100%',
  },
  lastProblems: {
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    height: '20%',
    width: '100%',
  },
  count: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    height: '35%',
    width: '100%',
  },
  
});
