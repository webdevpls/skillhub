import { View, Text, Image, ImageBackground, Button, Pressable, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import Buttons from '@/components/buttons'
import { Input } from '@/components/input'

import { Ionicons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import LoginButtons from '@/components/loginButton'
import { Link } from 'expo-router'
import SocialButton from '@/components/socialButton'



export default function Login() {

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

 


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    // Aqui você pode fazer a lógica de envio dos dados, por exemplo, uma requisição para autenticar o usuário
    
    console.log("email:", email, "senha:", password);
  };


  return (



    <ImageBackground source={require('@/assets/bg.png')} className='flex-1 bg-cover'>

    <TouchableWithoutFeedback onPress={dismissKeyboard}>

    <View className='flex-1 flex items-center justify-center'>
      
      <Text className='font-bold text-6xl color-white'>../Login</Text>
     
    <View className='pt-14 p-4 gap-5'>
      <Input>
       
        <Ionicons 
        name='mail' 
        size={20} 
        color={colors.inputfont}/>
        
        <Input.Field 
        keyboardType='email-address' 
        placeholder='Seuemail@gmai.com'  
        value={email} 
        onChangeText={setEmail}/>
     
      </Input>

      <Input>
        <Ionicons 
        name='key' 
        size={20} 
        color={colors.inputfont}/>

        <Input.Field 
        secureTextEntry={!showPassword} 
        value={password} 
        onChangeText={setPassword} 
        placeholder='Sua senha'/>

        <TouchableOpacity 
        onPress={togglePasswordVisibility}>

        <Ionicons 
        name={showPassword ? 'eye-off' : 'eye'} 
        size={20} />
      </TouchableOpacity>
      </Input>

      

      <TouchableOpacity>
      <Text className='text-[#7D7D7D] ml-64'>Esqueceu sua senha?</Text>
      </TouchableOpacity>

  
    <LoginButtons  
    title='Login'
    href='/(tabs)/home'
    onPress={handleSubmit}
    />

    
        <View className='flex items-center'>
          <Text className='text-[#7D7D7D]'> Ou faça login usando</Text>
        </View>

    <View className='gap-4 flex-row'>

      <SocialButton
      href=''
      title='Facebook'
      iconName='logo-facebook'
      iconColor='#3b5998'
      />

      <SocialButton
      href=''
      title='Google'
      iconName='logo-google'
      iconColor='#040011'
      />

    </View>

  </View>
      
    


    </View>
    </TouchableWithoutFeedback>
    </ImageBackground>
    
  )
}