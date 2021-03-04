import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from "./AppText";
import colors from '../config/colors';

function WorkingHours(props) {
    return (
        <View style={styles.container}>
            <View style={styles.timeContainer}>
                <AppText style={styles.text} numberOfLines={1}>5</AppText>
                <AppText style={[styles.text, { fontSize: 8, textTransform: 'uppercase', top: 4, left: 1 }]}>hrs</AppText>
            </View>

            <View style={{ flex: 2, justifyContent: 'center', marginRight:10,alignItems: 'center' }}>
                <AppText style={[styles.text, { textTransform: 'uppercase' }]} numberOfLines={1}>Working Today</AppText>
                <AppText style={{ fontSize: 12, color: colors.medium }} numberOfLines={1}>Per day working timing is good</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexShrink: 1,
        // borderWidth: 1,
        marginVertical: 20,
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
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
    timeContainer: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 1,
        flexShrink: 1,
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginLeft:10,
        marginRight:15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.light,
        backgroundColor: colors.white
    },
    text: {
        color: colors.primary,
        fontWeight: '700',
        fontSize: 22,
    }
})


export default WorkingHours;