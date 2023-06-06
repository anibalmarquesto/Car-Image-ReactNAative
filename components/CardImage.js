import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';




const CardImage = ({ image }) => {


  const navigation = useNavigation()

  return (
    <TouchableOpacity
      style={styles.CardImage}
      onPress={() => navigation.navigate('ImageScreen',{image})}
    >
      <Image
        source={{
          uri:
           image?.src?.small ? image?.src?.small :
            'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg'
        }}
        style={{ height: 180, width: '100%' }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  CardImage: {
    display: 'flex',
    width: '50%',
    margin: 4,
    justifyContent: 'space-between',
    backgroundColor: '#2c29c',
    borderWidth: 0,
    borderRadius: 5,
  }

})

export default CardImage