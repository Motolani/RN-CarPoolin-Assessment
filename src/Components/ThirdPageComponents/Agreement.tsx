import React from 'react';
import { Image, StyleSheet, Text, View, ImageSourcePropType } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


interface Props {
}

const Agreement: React.FC<Props> = () => {
  return (
    <View style={styles.footerTextCase}>
        <Text style={styles.footerText} > 
            By clicking on order now button, I agree with {'\n'} Terms and Policies of using CarPoolin
        </Text>
    </View>
  );
};

export default Agreement;

const styles = StyleSheet.create({
    footerTextCase:{
        marginTop:20,
        alignItems: 'center'
    },
    footerText:{
        color:'#76737388',
        textAlign: 'center',
        fontFamily: 'Poppins-light',
        lineHeight: 22
    
    },
});
