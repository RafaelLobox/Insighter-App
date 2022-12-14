import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MaquinasScreen(props) {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Icon
            onPress={() =>{
              props.navigation.navigate("Home");
            }}
          name='keyboard-backspace' size={25}/>
        <Text style={{fontSize: 20, fontWeight: 'bold', paddingLeft: 12}}>Máquinas</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity >
            <View style={styles.iconContainer}>
              <MaterialIcons name="add" color="white" size={30} />
            </View>
        </TouchableOpacity>
      </View>
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
  
});

// import React, { Component } from 'react'
// import { AppRegistry, StyleSheet, Text, View } from 'react-native'
 
// import Swiper from 'react-native-swiper'
 
// const styles = StyleSheet.create({
//   wrapper: {},
//   problem1: {
//     flexDirection: 'row',
//     backgroundColor: '#482EB5',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     height: '60%',
//     width: '100%',
//     borderRadius: 15,
//   },
//   problem2: {
//     flexDirection: 'row',
//     backgroundColor: '#482EB5',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     height: '60%',
//     width: '100%',
//     borderRadius: 15,
//   },
//   problem3: {
//     flexDirection: 'row',
//     backgroundColor: '#482EB5',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     height: '60%',
//     width: '100%',
//     borderRadius: 15,
//   },
//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold'
//   }
// })
 
// export default function MaquinasScreen() {
//   return (
//     <Swiper style={styles.wrapper} loop={true} autoplayTimeout ={4} autoplay={true}>
//         <View style={styles.problem1}>
//           <Text style={styles.text}>Tava</Text>
//         </View>
//         <View style={styles.problem2}>
//           <Text style={styles.text}>Enchendo as garrafas</Text>
//         </View>
//         <View style={styles.problem3}>
//           <Text style={styles.text}>E pegando água</Text>
//         </View>
//     </Swiper>
//   );
// }
// // export default class SwiperComponent extends Component {
// //   render() {
// //     return (
      
// //     )
// //   }
// // }
 
// // AppRegistry.registerComponent('myproject', () => SwiperComponent)