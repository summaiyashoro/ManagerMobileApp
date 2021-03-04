import React from 'react';
import { View, StyleSheet, ScrollView } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import Separator from "../components/Separator";
import TotalSalesman from "./TotalSalesman";
import ActiveSalesman from "./ActiveSalesman";
import SalesmanLocation from "./SalesmanLocation";
import LatestNotifications from "./LatestNotifications";

function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <AppText style={styles.headingText} >SALESMAN STATUS</AppText>
                <Separator backgroundColor={colors.light} height={1.3} />

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row'}}>
                        <TotalSalesman timeOfUpdate="1:25 pm" dateOfUpdate="24/11" navigation={navigation}/>
                        <ActiveSalesman timeOfUpdate="1:25 pm" dateOfUpdate="24/11" navigation={navigation} />
                    </View>
                </ScrollView>

                <AppText style={styles.headingText} >SALESMAN LOCATION</AppText>
                <Separator backgroundColor={colors.light} height={1.3} />

                <SalesmanLocation navigation={navigation} />

                <AppText style={styles.headingText} >LATEST NOTIFICATIONS</AppText>
                <Separator backgroundColor={colors.light} height={1.3} />

                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    <View style={{ flexDirection: 'row'}}>
                        <LatestNotifications navigation={navigation} />
                        <LatestNotifications navigation={navigation} />
                    </View>
                </ScrollView>  

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
        marginTop:20,
        marginBottom:10
    }
})

export default HomeScreen;