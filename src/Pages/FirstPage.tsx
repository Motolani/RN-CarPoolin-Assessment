import { SafeAreaView, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { PaperProvider } from 'react-native-paper';
import carImage from '../Images/car_image.png';
import LargeCenteredImage from '../Components/FirstPageComponents/LargeCenteredImage';
import TextAndSubText from '../Components/FirstPageComponents/TextAndSubText';
import ProceedButton from '../Components/FirstPageComponents/ProceedButton';

import {useNavigation} from '@react-navigation/native';

interface FirstPageProps {
   
  navigation: {
      navigate: (screen: string) => void;
  };
}

const FirstPage: React.FC<FirstPageProps> = ({navigation}) => {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>

        <LargeCenteredImage theImage={carImage} />

        <TextAndSubText main_text='CarPoolin' sub_text='Drive & Save Money'/>

        <TouchableOpacity onPress={() => navigation.navigate('SecondPage')}>
          <ProceedButton the_mode="elevated" text_color='#ffffff' button_color='#4d4d4d' icon_name='arrowright' icon_size={20} icon_color='#ffffff'/>
        </TouchableOpacity>

      </SafeAreaView>
    </PaperProvider>
  )
}

export default FirstPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  }
})