import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar, Modal } from 'react-native';
import style from '../../../themes/style';
import colors from '../../../themes/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ContentHomeScreen from './ContentHomeScreen';
import CreateScreenPopup from './CreateScreenPopup';
import StoryScreenPopup from './StoryScreenPopup';

function HomeScreen({navigation}) {

  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <View style={style.container}>
      <StatusBar backgroundColor='#000' barStyle="light-content"/>

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image style={styles.logo} source={require('../../../assets/logo-ig.png')} />
        </View>
        <View style={styles.headerRight}>
        <TouchableOpacity>
          <Ionicons style={styles.directMess} name='chatbubble-ellipses-outline' size={25} color={colors.black} 
                      onPress={() => navigation.navigate('Message')}
            />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons style={styles.newPost} name='add-outline' size={35} color={colors.black} 
                      onPress={() => setPopupOpen(true)}
                      />
        </TouchableOpacity>
        </View>
      </View>
      
      <ContentHomeScreen navigation={navigation}/>

      <Modal visible={popupOpen} animationType='slide' >
        <TouchableOpacity>
          <Ionicons style={style.closePopup} name='close-outline' size={40} color={colors.black} 
                  onPress={() => setPopupOpen(false)} />
        </TouchableOpacity>
        <CreateScreenPopup />
      </Modal>
    </View>
  );
}
  
  const styles = StyleSheet.create({
    header: {
      flex: 0.1,
      width: '100%',
      flexDirection: 'row'
    },
    headerLeft: {
      width: '50%',
      paddingLeft: 10
    },
    logo: {
      width: '60%',
      height: 40,
      marginTop: 13
    },
    headerRight: {
      width: '50%',
      flexDirection: 'row-reverse'
    },
    newPost: {
      width: 30,
      height: 30,
      marginTop: 13,
      marginRight: 20
    },
    directMess: {
      width: 30,
      height: 30,
      marginTop: 18,
      marginRight: 10
    },
    
    
  })

export default HomeScreen;