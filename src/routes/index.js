import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { theme } from '../global/styles/theme';

import { MaterialCommunityIcons } from '@expo/vector-icons'

import StackRoutes from './stackRoutes';
import Movies from '../pages/Movies';

const Drawer = createDrawerNavigator();

function Routes() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,

                drawerStyle: {
                    backgroundColor: theme.colors.background_drawer,
                    paddingTop: 20,
                },

                drawerActiveBackgroundColor: theme.colors.red_color,
                drawerActiveTintColor: theme.colors.white100,
                drawerInactiveTintColor: theme.colors.white100,
            }}

        >
            <Drawer.Screen
                name="HomeDrawer"
                component={StackRoutes}
                options={{
                    title: "Home",
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons 
                        name={ focused ? 'movie-open' : 'movie-outline'} 
                        size={size}
                        color={color}
                        />
                    )
                }}
            />
            <Drawer.Screen 
            name="Movies" 
            component={Movies} 
            options={{
                title: "Meus Filmes",
                drawerIcon: ({ focused, size, color }) => (
                    <MaterialCommunityIcons 
                    name={ focused ? 'archive' : 'archive-outline'} 
                    size={size}
                    color={color}
                    />
                )
            }}
            />
        </Drawer.Navigator>
    );
}

export default Routes;