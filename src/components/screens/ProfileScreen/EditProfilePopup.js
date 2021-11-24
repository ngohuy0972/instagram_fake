import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import style from '../../../themes/style';
import colors from '../../../themes/colors';


function EditProfilePopup(props) {

  return (
    <View style={styles.popupEditProfile}>
      <View style={styles.headerComponent}>
          <Text style={styles.textHeader}>Update profile</Text>
      </View>
      <View style={styles.formInput}>
        <View style={style.input}>  
          <TextInput 
                placeholder="Username"
                placeholderTextColor="#000"
                style={[style.textInput]}
                autoCapitalize="none"
          />
          
        </View>

        <View style={style.input}>  
          <TextInput 
              placeholder="Phone Number"
              placeholderTextColor="#000"
              style={[style.textInput]}
              autoCapitalize="none"
          />
        </View>

        <View style={style.input}>  
          <TextInput 
              placeholder="Email"
              placeholderTextColor="#000"
              style={[style.textInput]}
              autoCapitalize="none"
          />
        </View>

        <View style={style.input}>  
          <TextInput 
              placeholder="Address"
              placeholderTextColor="#000"
              style={[style.textInput]}
              autoCapitalize="none"
          />
        </View>

        <View style={styles.loginButton}>
            <TouchableOpacity
                style={style.button}
                onPress={() => alert('update profile')}
            >
              <Text style={[style.textButton]}>UPDATE</Text>
            </TouchableOpacity>
          </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  popupEditProfile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20
  },
  formInput: {
    backgroundColor: colors.white,
    flex: 7,
  },
  headerComponent: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center'
  },  
  textHeader: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: 'bold'
  },
  inputComponent: {
    flex: 3,
    marginHorizontal: 50,
  },
  text: {
    width: '100%',
    color: colors.textColor,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15
  },
  logo: {
    width: 80,
    height: 80,
  },
  textUsername: {
    width: '100%',
    color: colors.textColor,
    fontSize: 22,
    fontWeight: 'normal',
    textAlign: 'center'
  },
  textPhone: {
    width: '100%',
    color: colors.textColor,
    fontSize: 22,
    fontWeight: 'normal',
    textAlign: 'center'
  },
  accountOption: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  loginButton: {
    alignItems: 'center',
    marginTop: 20
  }, 
  logoutAccount: {
    color: colors.textColor,
    fontWeight: 'bold', 
    alignItems: 'flex-end'
  },

})

export default EditProfilePopup;