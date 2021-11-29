import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import colors from '../../../themes/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import style from '../../../themes/style';
import { useSelector } from 'react-redux';
import { selectAllMess } from '../../../store/reducers/messagesSlice';
import { messages } from '../../../models/messages';
import MessageItemContent from './MessageItemContent';

function DirectMessageScreen({navigation, route }) {

  const  {idUserReciver, avatarReciver, userReciver} = route.params;
  const allMess = useSelector(selectAllMess);
  const messByReciver = allMess.filter(messages => messages.userReciverId === idUserReciver);

  // console.log(messByReciver)
  const renderMessItemContent = ({item}) => (
    <MessageItemContent 
      navigation={navigation}
      messItemContent={item}
      avatarReciver={avatarReciver}
    /> 
  )

  return (

    <View style={style.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.goBack}>
          <Ionicons name='arrow-back-outline' size={30} color={colors.black} 
                    onPress={() => navigation.goBack()} />
        </TouchableOpacity>
        <Text style={styles.userReciver}>{userReciver}</Text>
        <View style={styles.callOptions}>
          <Ionicons style={styles.audioCall} name='call-outline' size={25} color={colors.black} 
                      onPress={() => alert('Audio Call')} />
          <Ionicons style={styles.videoCall} name='videocam-outline' size={30} color={colors.black} 
                      onPress={() => alert('Video Call')} />
        </View>
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false} >
        
        <FlatList 
          data={messByReciver}
          renderItem={renderMessItemContent}
        />

        <View>
          <Text style={style.gap}></Text>
        </View>
      </ScrollView>

      <View style={styles.bottom}>
        <TextInput style={styles.messageReply} 
                            placeholder='Message...' 
                            placeholderTextColor={colors.textColorSecond} >
        </TextInput>
        <Ionicons style={styles.sendMess} 
                  name='arrow-up-circle-outline' 
                  size={35} 
                  color={colors.black} 
                  onPress={() => alert('Send Message')}  
                  />
      </View>
    </View>
      
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 0.9,
    width: '100%',
    marginTop: 10
  },
  header: {
    flex: 0.1,
    borderBottomWidth: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.secondary,
  },
  userReciver: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold'
  },
  callOptions: {
    position: 'absolute',
    right: 0,
    width: '20%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  audioCall: {
    marginRight: 15
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
  messageReply: {
    marginLeft: 10,
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderRadius: 50,
    paddingLeft: 15,
    borderColor: colors.secondary
  },
  sendMess: {
    marginLeft: 20
  },
  messItemSender: {
    flexDirection: 'row-reverse',
    marginBottom: 15,
    marginTop: 15 
  },
  contentMessSender: {
    backgroundColor: colors.bgSender,
    padding: 15,
    width: '80%',
    color: colors.white,
    fontSize: 16,
    borderRadius: 25,
    borderBottomRightRadius: 0,
    marginRight: 5
  },
  messItemReciver: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 5

  },
  contentMessReciver: {
    backgroundColor: colors.secondary,
    padding: 15,
    width: '65%',
    color: colors.black,
    fontSize: 16,
    borderRadius: 25,
    borderBottomLeftRadius: 0,
    marginRight: 5
  },
  avatarReciver: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginRight: 10
  }
})

export default DirectMessageScreen;