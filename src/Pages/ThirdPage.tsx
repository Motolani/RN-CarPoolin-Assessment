import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button, Divider, PaperProvider } from 'react-native-paper';
import image from '../Images/forAssessment.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconTwo from 'react-native-vector-icons/Entypo';
// import TopBorder from '../Components/SecondPageComponents/topBorder';
import TopBorderPageThree from '../Components/ThirdPageComponents/TopBorderPageThree';
import ProceedButtonTwo from '../Components/SecondPageComponents/ProceedButtonTwo';
import DriverProfile from '../Components/ThirdPageComponents/DriverProfile';
import avatar from '../Images/avatarSample.png'
import DriverCarProfile from '../Components/ThirdPageComponents/DriverCarProfile';
import Agreement from '../Components/ThirdPageComponents/Agreement';
import { useSelector } from 'react-redux';

interface ThirdPageProps {
    navigation: {
        navigate: (screen: string) => void;
    };
}

const ThirdPage: React.FC<ThirdPageProps> = ({navigation}) => {

    const from = useSelector(state => state.deliveryData.pickUpLocation)
    const to = useSelector(state => state.deliveryData.destination)
    const name = useSelector(state => state.deliveryData.driversName)
    const rating = useSelector(state => state.deliveryData.driversRate)
    const reviewCount = useSelector(state => state.deliveryData.driversReviewCount)
    const carDetails = useSelector(state => state.deliveryData.driversCar)
    const price = useSelector(state => state.deliveryData.rideCost)
    const pickUp = useSelector(state => state.deliveryData.pickUpTime)
    const DropOff = useSelector(state => state.deliveryData.dropOffTime)

    return (
        <PaperProvider>
            <SafeAreaView style={styles.container}>
                <TopBorderPageThree fromLocation={from} toLocation={to} img={image} navigation={navigation} nav_page="SecondPage" price={price} pickup_time={pickUp} dropoff_time={DropOff}/>
                
                <DriverProfile driversName={name} driversRating={rating} driversReviewCount={reviewCount} avatar_sample={avatar}/>      

                <DriverCarProfile car_color={"#000000"} car_description={carDetails} />

                <ProceedButtonTwo button_title="Order Now" navigation={navigation} nav_page="FirstPage"/>

                <Agreement  />
                
            </SafeAreaView>
        </PaperProvider>
    )
}

export default ThirdPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
})