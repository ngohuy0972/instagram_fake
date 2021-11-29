import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import colors from '../../../themes/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import style from '../../../themes/style';
import StoryScreenPopup from './StoryScreenPopup';

export const StoryCard = ({navigation, story}) => {

  const [popupOpen, setPopupOpen] = useState(false);

  return (
<View style={styles.storyScroll}>
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <TouchableOpacity style={styles.bgStory}
                  onPress={() => setPopupOpen(true)}>
      <Image style={styles.storyUser} source={story.storyImage} />
    </TouchableOpacity>
    <Modal visible={popupOpen} animationType='slide' >
      <Ionicons style={style.closePopup} name='close-outline' size={40} color={colors.white} 
              onPress={() => setPopupOpen(false)} />
      <StoryScreenPopup avatarAuthor={story.storyAvatar} 
                        storyImage={story.storyImage} 
                        nameAuthor={story.username} />
    </Modal>
  </ScrollView>
</View>
  )
}

const styles = StyleSheet.create({
  storyScroll: {
    flex: 0.2,
    marginLeft: 10,
  },
  bgStory: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderColor: colors.ig_color,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  storyUser: {
    width: 65,
    height: 65,
    borderRadius: 50,
    borderColor: colors.white,
    borderWidth: 2
  },
})
