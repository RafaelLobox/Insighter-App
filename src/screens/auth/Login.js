import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput style={styles.inputEmail}
        placeholder='Email'
        keyboardType='ascii-capable'
        placeholderTextColor= '#3540E6'
        
        />
        <TextInput style={styles.inputPassword}
        placeholder='Senha'
        keyboardType='ascii-capable'
        placeholderTextColor= '#3540E6'
        />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
