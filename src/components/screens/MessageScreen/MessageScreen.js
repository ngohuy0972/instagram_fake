import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../../../themes/colors';
import style from '../../../themes/style';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ContentMessage from './ContentMessage';
import { users } from '../../../models/users';

function MessageScreen({navigation}) {

  const dataUser = users;
  // console.log(dataUser)

  return (
    <View style={style.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.goBack}>
          <Ionicons name='arrow-back-outline' size={30} color={colors.black} 
                    onPress={() => navigation.goBack()} />
        </TouchableOpacity>
        <Text style={styles.textHeader}>All chats</Text>
      </View>
      
      <ContentMessage navigation={navigation} 
                      dataUser={dataUser}
      />

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
  }
})

export default MessageScreen;