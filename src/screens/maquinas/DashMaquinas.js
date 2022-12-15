import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DashMaquinas(props) {
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
  
});

