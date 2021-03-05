import React, { useEffect } from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';

import AccountSettingHeader from './AccountSettingHeader';
import Heading from './Heading';
import Separator from '../components/Separator';
import SettingSwitch from './SettingSwitch';
import AppPicker from '../components/AppPicker';
import LogOutButton from '../buttons/LogOutButton';
import AppButton from '../buttons/AppButton';


import defaultProfileUri from "../components/defaultProfile";
const imageSource = defaultProfileUri;
import Screen from '../screens/Screen';

import { connect } from "react-redux";
import userDataReducer from "../store/reducer/UserDataReducer";

function SettingScreen({ navigation, ...props }) {

    useEffect(()=>{
        console.log(props.userData);
    },[])

    return (
        <Screen>
            <ScrollView contentContainerStyle={styles.container}>
                <AccountSettingHeader title="Muhammad Omer Khan" imageSource={imageSource} onPress={() => navigation.navigate('AccountSettings')} />

                <Heading heading="About" />

                <SettingSwitch title="Status" />
                <Separator />

                <AppPicker title="Privacy Policy" onPress={() => navigation.navigate('PrivacyPolicy')} />
                <Separator />

                <AppPicker title="Terms of use" onPress={() => navigation.navigate('TermsOfUse')} />
                <Separator />

                <Heading heading="App" />

                <SettingSwitch title="Notifications" />
                <Separator />

                <AppPicker title="Support" onPress={() => console.log("go to Support")} />
                <Separator />

                <AppPicker title="Report a Bug" onPress={() => console.log("go to Report a bug")} />
                <Separator />

                <AppPicker title="App Version 1.0" onPress={() => console.log("go to App version 1.0")} />
                <Separator />

                <LogOutButton title="Logout" onPress={() => console.log('logout')} />

            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        paddingVertical: 20
    }
})

const mapStateToProps = (state)=>{
    return{
        userData : state.UserDataReducer
    }
}

export default connect(mapStateToProps)(SettingScreen);