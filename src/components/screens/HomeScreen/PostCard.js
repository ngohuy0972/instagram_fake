import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity,TextInput } from 'react-native';
import colors from '../../../themes/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const PostCard = ({navigation, post}) => {

  const [liked, setLiked] = useState(false);

  return (

    <View style={styles.post}>
      <View style={styles.headerPost}>
        <Image style={styles.avatarAuthor} source={post.avatarAuthor} />
        <Text style={styles.authur}>{post.author}</Text>
      </View>

      <View>
        <Image style={styles.imagePost} source={post.image} />
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
                  onPress={() => navigation.navigate('Comment Screen',{ post })}
        />
        <Ionicons style={styles.reactShare} name='paper-plane-outline' size={26} color={colors.black} />
      </View>

      <View style={styles.countLike}>
        <Text style={styles.like}>{post.likes} Likes</Text>
      </View>

      <View style={styles.statusSection}>
        <Text style={styles.authurStatus}>{post.author}</Text>
        <Text style={styles.status} numberOfLines={1.5} >{post.status}</Text>
      </View>

      <View style={styles.commentSection}>
        <TouchableOpacity style={styles.allComment} 
              onPress={() => navigation.navigate('Comment Screen',{ post })}>
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
  
  )
}

const styles = StyleSheet.create({
  post: {
    width: '100%',
    height: 680,
    borderTopWidth: 0.5,
    borderColor: colors.textColorSecond,
    marginTop: 20
  },
  headerPost: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  avatarAuthor: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 10,
    marginTop: 5,
    borderWidth: 1,
    borderColor: colors.ig_color,
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
    marginLeft: 15,
    alignItems: 'center'
  },
  authurStatus: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 16
  },
  status: {
    color: colors.primary,
    fontSize: 15,
    marginLeft: 5,
    marginRight: 70,
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
