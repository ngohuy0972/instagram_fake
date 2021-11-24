import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, ScrollView, Modal, TouchableOpacity } from 'react-native';
import colors from '../../../themes/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Searchbar } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import style from '../../../themes/style';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ContentMessage({navigation}) {

  const [popupOpen, setPopupOpen] = useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [image, setImage] = useState('https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png');

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

      <ScrollView style={styles.contentMess} showsVerticalScrollIndicator={false} >

        <Searchbar placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={styles.searchBar} />

        <TouchableOpacity style={styles.chatItem} onPress={() => navigation.navigate('Direct Message')}>
          <View style={styles.stackMess}>
            <Image style={styles.avatarImage} source={require('../../../assets/huybap.jpg')}  />
            <View style={styles.infoChat}>
              <Text style={styles.authurName} >username1</Text>
              <Text style={styles.seenTime}>Seen 1m ago</Text>
            </View>
          </View>
          <Ionicons style={styles.videoCallIcon} name='camera-outline' size={30} color={colors.textColorSecond} 
                    onPress={() => useCamera()} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.chatItem} onPress={() => navigation.navigate('Direct Message')}>
          <View style={styles.stackMess}>
            <Image style={styles.avatarImage} source={require('../../../assets/user1.jpg')}  />
            <View style={styles.infoChat}>
              <Text style={styles.authurName}>username2</Text>
              <Text style={styles.seenTime}>Seen 2m ago</Text>
            </View>
          </View>
          <Ionicons style={styles.videoCallIcon} name='camera-outline' size={30} color={colors.textColorSecond} 
                    onPress={() => useCamera()} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.chatItem} onPress={() => navigation.navigate('Direct Message')}>
          <View style={styles.stackMess}>
            <Image style={styles.avatarImage} source={require('../../../assets/user3.jpg')}  />
            <View style={styles.infoChat}>
              <Text style={styles.authurName}>username3</Text>
              <Text style={styles.seenTime}>Seen 3m ago</Text>
            </View>
          </View>
          <Ionicons style={styles.videoCallIcon} name='camera-outline' size={30} color={colors.textColorSecond} 
                    onPress={() => useCamera()} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.chatItem} onPress={() => navigation.navigate('Direct Message')}>
          <View style={styles.stackMess}>
            <Image style={styles.avatarImage} source={require('../../../assets/post1.jpg')}  />
            <View style={styles.infoChat}>
              <Text style={styles.authurName}>username4</Text>
              <Text style={styles.seenTime}>Seen 4m ago</Text>
            </View>
          </View>
          <Ionicons style={styles.videoCallIcon} name='camera-outline' size={30} color={colors.textColorSecond} 
                    onPress={() => useCamera()} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.chatItem} onPress={() => navigation.navigate('Direct Message')}>
          <View style={styles.stackMess}>
            <Image style={styles.avatarImage} source={require('../../../assets/post2.jpg')}  />
            <View style={styles.infoChat}>
              <Text style={styles.authurName}>username5</Text>
              <Text style={styles.seenTime}>Seen 5m ago</Text>
            </View>
          </View>
          <Ionicons style={styles.videoCallIcon} name='camera-outline' size={30} color={colors.textColorSecond} 
                    onPress={() => useCamera()} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.chatItem} onPress={() => navigation.navigate('Direct Message')}>
          <View style={styles.stackMess}>
            <Image style={styles.avatarImage} source={require('../../../assets/post3.jpg')}  />
            <View style={styles.infoChat}>
              <Text style={styles.authurName}>username6</Text>
              <Text style={styles.seenTime}>Seen 6m ago</Text>
            </View>
          </View>
          <Ionicons style={styles.videoCallIcon} name='camera-outline' size={30} color={colors.textColorSecond} 
                    onPress={() => useCamera()} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.chatItem}>
          <View style={styles.stackMess}>
            <Image style={styles.avatarImage} source={require('../../../assets/post6.jpg')}  />
            <View style={styles.infoChat}>
              <Text style={styles.authurName}>username7</Text>
              <Text style={styles.seenTime}>Seen 7m ago</Text>
            </View>
          </View>
          <Ionicons style={styles.videoCallIcon} name='camera-outline' size={30} color={colors.textColorSecond} 
                    onPress={() => useCamera()} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.chatItem} onPress={() => navigation.navigate('Direct Message')}>
          <View style={styles.stackMess}>
            <Image style={styles.avatarImage} source={require('../../../assets/post4.jpg')}  />
            <View style={styles.infoChat}>
              <Text style={styles.authurName}>username8</Text>
              <Text style={styles.seenTime}>Seen 8m ago</Text>
            </View>
          </View>
          <Ionicons style={styles.videoCallIcon} name='camera-outline' size={30} color={colors.textColorSecond} 
                    onPress={() => useCamera()} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.chatItem} onPress={() => navigation.navigate('Direct Message')}>
          <View style={styles.stackMess} onPress={() => navigation} >
            <Image style={styles.avatarImage} source={require('../../../assets/user2.jpg')}  />
            <View style={styles.infoChat}>
              <Text style={styles.authurName}>username10</Text>
              <Text style={styles.seenTime}>Seen 10m ago</Text>
            </View>
          </View>
          <Ionicons style={styles.videoCallIcon} name='camera-outline' size={30} color={colors.textColorSecond} 
                    onPress={() => useCamera()} />
        </TouchableOpacity>

        <Modal visible={popupOpen} animationType='slide' >
          <TouchableOpacity>
            <Ionicons style={style.closePopup} name='close-outline' size={40} color={colors.black} 
                    onPress={() => setPopupOpen(false)} />
          </TouchableOpacity>
          <View style={styles.imageView}>
            <Image style={styles.imageCapture} source={{uri:image}} />
          </View>
        </Modal>
        <Text></Text>
      </ScrollView>
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

export default ContentMessage;