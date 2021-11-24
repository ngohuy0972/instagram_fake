import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import colors from '../../../themes/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Searchbar } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';

function ContentMessage(props) {

  const [liked, setLiked] = useState(false);

  return (

      <ScrollView style={styles.contentComment} showsVerticalScrollIndicator={false} >
        <View style={styles.statusPost}>
          <Image style={styles.avatarAuthor} source={require('../../../assets/huybap.jpg')} />
          <View style={styles.leftSection}>
            <Text style={styles.username}>_huybapp99</Text>
            <Text style={styles.status}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
            <Text style={styles.timePost}>Edited . 11h</Text>
          </View>
        </View>

        <View style={styles.commentItem}>
          <View style={styles.stackComment}>
            <Image style={styles.avatarImage} source={require('../../../assets/user2.jpg')}  />
            <View style={styles.infoComment}>
              <Text style={styles.authurName}>username2</Text>
              <Text style={styles.comment}>text of the printing and typesetting industry</Text>
              <View style={styles.timeReply}>
                <Text style={styles.seenTime}>1m ago</Text>
                <Text style={styles.replyComment}>Reply</Text>
              </View>
            </View>
          </View>
          <Ionicons style={styles.reactHeart} 
                        name={liked ? "heart" : "heart-outline"} 
                        size={20} 
                        color={liked ? colors.heart_color : colors.black }
                        onPress={() => setLiked((isLiked) => !isLiked)} 
                        />
        </View>

        <View style={styles.commentItem}>
          <View style={styles.stackComment}>
            <Image style={styles.avatarImage} source={require('../../../assets/user3.jpg')}  />
            <View style={styles.infoComment}>
              <Text style={styles.authurName}>username3</Text>
              <Text style={styles.comment}>Lorem Ipsum is simply dummy text </Text>
              <View style={styles.timeReply}>
                <Text style={styles.seenTime}>1m ago</Text>
                <Text style={styles.replyComment}>Reply</Text>
              </View>
            </View>
          </View>
          <Ionicons style={styles.reactHeart} 
                        name={liked ? "heart" : "heart-outline"} 
                        size={20} 
                        color={liked ? colors.heart_color : colors.black }
                        onPress={() => setLiked((isLiked) => !isLiked)} 
                        />
        </View>

        <View style={styles.commentItem}>
          <View style={styles.stackComment}>
            <Image style={styles.avatarImage} source={require('../../../assets/user1.jpg')}  />
            <View style={styles.infoComment}>
              <Text style={styles.authurName}>username4</Text>
              <Text style={styles.comment}>Lorem Ipsum is simply dummy text of industry</Text>
              <View style={styles.timeReply}>
                <Text style={styles.seenTime}>1m ago</Text>
                <Text style={styles.replyComment}>Reply</Text>
              </View>
            </View>
          </View>
          <Ionicons style={styles.reactHeart} 
                        name={liked ? "heart" : "heart-outline"} 
                        size={20} 
                        color={liked ? colors.heart_color : colors.black }
                        onPress={() => setLiked((isLiked) => !isLiked)} 
                        />
        </View>

        <View style={styles.commentItem}>
          <View style={styles.stackComment}>
            <Image style={styles.avatarImage} source={require('../../../assets/post6.jpg')}  />
            <View style={styles.infoComment}>
              <Text style={styles.authurName}>username5</Text>
              <Text style={styles.comment}>Lorem Ipsum is simply etting industry</Text>
              <View style={styles.timeReply}>
                <Text style={styles.seenTime}>1m ago</Text>
                <Text style={styles.replyComment}>Reply</Text>
              </View>
            </View>
          </View>
          <Ionicons style={styles.reactHeart} 
                        name={liked ? "heart" : "heart-outline"} 
                        size={20} 
                        color={liked ? colors.heart_color : colors.black }
                        onPress={() => setLiked((isLiked) => !isLiked)} 
                        />
        </View>

        <View style={styles.commentItem}>
          <View style={styles.stackComment}>
            <Image style={styles.avatarImage} source={require('../../../assets/post5.jpg')}  />
            <View style={styles.infoComment}>
              <Text style={styles.authurName}>username6</Text>
              <Text style={styles.comment}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
              <View style={styles.timeReply}>
                <Text style={styles.seenTime}>1m ago</Text>
                <Text style={styles.replyComment}>Reply</Text>
              </View>
            </View>
          </View>
          <Ionicons style={styles.reactHeart} 
                        name={liked ? "heart" : "heart-outline"} 
                        size={20} 
                        color={liked ? colors.heart_color : colors.black }
                        onPress={() => setLiked((isLiked) => !isLiked)} 
                        />
        </View>

        <View style={styles.commentItem}>
          <View style={styles.stackComment}>
            <Image style={styles.avatarImage} source={require('../../../assets/post3.jpg')}  />
            <View style={styles.infoComment}>
              <Text style={styles.authurName}>username7</Text>
              <Text style={styles.comment}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
              <View style={styles.timeReply}>
                <Text style={styles.seenTime}>1m ago</Text>
                <Text style={styles.replyComment}>Reply</Text>
              </View>
            </View>
          </View>
          <Ionicons style={styles.reactHeart} 
                        name={liked ? "heart" : "heart-outline"} 
                        size={20} 
                        color={liked ? colors.heart_color : colors.black }
                        onPress={() => setLiked((isLiked) => !isLiked)} 
                        />
        </View>

        <View style={styles.commentItem}>
          <View style={styles.stackComment}>
            <Image style={styles.avatarImage} source={require('../../../assets/post4.jpg')}  />
            <View style={styles.infoComment}>
              <Text style={styles.authurName}>username8</Text>
              <Text style={styles.comment}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
              <View style={styles.timeReply}>
                <Text style={styles.seenTime}>1m ago</Text>
                <Text style={styles.replyComment}>Reply</Text>
              </View>
            </View>
          </View>
          <Ionicons style={styles.reactHeart} 
                        name={liked ? "heart" : "heart-outline"} 
                        size={20} 
                        color={liked ? colors.heart_color : colors.black }
                        onPress={() => setLiked((isLiked) => !isLiked)} 
                        />
        </View>

        <View style={styles.commentItem}>
          <View style={styles.stackComment}>
            <Image style={styles.avatarImage} source={require('../../../assets/huybap.jpg')}  />
            <View style={styles.infoComment}>
              <Text style={styles.authurName}>username1</Text>
              <Text style={styles.comment}>text of the printing and typesetting industry</Text>
              <View style={styles.timeReply}>
                <Text style={styles.seenTime}>1m ago</Text>
                <Text style={styles.replyComment}>Reply</Text>
              </View>
            </View>
          </View>
          <Ionicons style={styles.reactHeart} 
                        name={liked ? "heart" : "heart-outline"} 
                        size={20} 
                        color={liked ? colors.heart_color : colors.black }
                        onPress={() => setLiked((isLiked) => !isLiked)} 
                        />
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentComment: {
    flex: 0.9,
    width: '100%',
  },
  statusPost: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 150,
    borderBottomWidth: 1.5,
    borderColor: colors.secondary,
    paddingLeft: 15
  },
  avatarAuthor: {
    width: 35,
    height: 35,
    borderRadius: 50
  },
  leftSection: {
    marginLeft: 15,
    marginRight: 50
  },
  username: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold'
  },
  status: {
    color: colors.black,
    fontSize: 16
  },
  timePost: {
    color: colors.textColorSecond,
    fontSize: 14
  },
  avatarImage: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  commentItem: {
    flexDirection: 'row',
    width: '100%',
    alignItems:'center',
    marginTop: 10,
    paddingLeft: 15
  },
  stackComment: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoComment: {
    marginLeft: 15,
    width: '85%'
  },
  authurName: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold'
  },
  comment: {
    color: colors.black
  },  
  seenTime: {
    color: colors.textColorSecond,
    fontSize: 14
  },
  timeReply: {
    flexDirection: 'row',
    marginTop: 5
  },
  replyComment: {
    marginLeft: 15
  }
})

export default ContentMessage;