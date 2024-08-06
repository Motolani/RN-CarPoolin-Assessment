import { View, Text, Image, ImageSourcePropType, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
    theImage: ImageSourcePropType;
}

const LargeCenteredImage: React.FC<Props> = ({theImage}) => {
    return (
        <View >
            <Image source={theImage} style={styles.image} />
        </View>
    )
}

export default LargeCenteredImage

const styles = StyleSheet.create({

    image: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
    },
});