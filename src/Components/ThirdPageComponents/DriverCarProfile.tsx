import React from 'react';
import { Image, StyleSheet, Text, View, ImageSourcePropType } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


interface Props {
    car_color: string;
    car_description: string;

}

const DriverCarProfile: React.FC<Props> = ({car_color, car_description}) => {
  return (
    <View style={styles.rowFourCase}>
        <View style={styles.rowFourRow}>
            <View style={styles.onePass}>
                <Icon name="automobile" size={30} color={car_color}/>
            </View>

            <View style={styles.twoPass}>
                    <Text style={styles.two}>{car_description}</Text>
            </View>
        </View>
    </View>
  );
};

export default DriverCarProfile;

const styles = StyleSheet.create({
    rowFourCase:{
        marginTop: 40,
        marginLeft: 30
    },
    rowFourRow:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 8,
        marginTop: 20,
        justifyContent: 'space-between',
        marginHorizontal: 180
    },
    onePass:{
        marginLeft: 5
    },
    twoPass:{
        marginLeft: 5
    },
    two:{
        color: '#000000',
        fontWeight: 'bold',
        fontFamily: 'Poppiins-Bold',
        fontSize: 16,
        marginTop: 3
    },
});
