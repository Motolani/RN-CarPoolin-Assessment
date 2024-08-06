import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import IconTwo from 'react-native-vector-icons/Entypo';
import { useSelector, useDispatch } from 'react-redux';
import { deliveryDayAction } from '../../store/deliveryAction';

interface Props {
    first_date: string;
    second_date: string;
    third_day: string;
    icon_name: string;
}

const DateSelection: React.FC<Props> = ({ first_date, second_date, third_day, icon_name }) => {
    const selectedDate = useSelector((state: any) => state.deliveryData.date);
    const dispatch = useDispatch();

    const handleDateChange = (date: string) => {
        dispatch(deliveryDayAction(date));
        // console.log('selectedDate:', selectedDate);
    };

    return (
        <View style={styles.rowThreeCase}>
            <Text style={styles.rowThreeH1}>Date</Text>
            <View style={styles.rowThreeRow}>
                <View>
                    <TouchableOpacity onPress={() => handleDateChange(first_date)}>
                        <Text style={selectedDate === first_date ? styles.today : styles.todayTwo}>{first_date}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => handleDateChange(second_date)}>
                        <Text style={selectedDate === second_date ? styles.tomorrowTwo : styles.tomorrow}>{second_date}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => handleDateChange(third_day)}>
                        <Text style={selectedDate === third_day ? styles.othersTwo : styles.others}>{third_day} <IconTwo name={icon_name} size={20} /></Text>

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    rowThreeCase: {
        marginTop: 40,
        marginLeft: 30,
    },
    rowThreeH1: {
        color: '#000000',
        fontWeight: 'bold',
        fontFamily: 'Poppins-Bold',
        fontSize: 25,
    },
    rowThreeRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 8,
        marginTop: 20,
        justifyContent: 'space-between',
        marginHorizontal: 100,
    },
    today: {
        color: '#86dcf4c5',
        fontWeight: 'bold',
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
    },
    todayTwo: {
        color: '#767373',
        fontWeight: 'bold',
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
    },
    tomorrow: {
        color: '#767373',
        fontWeight: 'bold',
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
    },
    tomorrowTwo: {
        color: '#86dcf4c5',
        fontWeight: 'bold',
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
    },
    others: {
        color: '#767373',
        fontWeight: 'bold',
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
    },
    othersTwo: {
        color: '#86dcf4c5',
        fontWeight: 'bold',
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
    },
});

export default DateSelection;
