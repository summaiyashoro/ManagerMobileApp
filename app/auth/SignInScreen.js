import React, { useState, useEffect } from 'react';
import {
   View, 
   StyleSheet, 
   KeyboardAvoidingView, 
   TouchableWithoutFeedback, 
   Keyboard 
  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Formik } from 'formik';
import * as yup from 'yup';

import MyAppTextInput from '../components/MyAppTextInput';
import ForgetPasswordButton from './ForgetPasswordButton';
import LoginButton from '../buttons/LoginButton';
import ErrorMessage from '../components/ErrorMessage';
import AppText from "../components/AppText";
import colors from '../config/colors';

import axios from "../util/axios";
import endpoints from "../consts/config";
import {connect} from "react-redux";
import { store_user_data} from "../store/action/UserDataActionCreator";
import userDataReducer from "../store/reducer/UserDataReducer";

const validationSchema = yup.object({
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(6).max(20).label('Password')
})

const SignInScreen = ({ navigation , ...props }) => {
  const [passwordIcon, setPasswordIcon] = useState("eye-off");


  useEffect(()=>{
    //  console.log("===> " , props.userData.age);
    console.log("===> " , props.userData);
  },[]);
 
 function handleSubmit  (values){
    if(values.email.length > 0 && values.password.length > 0 ){
      // navigation.replace('logedIn')

      const param = { 
        param:{
          Email:values.email,
          Password:values.password,
        }
      }
      // console.log(param);
      axios
      .post(endpoints.LOGIN ,param)
      .then(res =>{
         console.log(res.data);
         props.store_user_data(res.data);
        //  console.log(props.userData.Data.FullName);
        // console.log(props.userData);
         navigation.replace('logedIn');
      })
      .catch(err => console.log(err));
    }
  }
  

  return (
    <LinearGradient
      colors={['#02072F', '#091361']}
      start={{ x: 0.5, y: 0.9 }}
      end={{ x: 1, y: 0.2 }}
      style={{ flex: 1 }}
    >

      <KeyboardAvoidingView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.header}>
            <AppText style={styles.headerText}>Moving Trail Solutions</AppText>
            <AppText style={{fontSize:14, top:25,color:colors.white}} >ADMIN LOGIN</AppText>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.footer}>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {(props) => (
              <>
                <MyAppTextInput
                  placeholder="Email"
                  iconLeft="mail"
                  leftPlaceholderPadding={30}
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  onChangeText={props.handleChange("email")}
                  onBlur={() => props.setFieldTouched('email')}
                  value={props.values.email}
                />
                <ErrorMessage error={props.errors.email} touch={props.touched.email} />

                <MyAppTextInput
                  placeholder="Password"
                  iconLeft="lock-closed"
                  leftPlaceholderPadding={30}
                  onPress={() => { passwordIcon === "eye-off" ? setPasswordIcon("eye") : setPasswordIcon("eye-off") }}
                  iconRight={passwordIcon}
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="password"
                  secureTextEntry={passwordIcon === "eye-off" ? true : false}
                  onChangeText={props.handleChange("password")}
                  onBlur={() => props.setFieldTouched('password')}
                  value={props.values.password}
                />
                <ErrorMessage error={props.errors.password} touch={props.touched.password} />

                <LoginButton title="Login" />
                
                <ForgetPasswordButton
                  title="Forgot Password"
                  onPress={() => navigation.navigate('ForgotPassword')}
                />
              </>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  footer: {
    flex: 2,
    backgroundColor: colors.white,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginHorizontal:10
  },
  headerText: {
    color: colors.white,
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
  },
})

const mapStateToProps = (state) =>{
  return{
    userData: state.UserDataReducer,
    // userData: state.UserDataReducer.age
  }
}

const mapDispatchToProps =  (dispatch) =>{
  return{
    store_user_data: (userData) => dispatch({
      type: 'STORE_USER_DATA',
      payload:userData
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);