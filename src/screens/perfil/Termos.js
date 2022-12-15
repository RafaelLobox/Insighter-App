import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../components/Colors';

export default function TermosScreen(props) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white }}>
        <View style={styles.header}>
            <Icon
              onPress={() =>{
                props.navigation.navigate("Home");
              }}
            name='keyboard-backspace'  size={25}   />
            <Text style={{fontSize: 20, fontWeight: 'bold', paddingLeft: 12}}>Notificações</Text>
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
});