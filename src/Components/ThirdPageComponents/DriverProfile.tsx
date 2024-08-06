import React from 'react';
import { Image, StyleSheet, Text, View, ImageSourcePropType } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


interface Props {
    driversName: string;
    driversRating: number;
    driversReviewCount: string;
    avatar_sample: ImageSourcePropType

}

const DriverProfile: React.FC<Props> = ({driversName, driversRating, driversReviewCount, avatar_sample}) => {
  return (
    <View style={styles.rowThreeCase}>
      <View style={styles.aRow}>
        <Image source={avatar_sample} style={styles.imgStyle} />
        <View style={styles.rowThreeRow}>
          <View>
            <Text style={styles.driverName}>{driversName}</Text>
          </View>
          <View style={styles.driverRatings}>
            <Text>{driversRating}</Text>
            <Icon name="star" size={15} color="gold" style={styles.driverRatingStar} />
            <Text>({driversReviewCount})</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DriverProfile;

const styles = StyleSheet.create({
  rowThreeCase: {
    marginTop: 40,
    marginLeft: 30,
  },
  aRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imgStyle: {
    height: 50,
    width: 50,
  },
  rowThreeRow: {
    marginLeft: 8,
    justifyContent: 'space-between',
    marginHorizontal: 100,
  },
  driverName: {
    color: '#000000',
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },
  driverRatings: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  driverRatingStar: {
    marginTop: 3,
    marginLeft: 8,
    marginRight: 8,
  },
});
