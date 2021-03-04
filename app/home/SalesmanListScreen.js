import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import colors from "../config/colors";
import AppText from "../components/AppText";
import Separator from "../components/Separator";
import SalesmanListComponent from "./SalesmanListComponent";

function SalesmanListScreen({ navigation }) {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <AppText style={styles.headingText} >SALESMAN LIST</AppText>
                <Separator backgroundColor={colors.light} height={1.3} />

                <SalesmanListComponent
                    title="Salesman name"
                    subTitle="salesman123@gmail.com"
                    status="Active"
                    onPress={() => navigation.navigate('SalesmanProfileScreen')}
                />

                <SalesmanListComponent
                    title="Salesman name"
                    subTitle="salesman123@gmail.com"
                    status="Active"
                    onPress={() => navigation.navigate('SalesmanProfileScreen')}
                />

                <SalesmanListComponent
                    title="Salesman name"
                    subTitle="salesman123@gmail.com"
                    status="Active"
                    onPress={() => navigation.navigate('SalesmanProfileScreen')}
                />

                <SalesmanListComponent
                    title="Salesman name"
                    subTitle="salesman123@gmail.com"
                    status="Active"
                    onPress={() => navigation.navigate('SalesmanProfileScreen')}
                />

                <SalesmanListComponent
                    title="Salesman name"
                    subTitle="salesman123@gmail.com"
                    status="Active"
                    onPress={() => navigation.navigate('SalesmanProfileScreen')}
                />

                <SalesmanListComponent
                    title="Salesman name"
                    subTitle="salesman123@gmail.com"
                    status="Active"
                    onPress={() => navigation.navigate('SalesmanProfileScreen')}
                />

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
        marginHorizontal:6,
        marginVertical:6
    },
    headingText: {
        fontSize: 16,
        textAlign: 'center',
        color: colors.primary,
        marginTop: 20,
        marginBottom: 10
    }
})

export default SalesmanListScreen;