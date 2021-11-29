import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import { useSelector } from 'react-redux';
import { selectAllComments } from '../../../store/reducers/commentsSlice';
import colors from '../../../themes/colors';
import CommentItem from './CommentItem';

function contentComment({postData}) {

  const allComments = useSelector(selectAllComments);
  // console.log(allComments)
  const commentsPost = allComments.filter(comments => comments.postId === postData.id);

  return (

      <ScrollView style={styles.contentComment} showsVerticalScrollIndicator={false} >
        <View style={styles.statusPost}>
          <Image style={styles.avatarAuthor} source={postData.avatarAuthor} />
          <View style={styles.leftSection}>
            <Text style={styles.username}>{postData.author}</Text>
            <Text style={styles.status} numberOfLines={5} >{postData.status}</Text>
            <Text style={styles.timePost}>Edited . 11h</Text>
          </View>
        </View>

        { commentsPost.map(postData => (
          <CommentItem postData={postData} key={postData.userId}/>
        ))}

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

export default contentComment;