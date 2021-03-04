import React from 'react';
import { View, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function HistoryOfSalesman({date,time,status}) {
    return (
        <View style={{ flex: 1 ,alignItems:'center'}}>
            <AppText style={[styles.text, { backgroundColor:colors.softGrey }]}>{date}</AppText>
            <AppText style={[styles.text, { backgroundColor:colors.lighter }]}>{time}</AppText>
            <AppText style={[styles.text, { backgroundColor: colors.softGrey,color:colors.lightGreen }]}>{status}</AppText>

            <TouchableOpacity>
            <AppText style={[styles.text, { backgroundColor: colors.lighter }]}>View Map</AppText>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 10,   //was 14
        color: colors.medium,
        textAlign:'center',
        padding:12,
        width:90,
        height:40
    }
})
export default HistoryOfSalesman;