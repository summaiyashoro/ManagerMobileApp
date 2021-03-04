import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import colors from "../config/colors";
import AppText from "../components/AppText";
import Separator from "../components/Separator";
import TotalSalesman from "./TotalSalesman";
import ActiveSalesman from "./ActiveSalesman";

function ViewSalesmanLocationScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <AppText style={styles.headingText} >SALESMAN STATUS</AppText>
                <Separator backgroundColor={colors.light} height={1.3} />

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row' }}>
                        <TotalSalesman timeOfUpdate="1:25 pm" dateOfUpdate="24/11" navigation={navigation} />
                        <ActiveSalesman timeOfUpdate="1:25 pm" dateOfUpdate="24/11" navigation={navigation} />
                    </View>
                </ScrollView>

                <AppText style={styles.headingText} >VIEW SALESMAN LOCATION</AppText>
                <Separator backgroundColor={colors.light} height={1.3} />

                <View style={styles.mapContainer}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        zoomEnabled={false}
                    >

                    </MapView>
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
        marginHorizontal: 10
    },
    headingText: {
        fontSize: 16,
        textAlign: 'center',
        color: colors.primary,
        marginTop: 20,
        marginBottom: 10
    },
    map: {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
        position: 'absolute'
    },
    mapContainer: {
        marginVertical: 20,
        height: 300,
        width: "97%",
        marginHorizontal: 10,
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: colors.lighter,
        elevation: 3,
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22
    },
})

export default ViewSalesmanLocationScreen;