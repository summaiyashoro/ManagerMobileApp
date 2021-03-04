import React from 'react';
import { Pressable, StyleSheet, View,TouchableWithoutFeedback} from 'react-native';

import NotificationItem from "../notification/NotificationItem";
import Separator from "../components/Separator";
import AppText from "../components/AppText";
import colors from "../config/colors";


function LatestNotifications({ navigation }) {
    return (
        <View style={styles.container}>
                <TouchableWithoutFeedback>
                <NotificationItem title="Raza Ali Baloch" subTitle="We have found suspicious activity from your account" profileImage="" timeofArrival="2 mins" />
               </TouchableWithoutFeedback>
                <Separator width={260} marginVertical={0} />

                <Pressable onPress={() => navigation.navigate('NotificationsDetailsScreen', { title: "Raza Ali Baloch", subTitle: "We have found suspicious activity from your account", profileImage: "", timeofArrival: "2 mins" })}>
                    <AppText style={styles.text}>View</AppText>
                </Pressable>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 5,
        marginRight: 10,
        marginVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        height: 155,
        width: 270,
        backgroundColor:colors.white,
        elevation: 2,
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22
    },
    text: {
        fontWeight: "700",
        textAlign: 'center',
        fontSize: 16,
        paddingTop: 10
    }
})

export default LatestNotifications;