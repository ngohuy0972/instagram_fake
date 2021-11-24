import React from 'react';
import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  
  gap: {
    height: 100
  },
  isLoading:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5
  },
  button: {
    width: 200,
    height: 45,
    backgroundColor: colors.primary,
    borderRadius: 10,
    fontSize: 18,
    top: 15,
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginBottom: 15
  },
  textInput: {
    width: '100%',
    height: 40,
    fontSize: 16,
    color: colors.textColor,
  },
  input: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginTop: 40,
  },
  textButton: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.white,
  },
  messageErr: {
    color: '#FF0000',
    fontSize: 16,
    marginTop: 10
  },
  closePopup: {
    position: 'absolute',
    right: 20,
    top: 10,
    zIndex: 5
  },
})