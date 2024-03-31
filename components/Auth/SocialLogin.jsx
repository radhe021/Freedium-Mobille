
import React from 'react'
import { ImageBackground , StyleSheet, View,Dimensions } from 'react-native'
import { Button ,Text, Icon, Input } from '@ui-kitten/components';


import { Image } from 'expo-image';

import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import CommonStylea from '../Common/CommonStyles'
import CommonLayout from '../Common/CommonLayout';
import LoginBG from '../../assets/loginBG.jpeg'
const {width,height} = Dimensions.get('window')


const GoogleIcon = (props) => (
  <Icon name='google' {...props} />
);
const FacebookIcon = (props) => (
  <Icon name='facebook' {...props} />
);


export default function Login() {
  const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [disabled, setDisabled] = React.useState(false);

  return (
    <CommonLayout>
       <View style={styles.loginContainer}>
       <ImageBackground
            source={LoginBG} 
            resizeMode="cover" 
       />
       <Image
        style={styles.image}
        source="https://picsum.photos/seed/696/3000/2000"
        placeholder={blurhash}
        contentFit="cover"
       
      />
      <Text category='h1' style={{marginBottom:20}}>Continue with</Text>
        <Button
          title='Login'
          size='large'
          appearance='outline'
          status='info'
          onPress={() => {}}
          disabled={disabled}
          style={{width:"88%",...CommonStylea.inputWithVerticleMargin}}
          accessoryLeft={GoogleIcon}
        >
          Continue with Google
        </Button>

        <Button 
         title='Login with Google'
         size='large'
         appearance='outline'
         status='info'
         onPress={() => {}}
         disabled={disabled}
         style={{width:"88%",...CommonStylea.inputWithVerticleMargin}}
        accessoryLeft={FacebookIcon}>Login with Facebook</Button>
    </View>
    </CommonLayout>
  )
}

const styles = StyleSheet.create({
  loginContainer:{
    flex:1,
    flexBasis:1,
    justifyContent:"center",
    alignItems:"center",
    marginTop:height/3,
    marginHorizontal:25,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center', // Align content vertically (optional)
    alignItems: 'center', // Align content horizontally (optional)
},
})
