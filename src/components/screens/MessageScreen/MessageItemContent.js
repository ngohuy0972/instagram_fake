import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import colors from '../../../themes/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import style from '../../../themes/style';
import { useSelector } from 'react-redux';
import { selectAllMess } from '../../../store/reducers/messagesSlice';
import { messages } from '../../../models/messages';

function MessageItemContent({ avatarReciver, messItemContent}) {

  // console.log(messItemContent)

  return (
    <View>
      <View style={styles.messItemSender}>
        <Text style={styles.contentMessSender}>{messItemContent.messageSender}</Text>
      </View>

      <View style={styles.messItemReciver}>
        <Image style={styles.avatarReciver} source={avatarReciver} />
        <Text style={styles.contentMessReciver}>{messItemContent.messageReciver}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  messItemSender: {
    flexDirection: 'row-reverse',
    marginBottom: 15,
    marginTop: 15 
  },
  contentMessSender: {
    backgroundColor: colors.bgSender,
    padding: 15,
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

export default MessageItemContent;