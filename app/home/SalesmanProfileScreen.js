import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import colors from "../config/colors";
import AppText from "../components/AppText";
import Separator from "../components/Separator";
import WorkingHours from "../components/WorkingHours";
import SalesmanInformation from "../components/SalesmanInformation";
import HistoryOfSalesman from "../components/HistoryOfSalesman";

function SalesmanProfileScreen(props) {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <AppText style={styles.headingText} >SALESMAN INFORMATION</AppText>
                <Separator backgroundColor={colors.light} height={1.3} />

                <SalesmanInformation title="Salesman Name" email="salesman123@gmail.com" address="street number 17 west side" contactNumber="0900078601" />

                <AppText style={styles.headingText} >WORKING HOURS</AppText>
                <Separator backgroundColor={colors.light} height={1.3} />

                <WorkingHours />

                <AppText style={styles.headingText} >HISTORY</AppText>
                <Separator backgroundColor={colors.light} height={1.3} />

                <View style={{ flex: 1 ,flexDirection:'row',marginVertical:20,justifyContent:'center'}}>

                    <View style={{ marginRight: 2}}>
                        <AppText style={[styles.text, { backgroundColor: colors.lighter }]}>Date</AppText>
                        <AppText style={[styles.text, { backgroundColor:colors.softGrey}]}>Time</AppText>
                        <AppText style={[styles.text, { backgroundColor: colors.lighter }]}>Status</AppText>
                        <AppText style={[styles.text, { backgroundColor: colors.softGrey }]}>Location</AppText>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <HistoryOfSalesman date="27th jan 2020" time="10:00 AM" status="Active" />
                        <HistoryOfSalesman date="7th jan 2020" time="10:00 AM" status="Active" />
                        <HistoryOfSalesman date="7th jan 2020" time="10:00 AM" status="Active" />
                    </ScrollView>
                </View>
                </View> 
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    headingText: {
        fontSize: 16,
        textAlign: 'center',
        color: colors.primary,
        marginTop: 20,
        marginBottom: 10
    },
    text: {
        color: colors.primary,
        fontWeight: '700',
        fontSize: 10,
        textTransform: 'uppercase',
        textAlign: 'center',
        padding: 12,
        width:"100%",
        height: 40
    }
})

export default SalesmanProfileScreen; 