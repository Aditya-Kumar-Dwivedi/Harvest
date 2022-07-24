import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Page1 from './screens/Page1'
import Page2 from './screens/Page2'
import Page3 from './screens/Page3'
import { MaterialIcons } from '@expo/vector-icons';
import Header from './shared/Header';

const Stack = createNativeStackNavigator();

const App =() =>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}  options={{title:'Harvest'} }/>
        <Stack.Screen name="Page1" component={Page1} options={{title:'Sign up For Harvest'}}/>
        <Stack.Screen name="Page2" component={Page2} options={{title:'Sign up For Harvest'}} />
        <Stack.Screen name="Page3" component={Page3} options={{title:'Sign up For Harvest'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;