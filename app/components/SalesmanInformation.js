import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import colors from "../config/colors";
import defaultProfileUri from "../components/defaultProfile";
import AppText from "./AppText";
import DeactivateButton from "../buttons/DeactivateButton";

function SalesmanInformation({ profileImage, title, email, address, contactNumber }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: profileImage ? profileImage : defaultProfileUri }} style={styles.image} />

            <View style={styles.textContainer}>
                <AppText style={styles.title} numberOfLines={1} >{title}</AppText>
                <AppText style={styles.subTitle}>E-mail : {email}</AppText>
                <AppText style={styles.subTitle}>Address : {address}</AppText>
                <AppText style={styles.subTitle}>Contact Number : {contactNumber}</AppText>

                <DeactivateButton title="Deactivate Account" onPress={() => console.log('Deactivate account button pressed')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical:10,
        backgroundColor: colors.lighter,
        elevation: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,     
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 45
    },
    subTitle: {
        fontSize: 12,
        color: colors.medium
    },
    textContainer: {
        flexShrink: 1,
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: colors.primary
    },
})

export default SalesmanInformation;