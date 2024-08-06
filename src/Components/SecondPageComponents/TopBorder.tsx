import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native'
import { Divider } from 'react-native-paper';
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
// import img from '../Images/forAssessment.png';

interface Props {
    fromLocation: string;
    toLocation: string;
    img: ImageSourcePropType
}

const TopBorder: React.FC<Props> =({fromLocation, toLocation, img}) => {
  return (
    <View style={styles.borderThings}>
        <Text style={styles.borderThingsH1}>Where are {'\n'} you going?</Text>

        <View style={styles.rowTwoCase}>
            <Image source={img} style={styles.image} />
            <View style={styles.theCase}>
                <View style={styles.fromCase}>
                    <Text style={styles.from}>From</Text>
                </View>

                <View style={styles.fromLocationCase}>
                    <Text style={styles.fromLocation}>{fromLocation}</Text>
                </View>

                <View style={styles.horizontalRule}>
                    <Divider bold={true}  style={styles.divder} />
                    <View style={styles.borderIsh}>
                        <Icon name="retweet" size={20} color={'#000000'} />
                    </View>
                </View>

                <View style={styles.toCase}>
                    <Text style={styles.to}>To</Text>
                </View>

                <View style={styles.toLocationCase}>
                    <Text style={styles.toLocation}>{toLocation}</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

export default TopBorder
const styles = StyleSheet.create({
    borderThings:{
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderWidth: 1,
        borderColor: '#86dcf4c5',
        width: '100%',
        height: 320,
        backgroundColor: '#86dcf4c5',
    },
    borderThingsH1:{
        fontWeight: 'bold',
        fontSize: 25,
        color: '#ffffff',
        marginLeft: 25,
        marginTop: 20,
        fontFamily: 'Poppins-Bold'

    },
    rowTwoCase:{
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    fromCase:{

    },
    theCase:{
        marginLeft: -75,
        marginTop:1
    },
    from:{
        color: '#ffffff'
    },
    fromLocationCase:{
        marginTop: 13
    },
    fromLocation:{
        color: '#ffffff',
        fontWeight: 'bold'
    },
    divder:{
        // color: '#ffffff',
        backgroundColor: '#ffffff',
        // borderColor: '#ffffff',
        height: 2,
        width: 250
    },
    horizontalRule:{
        marginTop: 20,
        marginBottom: 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    toCase:{

    },
    to:{
        color: '#ffffff',
    },
        toLocationCase:{
        marginTop: 13,
    },
    toLocation:{
        color: '#ffffff',
        fontWeight: 'bold'
    },
    borderIsh:{
        borderRadius:200,
        borderWidth: 1,
        borderColor: '#ffffff',
        width: 40,
        height: 40,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        shadowRadius: 10, // Adjusted for a softer shadow
        shadowOpacity: 0.1, // Adjusted for a lighter shadow
        elevation: 10, // Added for Android shadow
        marginTop: -20,
        marginLeft: 5
    },
    image: {
        width: 200,
        height: 150,
        resizeMode: 'contain',
        marginLeft: -65,
    },

})