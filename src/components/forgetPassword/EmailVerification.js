import React, { useState } from 'react'
import { Text,TouchableOpacity, View, StyleSheet } from "react-native";
import { TextInput,Card } from 'react-native-paper';
import { axiosInstance, baseUrl } from "../../api";
const EmailVerification = ({navigation}) => {
  const [email,setEmail]  = useState("");
  const sendOtp = async ()=>{
    let params = {Email:email.toLowerCase()};
    const res = await axiosInstance.post(baseUrl + "users/sendOTP",params);
    if(res){
      navigation.navigate("VerifyOTP",{
        Email:params.Email
      });
    }
    else{
      console.log(res.data);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Reset Password
      </Text>
      <Card>
        <Text style={styles.paragraph}> Enter Valid Email to get OTP </Text>
        <View>
        <TextInput
        lable='email'
        placeholder="Email"
        onChangeText={(text) => {
          setEmail(text);
        }}
       left={<TextInput.Icon name="email" />}
        style={styles.input}
      />
        </View>
        <View>
<TouchableOpacity
        style={styles.button}
        onPress={sendOtp}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
        </View>
        
        
      </Card>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#5ead97",
    padding: 10
  },
  input: {
    margin: 12,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#5ead97'
  },
  });

export default EmailVerification;
