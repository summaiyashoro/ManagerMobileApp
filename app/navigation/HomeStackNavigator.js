import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";

import colors from '../config/colors';
import HomeScreen from "../home/HomeScreen";
import NotificationsDetailsScreen from "../notification/NotificationsDetailsScreen";
import ViewSalesmanLocationScreen from "../home/ViewSalesmanLocationScreen";
import SalesmanListScreen from "../home/SalesmanListScreen";
import SalesmanProfileScreen from "../home/SalesmanProfileScreen";

const Stack = createStackNavigator();

function HomeStackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerStyle: {
                shadowColor: 'transparent',
                backgroundColor: colors.primary
            },
            headerTintColor: colors.white,
            headerTitleAlign: 'center',
            headerRight: () => (<Icon name="ellipsis-vertical-outline" size={20} color={colors.white} />)
        }}
        >

            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Dashboard',
                    headerLeft: null
                }}
            />

            <Stack.Screen
                name="ViewSalesmanLocationScreen"
                component={ViewSalesmanLocationScreen}
                options={{
                    title: 'Salesman Location'
                }}
            />

            <Stack.Screen
                name="NotificationsDetailsScreen"
                component={NotificationsDetailsScreen}
                options={{
                    title: 'Notification'
                }}
            />

            <Stack.Screen
                name="SalesmanListScreen"
                component={SalesmanListScreen}
                options={{
                    title: 'List'
                }}
            />

            <Stack.Screen
                name="SalesmanProfileScreen"
                component={SalesmanProfileScreen}
                options={{
                    title: 'Salesman Profile'
                }}
            />

        </Stack.Navigator>
    );
}

export default HomeStackNavigator;