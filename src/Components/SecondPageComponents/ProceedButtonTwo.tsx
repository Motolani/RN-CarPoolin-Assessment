import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';

interface SearchButtonProps {
   
    button_title: string;
    nav_page: string;
    navigation: {
        navigate: (screen: string) => void;
    };
}

const ProceedButtonTwo: React.FC<SearchButtonProps> = ({ navigation, button_title, nav_page }) => {
    return (
        <View style={styles.searchButtonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate(nav_page)}>
                <View style={styles.buttonCaseStyle}>
                    <Button mode="elevated" textColor="#ffffff" buttonColor="#4d4d4d" >
                        {button_title}
                    </Button>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    searchButtonContainer: {
        marginTop: 50,
    },
    buttonCaseStyle: {
        marginHorizontal: 30,
    },
});

export default ProceedButtonTwo;
