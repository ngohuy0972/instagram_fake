import React from 'react';
import { Text, View, TouchableOpacity,StyleSheet, TextInput, Image } from 'react-native';
import style from '../../../themes/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../themes/colors';
import ContentComment from './ContentComment';

function CommentScreen(props) {

  return (
    <View style={style.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.goBack}>
          <Ionicons name='arrow-back-outline' size={30} color={colors.black} 
                    onPress={() => props.navigation.goBack()} />
        </TouchableOpacity>
        <Text style={styles.textHeader}>All Comments</Text>
      </View>
      <ContentComment />

      <View style={styles.bottom}>
        <Image style={styles.avatarUserComment} source={require('../../../assets/huybap.jpg')} />
        <TextInput style={styles.commentInput} 
                            placeholder='Add a comment...' 
                            placeholderTextColor={colors.textColorSecond} >
        </TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 0.1,
    borderBottomWidth: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.secondary
  },
  textHeader: {
    color: colors.primary,
    fontSize: 20,
    borderBottomWidth: 1,
  },
  goBack: {
    position: 'absolute',
    left: 15,
  },
  bottom: {
    paddingBottom: 15,
    paddingTop: 15,
    position: 'absolute',
    flex: 0.1,
    width: '100%',
    alignItems: 'center',
    borderColor: colors.secondary,
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderTopWidth:  1
  },
  avatarUserComment: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 15
  },
  commentInput: {
    marginLeft: 10,
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderRadius: 50,
    paddingLeft: 15,
    borderColor: colors.secondary
  }
})

export default CommentScreen;