import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import colors from '../../../themes/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ImagePicker from 'react-native-image-crop-picker';

function MessageItem({navigation, messItem}) {

  const [image, setImage] = useState('https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png');

  // console.log(messItem.id)
  // console.log(messItem.avatar)


  const useCamera = () => {
    ImagePicker.openCamera({
      width: 400,
      height: 400,
    }).then(image => {
      console.log(image);
      setPopupOpen(true);
      setImage(image.path);
    });
  }

  return (
    <TouchableOpacity style={styles.chatItem} 
                      onPress={() => navigation.navigate('Direct Message', { 
                        idUserReciver: messItem.id,
                        avatarReciver: messItem.avatar,
                        userReciver: messItem.username,
                      })} 
                      >
        <View style={styles.stackMess}>
          <Image style={styles.avatarImage} source={messItem.avatar} />
          <View style={styles.infoChat}>
            <Text style={styles.authurName} >{messItem.username}</Text>
            <Text style={styles.seenTime}>Seen 1m ago</Text>
          </View>
        </View>
        <Ionicons style={styles.videoCallIcon} name='camera-outline' size={30} color={colors.textColorSecond} 
                  onPress={() => useCamera()} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contentMess: {
    flex: 0.9,
    width: '100%',
    paddingTop: 15,
    paddingLeft: 15,
  },
  avatarImage: {
    width: 65,
    height: 65,
    borderRadius: 50,
    borderColor: colors.white,
    borderWidth: 2
  },
  chatItem: {
    flexDirection: 'row',
    width: '100%',
    alignItems:'center',
    marginBottom: 10
  },
  stackMess: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoChat: {
    marginLeft: 15
  },
  authurName: {
    color: colors.primary,
    fontSize: 16,
  },
  seenTime: {
    color: colors.textColorSecond,
    fontSize: 16
  },
  searchBar: {
    borderRadius: 12,
    width: '96%',
    height: 40,
    backgroundColor: '#dbdbdb87',
    elevation: 0,
    marginBottom: 15
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageCapture: {
    width: '95%',
    height: '90%',
    marginTop: 50
  }
})

export default MessageItem;