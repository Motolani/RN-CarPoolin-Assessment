import { View, Text, Image, StyleSheet, ImageSourcePropType, Touchable, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-paper';
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
// import img from '../Images/forAssessment.png';

interface Props {
    fromLocation: string;
    toLocation: string;
    nav_page: string;
    price:number;
    pickup_time:string;
    dropoff_time:string;
    img: ImageSourcePropType;
    navigation: {
        navigate: (screen: string) => void;
    };
}

const TopBorderPageThree: React.FC<Props> =({navigation, fromLocation, toLocation, img, nav_page, price, pickup_time, dropoff_time}) => {
  return (
    <View style={styles.borderThings}>
        <View style={styles.topRow}>
            <TouchableOpacity onPress={() => navigation.navigate(nav_page)}>
                <View>
                    <Icon name="left" size={23} color="#ffffff"/>
                </View>
            </TouchableOpacity>
            <View style={styles.PriceCase}>
                <Text style={styles.Price}>{price}$</Text>
            </View>
        </View>

        <View style={styles.rowTwoCase}>
            <Image source={img} style={styles.image} />
            <View style={styles.theCase}>
                <View style={styles.fromCase}>
                    <Text style={styles.time}>{pickup_time}</Text>
                    <Text style={styles.from}>{fromLocation}</Text>
                </View>

                <View style={styles.fromLocationCase}>
                    <Text style={styles.fromLocation}>Picking up from {fromLocation}-</Text>
                </View>

                

                <View style={styles.toCase}>
                    <Text style={styles.time}>{dropoff_time}</Text>
                    <Text style={styles.to}>{toLocation}</Text>
                </View>

                <View style={styles.toLocationCase}>
                    <Text style={styles.toLocation}>Drop off at {toLocation}-</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

export default TopBorderPageThree
const styles = StyleSheet.create({
    topRow:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop:30,
        marginLeft: 25,
        justifyContent: 'space-between',
    },
    PriceCase:{
        marginRight: 50
    },
    Price:{
        fontWeight: 'bold',
        fontSize: 25,
        color: '#000000',
    },
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
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    theCase:{
        marginLeft: -75,
        marginTop:1
    },
    time:{
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 25,
        fontFamily: 'Poppins-Bold',
    },
    from:{
        color: '#ffffff',
        // fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'Poppins-Light',
        marginLeft: 30,
        marginTop: 5
    },
    fromLocationCase:{
        marginTop: 13,
        marginBottom: 30
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
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    to:{
        color: '#ffffff',
        fontSize: 18,
        fontFamily: 'Poppins-Light',
        marginLeft: 30,
        marginTop: 5
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