import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import IconTwo from 'react-native-vector-icons/AntDesign'

interface Props {
    the_mode: 'text' | 'outlined' | 'contained' | 'elevated';
    icon_size: number;
    text_color: string;
    button_color: string;
    icon_color: string;
    icon_name: string;
}

const ProceedButton: React.FC<Props> = ({the_mode, text_color, button_color, icon_name, icon_size, icon_color}) => {
    return (
        <View style={styles.buttonCaseStyle}>
          {/* <TouchableOpacity onPress={() => action}> */}
            <Button mode={the_mode} textColor={text_color} buttonColor={button_color} style={styles.loginButton}> <IconTwo name={icon_name} size={icon_size} color={icon_color} style={styles.ButtonIcon}/> </Button>
          {/* </TouchableOpacity> */}
        </View>
    )
}

export default ProceedButton

const styles = StyleSheet.create({

    loginButton:{
        // marginBottom: 5
        // borderRadius: 250
        borderRadius: 200,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
      },
      buttonCaseStyle:{
        marginTop:50
      },
      ButtonIcon:{
        alignSelf: 'center',
        textAlign: 'center'
      }
});