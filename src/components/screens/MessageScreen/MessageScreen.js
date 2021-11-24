import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../../../themes/colors';
import style from '../../../themes/style';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Searchbar } from 'react-native-paper';
import { color } from 'react-native-reanimated';
import ContentMessage from './ContentMessage';

function MessageScreen({navigation}) {

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={style.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.goBack}>
          <Ionicons name='arrow-back-outline' size={30} color={colors.black} 
                    onPress={() => navigation.goBack()} />
        </TouchableOpacity>
        <Text style={styles.textHeader}>All chats</Text>
      </View>
      <ContentMessage navigation={navigation} />
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