import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
    main_text: string;
    sub_text: string;
}

const TextAndSubText: React.FC<Props> = ({main_text, sub_text}) => {
    return (
        <View style={styles.TextCase}>
          <Text style={styles.MainText}> {main_text} </Text>
          <Text style={styles.SubText}> {sub_text}</Text>
        </View>
    )
}

export default TextAndSubText

const styles = StyleSheet.create({

    MainText:{
        fontWeight: 'bold',
        fontSize: 45,
        color: '#000000',
        textAlign: 'center'
    },
    SubText:{
        fontWeight: 'bold',
        fontSize: 25,
        color: '#5b5b5b',
        textAlign: 'center'
    },
    TextCase:{
        marginTop: 60,
    },
});