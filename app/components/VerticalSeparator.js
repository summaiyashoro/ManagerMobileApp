import React from 'react';
import {View,StyleSheet} from "react-native";
import colors from '../config/colors';

function VerticalSeparator({...otherprops}) {
    return (
       <View style={styles.container} {...otherprops}/> 
    );
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:0.5,
        backgroundColor:colors.medium,
        alignSelf:'center',
        marginHorizontal:5,  
    }
})

export default VerticalSeparator;