import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import style from '../../../themes/style';

function PopupHomeScreen(props) {

  const [image, setImage] = useState('https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png');
  // const [video, setVideo] = useState(null);
  const useCamera = () => {
    ImagePicker.openCamera({
    }).then(image => {
      console.log(image);
      setImage(image.path);

    });
  }

  const pickImage = () => {
    ImagePicker.openPicker({
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  }

  const recordVideo = () => {
    ImagePicker.openPicker({
      mediaType: "video",
    }).then((video) => {
      console.log(video);
    });
  }

  return (
    <View style={styles.popupContainer}>
      <Image style={styles.displayPickImage} source={{ uri:image }} />
      <TouchableOpacity style={style.button}
                        onPress={() => pickImage()}
      >
        <Text style={style.textButton}>Select photo</Text>
      </TouchableOpacity> 

      <TouchableOpacity style={style.button}
                        onPress={() => useCamera()}
      >
        <Text style={style.textButton}>Take a photo</Text>
      </TouchableOpacity> 

      <TouchableOpacity style={style.button}
                        onPress={() => recordVideo()}
      >
        <Text style={style.textButton}>Recording video</Text>
      </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({
  popupContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  displayPickImage: {
    width: '95%',
    height: 400,
    zIndex: 5
  }
})

export default PopupHomeScreen;