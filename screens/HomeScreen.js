import { View, StyleSheet, Text, } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getImages } from '../api/pexels';
import { Button } from '@rneui/themed';
import { Input } from '@rneui/themed';
import ImageList from '../components/ImageList';

const HomeScreen = ({ openSearch }) => {

  const [photos, setPhotos] = useState([]);



  const loadImages = async () => {
    const res = await getImages();
    //console.log(res.headers);
    setPhotos(res.data.photos);
  }

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <>
      {openSearch && (

        <View style={styles.searchSection} >
          <Input
            leftIcon ={{ type: "feather", name: "search", color:"#fff"}}
            placeholder='Search a Term'
           style={styles.input}
           inputContainerStyle={styles.searchInput}
           />

          <Button title="Buscar" buttonStyle={styles.buttonStyle} onPress={() => handleSearch()}/>
        </View>

      )}

      <View style={styles.conteiner}>
        <Text style={styles.totalResultText}>1000 Resultados</Text>
        <ImageList photos={photos} />

      </View>

    </>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalResultText: {
    color: '#D0D0D0',
    textAlign: "right",
    width: "100%",
    paddingTop: 35,
  },

  searchSection: {
    backgroundColor: 'black',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 116,
    flex: 1 / 9,
    flexDirection: 'row',
    alignItems: "center",
    
  },
  searchInput: {
    backgroundColor: '#2c292c',
    borderBottomWidth: 0,
    paddingHorizontal: 4,
    color:'white',
  },
  input:{
    color:'#fff',

  },
  buttonStyle:{
    backgroundColor:"#229783",
    marginBottom: 24,
    marginTop:0,
    alignContent:"center",
    alignItems:"center",
    
  }
});

export default HomeScreen;