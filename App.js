import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import COLORS from './src/components/Colors';

// Home Screens Imports
import HomeScreen from './src/screens/home/Home';
import PerfilScreen from './src/screens/home/Perfil';
import MaquinasScreen from './src/screens/home/Maquinas';
import NotificationScreen from './src/screens/home/Notificaction';

// Auth Screens Imports
import CadastroScreen from './src/screens/auth/Cadastro';
import RecuperacaoScreen from './src/screens/auth/Recuperacao';
import LoginScreen from './src/screens/auth/Login';
import CadastroMaquinas from './src/screens/maquinas/CadastroMaquinas';
import EditMaquinas from './src/screens/maquinas/EditMaquinas';
import DashMaquinas from './src/screens/maquinas/DashMaquinas';
import SegurancaScreen from './src/screens/perfil/Seguranca';
import TermosScreen from './src/screens/perfil/Termos';


export default function App() {

  const Stack = createNativeStackNavigator();
  
  const BottomTabs = createBottomTabNavigator();
  
  // Bottom-Tabs
  function MyBottomTabs() {
    return (
      <BottomTabs.Navigator 
      screenOptions = {{
        headerShown: false, 
        tabBarShowLabel: false, 
        tabBarActiveTintColor: COLORS.blue,
        tabBarInactiveTintColor: '#AFBEDB' ,
          tabBarStyle:{
            position: 'relative',
            backgroundColor: COLORS.white,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            height:'6.25%',
            borderRightWidth: 1,
            borderRightColor: '#9EA7E6',
            borderLeftWidth: 1,
            borderLeftColor: '#9EA7E6',
            borderTopWidth: 2,            
            borderTopColor: '#9EA7E6',
          }
        }}>
        <BottomTabs.Screen name='Home' component={HomeScreen}  options={{tabBarIcon: ({color, size}) => (
          <Ionicons name="home"   color= {color} size={size}/>

        ) }} />
        <BottomTabs.Screen name='Maquinas' component={MaquinasScreen}  options={{tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="robot-industrial"   color= {color} size={size}/>

        ) }} />
        <BottomTabs.Screen name='Perfil' component={PerfilScreen}  options={{tabBarIcon: ({color, size}) => (
          <Ionicons name="person"   color= {color} size={size}/>

        ) }}/>

        
      </BottomTabs.Navigator>
   
    )
  } 

  // Navigation
  return (
      <NavigationContainer>

        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false,}} >
          {/* Auth Navigation */}
          <Stack.Screen  name='Login' component={LoginScreen} />
          <Stack.Screen name='Cadastro' component={CadastroScreen}/>
          <Stack.Screen name='Recuperacao' component={RecuperacaoScreen}/>
          {/* Tab-bar Navigation */}
          <Stack.Screen name='Home' component={MyBottomTabs}/>
          <Stack.Screen name='Perfil' component={MyBottomTabs}/>
          <Stack.Screen name='Maquinas' component={MyBottomTabs}/>
          <Stack.Screen  name='Notificacoes' component={NotificationScreen} />
          <Stack.Screen  name='CadastroMaquinas' component={CadastroMaquinas} />
          <Stack.Screen  name='EditMaquinas' component={EditMaquinas} />
          <Stack.Screen  name='DashMaquinas' component={DashMaquinas} />
          <Stack.Screen  name='Seguranca' component={SegurancaScreen} />
          <Stack.Screen  name='Termos' component={TermosScreen} />
          

        </Stack.Navigator>

      </NavigationContainer>
  );
}


