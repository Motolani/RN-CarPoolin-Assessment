import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { passengersAction } from '../../store/deliveryAction';

interface Props {
    option_one: number;
    option_two: number;
    option_three: number;
    option_four: number;
}

const PassengerSelection: React.FC<Props> = ({ option_one, option_two, option_three, option_four }) => {
    const selectedPassengers = useSelector((state: any) => state.deliveryData.passengersCount);
    const dispatch = useDispatch();

    const handlePassengerChange = (passengers: number) => {
        dispatch(passengersAction(passengers));
        // console.log('selectedPassengers:', selectedPassengers);
    };

    return (
        <View style={styles.rowFourCase}>
            <Text style={styles.rowFourH1}>Passengers</Text>
            <View style={styles.rowFourRow}>
                <TouchableOpacity onPress={() => handlePassengerChange(option_one)}>
                    <View style={selectedPassengers === option_one ? styles.onePass : styles.onePassSelected}>
                        <Text style={selectedPassengers === option_one ? styles.one : styles.oneSelected}>{option_one}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePassengerChange(option_two)}>
                    <View style={selectedPassengers === option_two ? styles.twoPassSelected : styles.twoPass}>
                        <Text style={selectedPassengers === option_two ? styles.twoSelected : styles.two}>{option_two}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePassengerChange(option_three)}>
                    <View style={selectedPassengers == option_three ? styles.threePassSelected : styles.threePass}>
                        <Text style={selectedPassengers === option_three ? styles.threeSelected : styles.three}>{option_three}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePassengerChange(option_four)}>
                    <View style={selectedPassengers === option_four ? styles.fourPassSelected : styles.fourPass}>
                        <Text style={selectedPassengers === option_four ? styles.fourSelected : styles.four}>{option_four}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    rowFourCase: {
        marginTop: 40,
        marginLeft: 30,
    },
    rowFourH1: {
        color: '#000000',
        fontWeight: 'bold',
        fontFamily: 'Poppins-Bold',
        fontSize: 25,
    },
    rowFourRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 8,
        marginTop: 20,
        justifyContent: 'space-between',
        marginHorizontal: 100,
    },
    onePass: {
        borderRadius: 200,
        borderWidth: 1,
        borderColor: '#86dcf4c5',
        width: 50,
        height: 50,
        backgroundColor: '#86dcf4c5',
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 10,
        shadowOpacity: 0.1,
        elevation: 15,
        marginLeft: 5,
    },
    one: {
        color: '#ffffff',
    },
    onePassSelected: {
        borderRadius: 200,
        borderWidth: 1,
        borderColor: '#ffffff',
        width: 50,
        height: 50,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 10,
        shadowOpacity: 0.1,
        elevation: 15,
        marginLeft: 5,
    },
    oneSelected: {
        color: '#8b8c8c',
    },
    twoPass: {
        borderRadius: 200,
        borderWidth: 1,
        borderColor: '#ffffff',
        width: 50,
        height: 50,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 10,
        shadowOpacity: 0.1,
        elevation: 15,
        marginLeft: 5,
    },
    two: {
        color: '#8b8c8c',
    },
    twoPassSelected: {
        borderRadius: 200,
        borderWidth: 1,
        borderColor: '#86dcf4c5',
        width: 50,
        height: 50,
        backgroundColor: '#86dcf4c5',
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 10,
        shadowOpacity: 0.1,
        elevation: 15,
        marginLeft: 5,
    },
    twoSelected: {
        color: '#ffffff',
    },
    threePass: {
        borderRadius: 200,
        borderWidth: 1,
        borderColor: '#ffffff',
        width: 50,
        height: 50,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 10,
        shadowOpacity: 0.1,
        elevation: 15,
        marginLeft: 5,
    },
    three: {
        color: '#8b8c8c',
    },
    threePassSelected: {
        borderRadius: 200,
        borderWidth: 1,
        borderColor: '#86dcf4c5',
        width: 50,
        height: 50,
        backgroundColor: '#86dcf4c5',
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 10,
        shadowOpacity: 0.1,
        elevation: 15,
        marginLeft: 5,
    },
    threeSelected: {
        color: '#ffffff',
    },
    fourPass: {
        borderRadius: 200,
        borderWidth: 1,
        borderColor: '#ffffff',
        width: 50,
        height: 50,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 10,
        shadowOpacity: 0.1,
        elevation: 15,
        marginLeft: 5,
    },
    four: {
        color: '#8b8c8c',
    },
    fourPassSelected: {
        borderRadius: 200,
        borderWidth: 1,
        borderColor: '#86dcf4c5',
        width: 50,
        height: 50,
        backgroundColor: '#86dcf4c5',
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 10,
        shadowOpacity: 0.1,
        elevation: 15,
        marginLeft: 5,
    },
    fourSelected: {
        color: '#ffffff',
    },
});

export default PassengerSelection;
