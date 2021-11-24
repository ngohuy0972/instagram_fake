import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar, Modal, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../themes/colors';
import StoryScreenPopup from './StoryScreenPopup';
import style from '../../../themes/style';

function ContentHomeScreen(props) {

  // const { nav } = props; //object destructring
  const [popupOpen, setPopupOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.storyScroll}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.bgStory}
                  onPress={() => setPopupOpen(true) }
            >
              <Image style={styles.storyUser} source={require('../../../assets/huybap.jpg')} />
            </TouchableOpacity>  

            <TouchableOpacity style={styles.bgStory}
                  onPress={() => setPopupOpen(true) }
            >
              <Image style={styles.storyUser} source={require('../../../assets/user3.jpg')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.bgStory}
                  onPress={() => setPopupOpen(true) }
            >
              <Image style={styles.storyUser} source={require('../../../assets/user1.jpg')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.bgStory}
                  onPress={() => setPopupOpen(true) }
            >
              <Image style={styles.storyUser} source={require('../../../assets/post2.jpg')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.bgStory}
                  onPress={() => setPopupOpen(true) }
            >
              <Image style={styles.storyUser} source={require('../../../assets/user2.jpg')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.bgStory}
                  onPress={() => setPopupOpen(true) }
            >
              <Image style={styles.storyUser} source={require('../../../assets/post3.jpg')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.bgStory}
                  onPress={() => setPopupOpen(true) }
            >
              <Image style={styles.storyUser} source={require('../../../assets/post1.jpg')} />
            </TouchableOpacity>        
        
          </ScrollView>
          <Modal visible={popupOpen} animationType='slide' >
            <Ionicons style={style.closePopup} name='close-outline' size={40} color={colors.white} 
                    onPress={() => setPopupOpen(false)} />
            <StoryScreenPopup />
          </Modal>
        </View>

        <View style={styles.post}>
          <View style={styles.headerPost}>
            <Image style={styles.avatarAuthur} source={require('../../../assets/user1.jpg')} />
            <Text style={styles.authur}>username1</Text>
          </View>
          <View>
            <Image style={styles.imagePost} source={require('../../../assets/post6.jpg')} />
          </View>
          <View style={styles.bottomPost}>
            <View style={styles.reaction}>
              <Ionicons style={styles.reactHeart} 
                        name={liked ? "heart" : "heart-outline"} 
                        size={30} 
                        color={liked ? colors.heart_color : colors.black }
                        onPress={() => setLiked((isLiked) => !isLiked)} 
                        />
              <Ionicons style={styles.reactComment} 
                        name='chatbubble-outline' 
                        size={26} 
                        color={colors.black} 
                        onPress={() => props.navigation.navigate('Comment Screen')}
              />
              <Ionicons style={styles.reactShare} name='paper-plane-outline' size={26} color={colors.black} />
            </View>
            <View style={styles.countLike}>
              <Text style={styles.like}>99 likes</Text>
            </View>
            <View style={styles.statusSection}>
              <Text style={styles.authurStatus}>username1</Text>
              <Text style={styles.status}>Sự kết hợp độc đáo của những yếu tố...</Text>
            </View>
            <View style={styles.commentSection}>
              <TouchableOpacity style={styles.allComment} 
                    onPress={() => props.navigation.navigate('Comment Screen')}>
                <Text style={styles.viewComment}>View all 35 comments</Text>
              </TouchableOpacity>
              <View style={styles.writeCommentSection}>
                <Image style={styles.avatarUserComment} source={require('../../../assets/huybap.jpg')} />
                <TextInput style={styles.addComment} 
                            placeholder='Add a comment...' 
                            placeholderTextColor={colors.textColorSecond} >
                </TextInput>
                <TouchableOpacity>
                  <Ionicons style={styles.postComment} 
                            name='arrow-up-circle-outline' 
                            size={30} color={colors.black} 
                            onPress={() => alert('post comment')}
                            />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.post}>
          <View style={styles.headerPost}>
            <Image style={styles.avatarAuthur} source={require('../../../assets/user2.jpg')} />
            <Text style={styles.authur}>username2</Text>
          </View>
          <View>
            <Image style={styles.imagePost} source={require('../../../assets/post5.jpg')} />
          </View>
          <View style={styles.bottomPost}>
            <View style={styles.reaction}>
              <Ionicons style={styles.reactHeart} 
                        name={liked ? "heart" : "heart-outline"} 
                        size={30} 
                        color={liked ? colors.heart_color : colors.black }
                        onPress={() => setLiked((isLiked) => !isLiked)} 
                        />
              <Ionicons style={styles.reactComment} 
                        name='chatbubble-outline' 
                        size={26} 
                        color={colors.black} 
                        onPress={() => props.navigation.navigate('Comment Screen')}
              />
              <Ionicons style={styles.reactShare} name='paper-plane-outline' size={26} color={colors.black} />
            </View>
            <View style={styles.countLike}>
              <Text style={styles.like}>99 likes</Text>
            </View>
            <View style={styles.statusSection}>
              <Text style={styles.authurStatus}>username2</Text>
              <Text style={styles.status}>Sự kết hợp độc đáo của những yếu tố...</Text>
            </View>
            <View style={styles.commentSection}>
              <TouchableOpacity style={styles.allComment} 
                    onPress={() => props.navigation.navigate('Comment Screen')}>
                <Text style={styles.viewComment}>View all 35 comments</Text>
              </TouchableOpacity>
              <View style={styles.writeCommentSection}>
                <Image style={styles.avatarUserComment} source={require('../../../assets/huybap.jpg')} />
                <TextInput style={styles.addComment} 
                            placeholder='Add a comment...' 
                            placeholderTextColor={colors.textColorSecond} >
                </TextInput>
                <TouchableOpacity>
                  <Ionicons style={styles.postComment} 
                            name='arrow-up-circle-outline' 
                            size={30} color={colors.black} 
                            onPress={() => alert('post comment')}
                            />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.post}>
          <View style={styles.headerPost}>
            <Image style={styles.avatarAuthur} source={require('../../../assets/user3.jpg')} />
            <Text style={styles.authur}>username3</Text>
          </View>
          <View>
            <Image style={styles.imagePost} source={require('../../../assets/post4.jpg')} />
          </View>
          <View style={styles.bottomPost}>
            <View style={styles.reaction}>
              <Ionicons style={styles.reactHeart} 
                        name={liked ? "heart" : "heart-outline"} 
                        size={30} 
                        color={liked ? colors.heart_color : colors.black }
                        onPress={() => setLiked((isLiked) => !isLiked)} 
                        />
              <Ionicons style={styles.reactComment} 
                        name='chatbubble-outline' 
                        size={26} 
                        color={colors.black} 
                        onPress={() => props.navigation.navigate('Comment Screen')}
              />
              <Ionicons style={styles.reactShare} name='paper-plane-outline' size={26} color={colors.black} />
            </View>
            <View style={styles.countLike}>
              <Text style={styles.like}>99 likes</Text>
            </View>
            <View style={styles.statusSection}>
              <Text style={styles.authurStatus}>username3</Text>
              <Text style={styles.status}>Sự kết hợp độc đáo của những yếu tố...</Text>
            </View>
            <View style={styles.commentSection}>
              <TouchableOpacity style={styles.allComment} 
                    onPress={() => props.navigation.navigate('Comment Screen')}>
                <Text style={styles.viewComment}>View all 35 comments</Text>
              </TouchableOpacity>
              <View style={styles.writeCommentSection}>
                <Image style={styles.avatarUserComment} source={require('../../../assets/huybap.jpg')} />
                <TextInput style={styles.addComment} 
                            placeholder='Add a comment...' 
                            placeholderTextColor={colors.textColorSecond} >
                </TextInput>
                <TouchableOpacity>
                  <Ionicons style={styles.postComment} 
                            name='arrow-up-circle-outline' 
                            size={30} color={colors.black} 
                            onPress={() => alert('post comment')}
                            />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 0.9,
    width: '100%',
  },
  storyScroll: {
    flex: 0.2,
    marginLeft: 10
  },
  bgStory: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderColor: colors.textColorSecond,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20, 
    marginRight: 10
  },
  storyUser: {
    width: 65,
    height: 65,
    borderRadius: 50,
    borderColor: colors.white,
    borderWidth: 2
  },
  post: {
    width: '100%',
    height: 670,
    borderTopWidth: 0.5,
    borderColor: colors.textColorSecond,
    marginTop: 20
  },
  headerPost: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  avatarAuthur: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 10,
    marginTop: 5,
    borderWidth: 1,
    borderColor: colors.secondary,
    marginBottom: 10
  },
  authur: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 10
  },
  imagePost: {
    width: '100%',
    height: 450
  },
  reaction: {
    flexDirection: 'row',
    marginLeft: 10
  },
  reactHeart: {
    marginTop: 10,
    marginRight: 15
  },
  reactComment: {
    marginTop: 12,
    marginRight: 15
  },
  reactShare: {
    marginTop: 13,
    marginRight: 15
  },
  countLike: {
    marginLeft: 15
  },
  like: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '700'
  },
  statusSection: {
    flexDirection: 'row',
    marginLeft: 15
  },
  authurStatus: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 16
  },
  status: {
    color: colors.primary,
    fontSize: 16,
    marginLeft: 5
  },
  commentSection: {
    flexDirection: 'column',
    marginHorizontal: 15
  },
  viewComment: {
    color: colors.textColorSecond,
    marginTop: 5
  },
  writeCommentSection: {
    marginTop: 0,
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatarUserComment: {
    width: 30,
    height:30,
    borderRadius: 50
  },
  addComment: {
    marginLeft: 10,
    width: '80%'
  },
  postComment: {
    marginLeft: 10,
  }
})

export default ContentHomeScreen;