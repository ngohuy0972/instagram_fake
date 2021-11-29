import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, Modal, TouchableOpacity, FlatList } from 'react-native';
import colors from '../../../themes/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Searchbar } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import style from '../../../themes/style';
import { ScrollView } from 'react-native-virtualized-view';
import MessageItem from './MessageItem';

function ContentMessage({navigation, dataUser}) {

  const [popupOpen, setPopupOpen] = useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [image, setImage] = useState('https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png');
  
  // console.log(dataUser)

  const renderMessItem = ({item}) => (
    <MessageItem 
      navigation={navigation}
      messItem={item}
    /> 
  )

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

        {/* { getAllDirect.map(datatUser => (
          <MessageItem datatUser={datatUser} key={datatUser.id}/>
        ))}          */}
        {/* <MessageItem navigation={navigation} dataUser={dataUser} /> */}
        <FlatList 
          data={dataUser}
          renderItem={renderMessItem}
        />

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