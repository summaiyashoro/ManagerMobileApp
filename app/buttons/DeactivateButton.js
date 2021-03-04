import React from 'react';
import {View,Pressable,StyleSheet} from 'react-native';
import AppText from "../components/AppText";
import colors from '../config/colors';

function DeactivateButton({title,onPress}) {
    return (
        <Pressable onPress={onPress}>
        <View style={styles.container}>
            <AppText style={styles.text}>{title}</AppText>
        </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container:{
    height:26,
    width:130,
    borderRadius:5,
    marginVertical:6,
    justifyContent:'center',
    backgroundColor:colors.danger
    },
    text:{
        fontSize:12,
        fontWeight:'700',
        color:colors.white,
        textAlign:'center'
    }
})

export default DeactivateButton;