import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, Modal } from 'react-native';
import style from '../../../themes/style';
import { AuthContext } from '../../context';
import colors from '../../../themes/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EditProfilePopup from './EditProfilePopup';


function ProfileScreen({navigation, route}) {

  const { userName } = React.useContext(AuthContext).state;
  const { signOut} = React.useContext(AuthContext).authContext;
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <View style={styles.homeScreenContainer}>
      <StatusBar backgroundColor='#000' barStyle="light-content"/>
      <View style={styles.headerProfile}> 
        <Text style={[styles.titleHeader]}>
          Profiles
        </Text>
      
        <View style={[styles.profileTicket]}>
          <View style={styles.avatarProfile} >
          
            <TouchableOpacity style={styles.editProfile}>
              <Ionicons name='create-outline' size={30} color={colors.black} 
                        onPress={() => setPopupOpen(true) }
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonLogout}>
              <Ionicons name='exit-outline' size={30} color={colors.black} 
                        onPress={() => {signOut()} }
              />
            </TouchableOpacity>
            
            <Image style={styles.avatar} source={require('../../../assets/huybap.jpg')} />
            <Text style={styles.username}>{userName}</Text>
            <Text style={[styles.hashtag]}>@{userName}</Text>
          </View>
        </View>

        <Modal visible={popupOpen} animationType='slide' >
          <TouchableOpacity>
            <Ionicons style={styles.closePopup} name='close-outline' size={40} color={colors.black} 
                    onPress={() => setPopupOpen(false)} />
          </TouchableOpacity>
          <EditProfilePopup />
        </Modal>

      </View>
      <View style={styles.contentProfile}>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  homeScreenContainer: {
    backgroundColor: colors.primary,
    flex: 1 ,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleHeader: {
    color: colors.secondary,
    fontSize: 25,
    fontWeight: 'bold'
  },
  headerProfile: {
    flex: 1,
    width: '100%',
    height: 300,
    alignItems: 'center',
    marginTop: '10%',
  },
  avatarProfile: {
    alignItems: 'center',
  },
  editProfile: {
    left: 10,
    top: 10,
    position: 'absolute',
    transform: [{ rotate: "270deg" }]
  },
  avatar: {
    width: 80, 
    height: 80, 
    borderRadius: 50, 
    marginTop: 30
  },
  username: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 10
  },
  hashtag: {
    color: colors.textColorSecond,
  },  
  contentProfile: {
    flex: 2,
    width: '100%',
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileTicket: {
    width: '85%',
    height: 200,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginTop: 30,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 10,
      height: 15,
    },
    shadowOpacity: 0.5,
    shadowRadius: 0,
    elevation: 10
  },
  imageLogo: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  titlePassed: {
    color: colors.textColor,
    fontSize: 22
  },
  closePopup: {
    position: 'absolute',
    right: 20,
    top: 10
  },
  buttonLogout: {
    position: 'absolute',
    right: 10,
    top: 10
  }
})

export default ProfileScreen;