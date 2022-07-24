import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home'
import Page1 from './screens/Page1'

export const HomeStack=({navigation})=>(
    <Navigator>
    <Screen name="Harvest" component={Home}
    options={{
        headerTitle:()=><Header navigation={navigation}/>
    }}
      
    />
    <Screen name='Page1' component={Page1} options={{ headerTitle:'Set Up Harvest account'}}/>
    </Navigator>
       
)
export default HomeStack
