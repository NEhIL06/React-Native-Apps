import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'

import BouncyCheckbox from 'react-native-bouncy-checkbox'
import {Formik} from 'formik'
const PasswordSchema = Yup.object().shape({
    passwordLength: Yup.number()
    .min(4,'should be min of 4 characters')
    .max(60,'should be max of 16 characters')
    .required('Length is rquired')
})

 
export default function App() {
  
  const [Password,setPasword] =useState('')
  const [ispasswordGenerted,setispasswordGenerted] = useState(false)
  const [Lowercase,setLowerCase] = useState(true)
  const [Uppercase,setUpperCase] = useState(false)
  const [Numbers,setNumber] = useState(false)
  const [Symbols,setSymbols] = useState(false)
  const generatePasswordString=(passwordLength:number) =>{
      let characterList = '';
      const upperCaseChars='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lowerCaseChars='abcdefghijklmnopqrstuvwxyz';
      const digitChars='0123456789';
      const specialChars='!@#$%^&*()_+?~`';
      if (Uppercase){
        characterList+=upperCaseChars
      }
      if (Lowercase){
        characterList+=lowerCaseChars
      }
      if (Numbers){
        characterList+=digitChars
      }
      if (Symbols){
        characterList+=specialChars
      }
     const passwordResult = createPassword(characterList,passwordLength) 
     setPasword(passwordResult)
     setispasswordGenerted(true)
  }
  const createPassword =(characters:string,passwordLength:number)=>{
    let result = ''
    for(let i = 0;i<passwordLength;i++){
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }
    return result
  }
// reset password
  const resetPasswordstate=()=>{
    setPasword('')
    setispasswordGenerted(false)
    setLowerCase(true)
    setUpperCase(false)
    setNumber(false)
    setSymbols(false)
  }
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
        <SafeAreaView style={styles.formContainer}>
          <View>

            <Text style={styles.title}>
                Password generator
            </Text>
            <Formik
       initialValues={{ passwordLength:'' }}
       validationSchema={PasswordSchema}
       onSubmit={values => {
        console.log(values);
        generatePasswordString(+values.passwordLength)
       } }
     >
       {({
         values,
         errors,
         touched,
         isValid,
         handleChange,
         handleSubmit,
         handleReset
         /* and other goodies */
       }) => (
         <>
         <View style={styles.inputWrapper}>
            <View style={styles.inputColumn}>
             <Text style={styles.heading}>Password Length</Text>
             {touched.passwordLength && errors.passwordLength && (
              <Text style={styles.errorText}>
                {errors.passwordLength}
              </Text>
             )}
            </View> 
            <TextInput
             style={styles.inputStyle}
             value={values.passwordLength}
             onChangeText={handleChange('passwordLength')}
             placeholder='Ex .8'
             keyboardType='numeric'
             />
         </View> 
         <View style={styles.inputWrapper}>
            <Text style={styles.heading}>Include Lowercase</Text>
            <View>
            <BouncyCheckbox
            isChecked={Lowercase}
            onPress={()=>setLowerCase(!Lowercase)}
            fillColor="#29AB87"
            />
            </View>
         </View>
         <View style={styles.inputWrapper}>
            <Text style={styles.heading}>Include UpperCase</Text>
            <View>
            <BouncyCheckbox
            
            isChecked={Uppercase}
            onPress={()=>setUpperCase(!Uppercase)}
            fillColor="#29AB87"
            />
            </View>
         </View>
         <View style={styles.inputWrapper}>  
            <Text style={styles.heading}>Include Numbers</Text>
            <View>
            <BouncyCheckbox
            isChecked={Numbers}
            onPress={()=>setNumber(!Numbers)}
            fillColor="#29AB87"
            />
            </View>
         </View>
         <View style={styles.inputWrapper}>
         <Text style={styles.heading}>Include Symbols</Text>
            
            <View>
            <BouncyCheckbox
            isChecked={Symbols}
            onPress={()=>setSymbols(!Symbols)}
            fillColor="#29AB87"
            />
            </View>
         </View>
         <View style={styles.formAction}> 
            <TouchableOpacity 
             disabled={!isValid}
             style={styles.primaryBtn}
             onPress={()=>{handleSubmit();}}
            ><Text>Generte password</Text></TouchableOpacity> 
            <TouchableOpacity
              style={styles.secBtn}
              onPress={()=>{
                handleReset();
                resetPasswordstate();
              }}
            ><Text style={styles.secondaryBtnTxt}>Reset</Text></TouchableOpacity>
         </View>  
         </>
       )}
            </Formik>
          </View>
          {ispasswordGenerted ? (
            <View style={[styles.card,styles.cardElevated]}>
              <Text style={styles.subTitle}>Result:</Text>
              <Text style={styles.description}>Long Press to copy</Text>
              <Text selectable style={styles.generatedPass}>{Password}</Text>
            </View>
          ): null}
        </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formAction: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: 'red',
    textShadowColor:'white',
    
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPass: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  },
})