import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Button, StatusBar, } from 'react-native';
import colors from '../../themes/colors';
import style from '../../themes/style';
import users from '../../models/users';
import { AuthContext } from '../context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({navigation}) => {

  const { signIn } = React.useContext(AuthContext).authContext;
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const userInputChanged = (val) => {
    if( val.trim().length >= 4 ) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true,
            isValidUser: true
        });
    } else {
        setData({
            ...data,
            username: val,
            check_textInputChange: false,
            isValidUser: false
        });
    }
  }
  
  const handlePasswordChanged = (val) => {
    if( val.trim().length >= 6 ) {
        setData({
            ...data,
            password: val,
            isValidPassword: true
        });
    } else {
        setData({
            ...data,
            password: val,
            isValidPassword: false
        });
    }
  }
  
  const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    });
  }
  
  const handleValidUser = (val) => {
    if( val.trim().length >= 4 ) {
        setData({
            ...data,
            isValidUser: true
        });
    } else {
        setData({
            ...data,
            isValidUser: false
        });
    }
  }

  const loginHandle = (username, password) => {

    const foundUser = users.filter( item => {
      return username == item.username && password == item.password;
      } );
    
      if ( data.username.length == 0 || data.password.length == 0 ) {
          alert('Wrong Input!');
          return;
      }
    
      if ( foundUser.length == 0 ) {
          alert('Invalid User!');
          return;
      }
      signIn(foundUser);
  }

  return (
    <View style={styles.loginContainer}>
      <StatusBar backgroundColor='#000' barStyle="light-content"/>
      <View style={styles.headerComponent}>
          <Ionicons style={styles.logo} name='logo-instagram' size={80} color={colors.black} />
      </View>
      <View 
          animation="fadeInUpBig"
          style={[styles.inputComponent]}
      >
        <View style={style.input}>  
          <TextInput 
                placeholder="Username"
                placeholderTextColor="#000"
                style={[style.textInput]}
                autoCapitalize="none"
                onChangeText={(val) => userInputChanged(val)}
                onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? 
          <View
              animation="bounceIn"
          >
              
          </View>
          : null}
          </View>
          { data.isValidUser ? null : 
          <View animation="fadeInLeft" duration={500}>
          <Text style={style.messageErr}>Username must be 4 characters long.</Text>
          </View>
          }
          <View style={style.input}>  
            <TextInput 
                placeholder="Password"
                placeholderTextColor="#000"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={[style.textInput]}
                autoCapitalize="none"
                onChangeText={(val) => handlePasswordChanged(val)}
            />
              <TouchableOpacity
                  onPress={updateSecureTextEntry}
              >
                  
              </TouchableOpacity>
          </View>
          { data.isValidPassword ? null : 
          <View animation="fadeInLeft" duration={500}>
            <Text style={style.messageErr}>Password must be 6 characters long.</Text>
          </View>
          }
          
          <View style={styles.loginButton}>
            <TouchableOpacity
                style={style.button}
                onPress={() => {loginHandle( data.username, data.password )}}
            >
              <Text style={[style.textButton]}>Log In</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  headerComponent: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center'
  },  
  logo: {

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

export default LoginScreen;