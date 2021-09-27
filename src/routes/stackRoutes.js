import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from '../pages/Home';

function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Home" 
      component={Home} 
      options={{
        headerShown: false,
      }}
      />
    </Stack.Navigator>
  );
}

export default StackRoutes;