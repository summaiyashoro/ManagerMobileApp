import React from 'react';
import {View, StyleSheet, TouchableOpacity} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import colors from "../config/colors";
import AppText from "./AppText";

function IconWithName({icon, title , onPress, ...otherProps}) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container} {...otherProps}>
           <MaterialCommunityIcons name={icon} color={colors.primary} size={15} />
           <AppText style={styles.text}>{title}</AppText>
       </View>
       </TouchableOpacity>
    );
}
const styles = StyleSheet.create({ 
    container:{
        flex:1,
        alignItems:"center",
        marginHorizontal:5
    },
    text:{
    color:colors.light,
    fontSize:12
    }
})

export default IconWithName; 