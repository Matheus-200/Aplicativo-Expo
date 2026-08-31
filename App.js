import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './Login'; // ajuste o caminho
import { Home } from './Home';
import { CadastroLogin } from './CadastroLogin';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name ="CadastroLogin" component={CadastroLogin}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}