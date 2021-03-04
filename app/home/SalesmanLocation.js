import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import colors from "../config/colors";
import AppText from "../components/AppText";
import VerticalSeparator from "../components/VerticalSeparator";


function SalesmanLocation({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Pressable onPress={() => navigation.navigate('ViewSalesmanLocationScreen')}>
                    <AppText style={styles.title}>VIEW SALESMAN LOCATION</AppText>
                </Pressable>
            </View>

            <VerticalSeparator height="80%" marginRight={15} />

            <View style={styles.mapContainer}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    zoomEnabled={false}
                >

                </MapView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        flexDirection: 'row',
        marginHorizontal: 5,
        marginVertical: 20,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 25,
        height: 155,
        width: '97%',
        shadowColor:colors.dark,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    map: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute'
    },
    mapContainer: {
        flex:1.5,
        marginRight: 5,
        marginVertical: 10,
    },
    title: {
        color: colors.primary,
        fontSize: 16,
        fontWeight: "700",
        textAlign: 'center'
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
    }
})

export default SalesmanLocation;