import React from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native';
import colors from '../../../themes/colors';
import style from '../../../themes/style';
import IonIcons from 'react-native-vector-icons/Ionicons';

function StoryScreenPopup(props) {

  return (
    <View style={styles.popupStoryContainer}>
      <View style={styles.headerComponent}>
        <Image style={styles.storyAvatar} source={require('../../../assets/huybap.jpg')} />
        <Text style={styles.storyUser}>username1</Text>
      </View>
      <View style={styles.storyContent}>
        <Image style={styles.storyImage} source={require('../../../assets/huybap.jpg')} />
        <TextInput style={styles.replyMess} 
                    placeholder='Reply message...' 
                    placeholderTextColor='white' >
        </TextInput>
        <IonIcons style={styles.sendReply} name='paper-plane-outline' size={30} color={colors.white} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  popupStoryContainer: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary
    // opacity: 0.1
  },
  storyContent: {
    flex: 9,
    // justifyContent: 'center',
  },
  headerComponent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },  
  storyAvatar: {
    position: 'relative',
    height: 35,
    width: 35,
    borderRadius: 50,
    top: 0,
    left: 15,
    borderWidth: 2,
    borderColor: colors.white
  },
  storyUser: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
    marginLeft: 25
  },
  storyImage: {
    width: '100%',
    height: '85%',
    position: 'absolute',
    top: 5,
    borderRadius: 10
  },
  replyMess: {
    position: 'absolute',
    bottom: 5,
    left: 10,
    borderRadius: 50,
    width: '80%',
    height: 45,
    elevation: 0,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.secondary,
    paddingLeft: 20
  },
  sendReply: {
    bottom: 25,
    position: 'absolute',
    right: 25,
    transform: [{ rotate: "20deg" }]
  }
})

export default StoryScreenPopup;