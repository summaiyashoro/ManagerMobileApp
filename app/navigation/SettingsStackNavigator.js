import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AccountSettingsScreen from '../accountsettings/AccountSettingsScreen';
import SettingsScreen from '../settings/SettingsScreen';
import TermsOfUse from "../components/TermsOfUse";
import PrivacyPolicy from "../components/PrivacyPolicy";
import colors from '../config/colors';

const  Stack = createStackNavigator();

const SettingsStackNavigator = () =>(
      <Stack.Navigator
      initialRouteName="Settings"
      mode="modal"
      
      screenOptions={{
        headerStyle:{
          shadowColor:'transparent',
          backgroundColor:colors.primary,
        },
        headerTintColor:colors.white,
        headerTitleAlign:'center'  
      }}
      >
          <Stack.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{
            title:"Settings",
            headerLeft:null,
            headerTitleAlign:'center'
          }}
          />

          <Stack.Screen 
          name="AccountSettings" 
          component={AccountSettingsScreen} 
          options={{
            title:"Account Settings"
          }}
          />

          <Stack.Screen
           name="PrivacyPolicy"
           component={PrivacyPolicy}
           options={{
             title:"Privacy Policy"
           }}
          />

          <Stack.Screen
           name="TermsOfUse"
           component={TermsOfUse}
           options={{
             title:"Terms Of Use"
           }}
          />

      </Stack.Navigator>
  )

export default SettingsStackNavigator;