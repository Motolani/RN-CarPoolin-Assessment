import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button, Divider, PaperProvider } from 'react-native-paper';
import image from '../Images/forAssessment.png';
import Icon from 'react-native-vector-icons/AntDesign';
import IconTwo from 'react-native-vector-icons/Entypo';
// import TopBorder from '../Components/SecondPageComponents/topBorder';
import TopBorder from '../Components/SecondPageComponents/TopBorder'
import DateSelection from '../Components/SecondPageComponents/DateSection';
import PassengerSelection from '../Components/SecondPageComponents/PassengerSelection';
import ProceedButtonTwo from '../Components/SecondPageComponents/ProceedButtonTwo';
import { useDispatch, useSelector } from 'react-redux';
import { deliveryDayAction } from '../store/deliveryAction';


interface SecondPageProps {
    navigation: {
        navigate: (screen: string) => void;
    };
}

const SecondPage: React.FC<SecondPageProps> = ({navigation}) => {

    const from = useSelector(state => state.deliveryData.pickUpLocation)
    const to = useSelector(state => state.deliveryData.destination)
    return (
        <PaperProvider>
            <SafeAreaView style={styles.container}>
                {/* <TopBorder fromLocation="Brussels" toLocation="Ghent" img={image}/> */}
                <TopBorder fromLocation={from} toLocation={to} img={image}/>

                <DateSelection 
                    first_date="Today" 
                    second_date="Tomorrow" 
                    third_day="Other Dates" 
                    icon_name="calendar" 
                />

                <PassengerSelection option_one={1} option_two={2} option_three={3} option_four={4}/>

                <ProceedButtonTwo button_title="Search" navigation={navigation} nav_page="ThirdPage"/>
            </SafeAreaView>
        </PaperProvider>
    )
}

export default SecondPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
})