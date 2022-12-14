import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryPie } from "victory-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import COLORS from '../../components/Colors';
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Latest from '../../components/Latest';
import LatestMachines from '../../components/LatestMachines';

const List = [
  {
    id: 1,
    maquina: 'Extrusora',
    industry: 'Zé Ramalho',
    date: '01/12/2002',
    status: 'Aguardando Manutenção',
  },
  {
    id: 2,
    maquina: 'Extrusora',
    industry: 'Zé Ramalho',
    date: '01/12/2002',
    status: 'Pronta',
  },
  {
    id: 3,
    maquina: 'Extrusora',
    industry: 'Zé Ramalho',
    date: '01/12/2002',
    status: 'Pronta',
  },
  {
    id: 4,
    maquina: 'Extrusora',
    industry: 'Zé Ramalho',
    date: '01/12/2002',
    status: 'Pronta',
  },
  {
    id: 5,
    maquina: 'Extrusora',
    industry: 'Zé Ramalho',
    date: '01/12/2002',
    status: 'Aguardando Manutenção',
  },
]

export default function HomeScreen(props) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <View style={{paddingBottom: 15,}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>
            Seja Bem-vindo!
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Olá,</Text>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: COLORS.blue}}>Weslley!</Text>
          </View>
        </View>
        <Icon 
          onPress={() =>{
            props.navigation.navigate("Perfil");
          }}
        name='account' size={38} color={COLORS.blue} />
      </View>
      
      <ScrollView>
        <TouchableOpacity
         onPress={() =>{
          props.navigation.navigate("Notificacoes");
        }}
        style={styles.notification}>
          <Icon name='alert-circle' size={85} color={COLORS.blue}/>
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 5}}>Anomalia Detectada!</Text>
            <Text style={{fontSize: 13, fontWeight: 'bold', color: 'grey'}}>Clique para mais informações.</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.title}>Últimas Máquinas cadastradas</Text>
        <LatestMachines/>
        <Text style={styles.title}>Últimas Anomalias</Text>

        <FlatList 
          style={styles.list}
          data={List}
          keyExtractor={ (item) => String(item.id) }
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <Latest data={item}/>}
        />

      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
    // <SafeAreaView style={styles.container}>
    //   <View style={styles.header}>        
    //     <View style={styles.usernameViewPerson}>
    //       <Ionicons name='person' style={styles.iconPerson} size={30} color = "#482EB5"  />
    //       <Text style={styles.username}>Olá, Weslley Rafael!</Text>
    //     </View>
    //     <View style={styles.viewBell}>
    //       <MaterialCommunityIcons name='bell' style={styles.iconBell} size={30} color = "#482EB5"/>
    //     </View>
    //   </View>
    //   <View style={styles.space}>
    //     <View style={styles.notifications}>
    //       <View style={styles.warning}> 
    //         <MaterialIcons name="dangerous" size={100} color="red" />
    //         <Text style={styles.textAnomalia}>Anomalia encontrada!</Text>
    //         {/* <Text style={styles.textAnomaliaDescription}>Clique aqui para mais informações</Text> */}
    //       </View>
    //     </View>
    //   </View>
      
    //   <View style={styles.space}>
    //     <View style={styles.lastProblems}>
    //       <View style={styles.lastProblemsTextView}>
    //         <Text style={styles.lastProblemsText}>Últimas anomalias</Text>
    //       </View>
    //       <Swiper style={styles.wrapper} paginationStyle={{marginBottom:0}}  dotColor={'#e0d1ee'} activeDotColor={'#482EB5'} loop={true} autoplayTimeout ={2} autoplay={true}>
    //         <View style={styles.problem}>
    //           <Text style={styles.text}>Tava</Text>
    //         </View>
    //         <View style={styles.problem}>
    //           <Text style={styles.text}>Enchendo as garrafas</Text>
    //         </View>
    //         <View style={styles.problem}>
    //           <Text style={styles.text}>E pegando água</Text>
    //         </View>
    //         <View style={styles.problem}>
    //           <Text style={styles.text}>E pegando água</Text>
    //         </View>
    //       </Swiper>
    //       {/* <View style={styles.lastProblemsSwiper}>
    //         <View style={styles.problem1}>
    //           <Text>treta 1</Text>
    //         </View>
    //         <View style={styles.problem2}>
    //           <Text>treta 2</Text>
    //         </View>
    //         <View style={styles.problem3}>
    //           <Text>treta 3</Text>
    //         </View>
    //       </View> */}
    //     </View>
    //   </View>
      
    //   <View style={styles.space}>
    //     <View style={styles.count}>
    //     {/* <VictoryPie
    //         data={[
    //           { x: "Cats", y: 35 },
    //           { x: "Dogs", y: 40 },
    //           { x: "Birds", y: 55 }
    //         ]}
    //       /> */}
    //     </View>
    //   </View>
    //   <StatusBar style="dark" />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header:{
    marginTop: 30,
    flexDirection:  'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  notification:{
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingStart: 40,
    paddingEnd: 40,
    marginStart: 14,
    marginEnd: 14,
    marginTop: 22,
    paddingTop: 22,
    paddingBottom: 20,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    elevation: 5,
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 25,
  },
  list:{
    marginTop: 5,
    marginStart: 14,
    marginEnd: 14,

  }


  
  
  // container: {
  //   flex: 1,
  //   backgroundColor: '#F6F4F3', 
  //   fontFamily: 'lucida grande',
  //   // alignItems: 'center',
  //   // justifyContent: 'center',
  // },
  // header: {
  //   // backgroundColor: '#482EB5',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: '15%',
  //   width: '100%',
  //   marginTop: 6,
  //   // borderBottomLeftRadius: 15,
  //   // borderBottomRightRadius: 15,
  //   // paddingBottom: 5,
  // },
  // usernameViewPerson: { 
  //   height: '100%',
  //   width: '65%',
  //   // backgroundColor: '#FFF',
  //   justifyContent: 'center',
  //   alignItems: 'flex-start',
  //   // marginTop: '15%',
  //   flexDirection: 'column', 
  //   paddingLeft: '5%',
  //   paddingTop: '5%',
  // },
  // viewBell: {
  //   height: '100%',
  //   width: '35%',
  //   // backgroundColor: 'grey',
  //   alignItems: 'center',
  //   flexDirection: 'row',
  //   justifyContent: 'flex-end',
  //   paddingRight: '5%',
  //   paddingBottom: '4%' //corrigir isso daqui, sobe o sino
  // },
  // username: {
  //   color: '#482EB5',
  //   fontSize: 22,
  //   fontWeight: 'bold',
  //   paddingTop: '6%',    
  // },
  // iconPerson: {
  //   // paddingLeft: '2%',
  //   // marginBottom: '5%'
  //     justifyContent: 'flex-start',
      
  // },
  // // iconBell: {
  // //   paddingRight: '2%',
  // //   marginBottom: '5%'
  // // },
  // space: {
  //   // backgroundColor: 'transparent',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: '28.1%',
  //   width: '100%',    
  // },
  // notifications: {
  //   backgroundColor: '#F6F4F3',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: '90%',
  //   width: '95%', 
  //   borderRadius: 15, 
  //   elevation: 8,
  // },
  // warning:{
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // textAnomalia:{
  //   fontSize: 24,
  //   fontWeight: 'bold'
  // },
  // textAnomaliaDescription:{

  // },
  
  // lastProblems: {
  //   flexDirection: 'column',
  //   // backgroundColor: 'black',
  //   alignItems: 'flex-start',
  //   justifyContent: 'center',
  //   height: '100%',
  //   width: '100%',
  //   borderRadius: 15,
  // },
  // lastProblemsTextView:{
  //   backgroundColor: '#F6F4F3',
  //   marginLeft:'2.5%',
  //   paddingRight:15,
  //   paddingLeft:10,
  //   // flexDirection: 'row',
  //   // alignItems: 'flex-end',
  //   marginBottom: 15,
  //   borderRadius: 10,
  //   elevation: 4.5,
  // },
  // lastProblemsText:{
  //   color: '#482EB5',
  //   fontSize: 22,
  //   fontWeight: 'bold',
  // },
  // wrapper: {},
  // problem: {
  //   flexDirection: 'row',
  //   backgroundColor: '#F6F4F3',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: '70%',
  //   width: '95%',
  //   marginTop: 0,
  //   marginRight: 'auto',
  //   marginBottom: 0,
  //   marginLeft: 'auto',
  //   borderRadius: 15,
  //   elevation: 8,
  // },
  // text: {
  //   color: '#482EB5',
  //   fontSize: 30,
  //   fontWeight: 'bold'
  // },
  // count: {
  //   backgroundColor: '#F6F4F3',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: '95%',
  //   width: '95%',
  //   marginTop: 0,
  //   marginRight: 'auto',
  //   marginBottom: 0,
  //   marginLeft: 'auto',
  //   borderRadius: 15,
  //   elevation: 8,
  // },  
});
