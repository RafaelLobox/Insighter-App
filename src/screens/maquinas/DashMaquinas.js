import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Animated, VirtualizedList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../components/Colors';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLine } from "victory-native";


export default function DashMaquinas(props) {
  return (
    <SafeAreaView style={{flex: 1 , backgroundColor: COLORS.white}}>
      <View style={styles.header}>
        <Icon
            onPress={() =>{
              props.navigation.navigate("Home");
            }}
          name='keyboard-backspace' size={25}/>
        <Text style={{fontSize: 20, fontWeight: 'bold', paddingLeft: 12}}>Dash Máquinas</Text>
      </View>
      <ScrollView style={styles.chart}>
        <View style={styles.boxChart}>
         <Text style={styles.title}>Últimas Máquinas cadastradas</Text>

          <VictoryChart theme={VictoryTheme.material}>
            <VictoryLine
                style={{
                  interpolation:"natural",
                  data: { stroke: COLORS.blue },
                  parent: { border: "1px solid #ccc"}
                }}
                data={[
                    { x: 1, y: 2 },
                    { x: 2, y: 3 },
                    { x: 3, y: 5 },
                    { x: 4, y: 4 },
                    { x: 5, y: 7 }
              ]}
              />
          </VictoryChart>
        </View>
        <View style={styles.boxChart}>
         <Text style={styles.title}>Últimas Máquinas cadastradas</Text>

          <VictoryChart theme={VictoryTheme.material}>
            <VictoryLine
                style={{
                  interpolation:"natural",
                  data: { stroke: COLORS.blue },
                  parent: { border: "1px solid #ccc"}
                }}
                data={[
                    { x: 1, y: 2 },
                    { x: 2, y: 3 },
                    { x: 3, y: 5 },
                    { x: 4, y: 4 },
                    { x: 5, y: 7 }
              ]}
              />
          </VictoryChart>
        </View>
        <View style={styles.boxChart}>
         <Text style={styles.title}>Últimas Máquinas cadastradas</Text>

          <VictoryChart theme={VictoryTheme.material}>
            <VictoryLine
                style={{
                  interpolation:"natural",
                  data: { stroke: COLORS.blue },
                  parent: { border: "1px solid #ccc"}
                }}
                data={[
                    { x: 1, y: 2 },
                    { x: 2, y: 3 },
                    { x: 3, y: 5 },
                    { x: 4, y: 4 },
                    { x: 5, y: 7 }
              ]}
              />
          </VictoryChart>
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
  chart:{
    elevation:60,
  },
  boxChart:{
    backgroundColor: COLORS.white,
    // marginTop: 20,
    elevation: 5,
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 25,
  },
  
});

