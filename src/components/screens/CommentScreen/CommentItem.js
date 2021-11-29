import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, FlatList } from 'react-native';
import colors from '../../../themes/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { selectAllComments } from '../../../store/reducers/commentsSlice';
import { useSelector } from 'react-redux';
import { users } from '../../../models/users';
import { comments } from '../../../models/comments';

function CommentItem({postData}) {

  const [liked, setLiked] = useState(false);
  const authorPost = users.filter(users => users.id === postData.userId)[0];
  // console.log(allComments)
  // console.log(authorPost)
  // console.log(comments.userId)
  // console.log(commentsPost[comments])
  // console.log(postData.id)

  

  return (
    <View style={styles.commentItem}>
      <View style={styles.stackComment}>
        <Image style={styles.avatarImage} source={authorPost.avatar}  />
        <View style={styles.infoComment}>
          <Text style={styles.authurName}>{authorPost.username}</Text>
          <Text style={styles.comment}>{postData.comment}</Text>
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
    fontSize: 15
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

export default CommentItem;