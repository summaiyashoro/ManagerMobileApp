import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import colors from "../config/colors";
import AppText from "../components/AppText";
import defaultProfileUri from "../components/defaultProfile";
import IconWithName from "../components/IconWithName";

function SalesmanListComponent({ title, subTitle, status, profileImage, onPress, navigation }) {
    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={onPress} >
                <View style={styles.top}>
                    <Image source={{ uri: profileImage ? profileImage : defaultProfileUri }} style={styles.image} />
                    <View style={styles.active}></View>

                    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 15 }}>
                        <AppText style={styles.title}>{title}</AppText>
                        <AppText style={styles.subtitle}>E-mail: {subTitle}</AppText>
                    </View>

                    <AppText style={styles.status}>{status}</AppText>
                </View>
            </TouchableOpacity>

            <View style={styles.bottom}>
                <IconWithName icon="phone" title="Call" marginHorizontal={10} onPress={() => console.log('call button pressed')} />
                <IconWithName icon="email-send" title="Message" marginHorizontal={10} onPress={() => console.log('Message button pressed')} />
                <IconWithName icon="clock" title="History" marginHorizontal={10} onPress={() => console.log('History button pressed')} />
                <IconWithName icon="map-marker" title="Location" marginHorizontal={10} onPress={() => console.log('Location button pressed')} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    active: {
        backgroundColor: colors.lightGreen,
        height: 10,
        width: 10,
        borderRadius: 5,
        position: 'absolute',
        left: 46,
        top: 5,
    },
    bottom: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 60,
        paddingRight: 10
    },
    container: {
        marginVertical: 8,
        marginHorizontal: 3,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: colors.lighter,
        width: "98%",
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
        width: 55,
        height: 55,
        borderRadius: 27,
        marginLeft: 2
    },
    subtitle: {
        color: colors.light,
        paddingRight: 2,
        fontSize: 12
    },
    status: {
        paddingRight: 3,
        fontSize: 14,
        flexShrink: 1,
        fontWeight: "700",
        color: colors.lightGreen
    },
    title: {
        fontSize: 16,
        fontWeight: "700",
        width: '100%',
        paddingRight: 2,
        color: colors.primary
    },
    top: {
        flexDirection: 'row',
        flex: 1
    },
})

export default SalesmanListComponent;