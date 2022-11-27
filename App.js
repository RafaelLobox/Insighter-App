import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Home Screens Imports
import HomeScreen from './src/screens/home/Home';
import PerfilScreen from './src/screens/home/Perfil';
import MaquinasScreen from './src/screens/home/Maquinas';
// Auth Screens Imports
import CadastroScreen from './src/screens/auth/Cadastro';
import RecuperacaoScreen from './src/screens/auth/Recuperacao';
import LoginScreen from './src/screens/auth/Login';


export default function App() {

  const Stack = createNativeStackNavigator();
  
  const BottomTabs = createBottomTabNavigator();
  
  // Bottom-Tabs
  function MyBottomTabs() {
    return (
      <BottomTabs.Navigator>
        <BottomTabs.Screen name='Home' component={HomeScreen}/>
        <BottomTabs.Screen name='Perfil' component={PerfilScreen}/>
        <BottomTabs.Screen name='Maquinas' component={MaquinasScreen}/>
      </BottomTabs.Navigator>
   
    )
  } 

  // Navigation
  return (
      <NavigationContainer>

        <Stack.Navigator initialRouteName='Home'>
          {/* Auth Navigation */}
          <Stack.Screen name='Login' component={LoginScreen}/>
          <Stack.Screen name='Cadastro' component={CadastroScreen}/>
          <Stack.Screen name='Recuperacao' component={RecuperacaoScreen}/>
          {/* Tab-bar Navigation */}
          <Stack.Screen name='Home' component={MyBottomTabs}/>
          <Stack.Screen name='Perfil' component={MyBottomTabs}/>
          <Stack.Screen name='Maquinas' component={MyBottomTabs}/>

        </Stack.Navigator>

      </NavigationContainer>
  );
}


