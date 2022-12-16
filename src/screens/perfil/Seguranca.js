import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../components/Colors';
import Toggle from '../../components/Switch';


export default function SegurancaScreen(props) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white }}>
        <View style={styles.header}>
            <Icon
              onPress={() =>{
                props.navigation.navigate("Home");
              }}
            name='keyboard-backspace'  size={25}   />
            <Text style={{fontSize: 20, fontWeight: 'bold', paddingLeft: 12}}>Segurança</Text>
        </View>

        <View style={styles.menuItem}>
            <Icon name="bell" color={COLORS.blue} size={25}/>
            <Text style={styles.menuItemText}>Notificações</Text>
            <Toggle/>
        </View>
        <View style={styles.menuItem}>
            <Icon name="email" color={COLORS.blue} size={25}/>
            <Text style={styles.menuItemText}>Alertas por E-mail</Text>
            <Toggle/>
        </View>
        <View style={styles.menuItem}>
            <Icon name="phone" color={COLORS.blue} size={25}/>
            <Text style={styles.menuItemText}>SMS</Text>
            <Toggle/>
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