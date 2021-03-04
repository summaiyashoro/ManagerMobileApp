import React from 'react';
import { View, StyleSheet,TouchableOpacity } from "react-native";

import ModalCircle from "../accountsettings/ModalCircle";
import Separator from "../components/Separator";
import AppText from "../components/AppText";
import colors from "../config/colors";

function TotalSalesman({ timeOfUpdate, dateOfUpdate ,navigation}) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('SalesmanListScreen')}>

      <View style={styles.container}>

        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <ModalCircle icon="ellipse-outline" borderRadius={8} height={35} width={35} backgroundColor={colors.primary} />
          <AppText style={styles.text}>Total Salesman</AppText>
        </View>

        <AppText style={[styles.text, { fontSize: 24, textAlign: 'center' }]}>20</AppText>
        <Separator />
        <AppText style={{ textAlign: 'center', color: colors.light, fontSize: 12 }}>Updated {dateOfUpdate} {timeOfUpdate}</AppText>

      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginRight: 10,
    marginVertical: 20,
    paddingHorizontal:5,
    borderRadius: 10,
    height: 140,
    width: 240,
    backgroundColor:colors.white,
    elevation: 3,
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22
  },
  text: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: "700"
  }
})

export default TotalSalesman;