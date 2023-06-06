import { View, Text, Image } from 'react-native';
import React from 'react';


const ImageScreen = ({ route }) => {
  const { image } = route.params;

  return (
    <View>
      <Image source={{ uri: image.src.medium, height: 350 }} />

      

    </View>
  );
};

export default ImageScreen;