import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import { posts } from '../../../models/posts';
import { PostCard } from './PostCard';
import { storys } from '../../../models/storys';
import { StoryCard } from './StoryCard';
import { users } from '../../../models/users';

function ContentHomeScreen({navigation}, props) {

  // const { nav } = props; //object destructring
  const dataPost = posts;
  const dataStory = storys;

  const renderPost = ({item}) => (
    <PostCard 
      navigation={navigation}
      post={item}
    />
  )

  const renderStory = ({item}) => (
    <StoryCard 
      story={item}
    />
  )

  return (  
    <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>          
      <FlatList 
        data={storys}
        renderItem={renderStory}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

      <FlatList 
        data={posts}
        renderItem={renderPost}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 0.9,
    width: '100%',
  },
})

export default ContentHomeScreen;