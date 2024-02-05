import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, images } from '../constants'
import PageContainer from '../components/PageContainer'

const Register = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.white}}>
    <PageContainer>
      <View style={{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        marginHorizontal: 22
      }}>
      <Image 
        source={images.logo}
        style={{
          height: 120,
          width: 120,
          marginBottom: 22
        }}
      />
      <Text style={{
        fontSize:18,
        color: COLORS.black,
        marginVertical: 8
      }}>Welcome Back!</Text>
      </View>
    </PageContainer>


    </SafeAreaView>
  )
}

export default Register