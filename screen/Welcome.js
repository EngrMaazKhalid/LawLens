import { View, Text, StatusBar, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, Images, images, FONTS, SIZES } from '../constants'
import PageContainer from '../components/PageContainer'
import Button from '../components/Button'
// import { Button } from 'react-native-paper';
const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
    <StatusBar style="light" />
    <PageContainer>
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Image
                source={images.logo}
                style={{
                    height: 120,
                    width: 120,
                    marginBottom: 22,
                }}
            />

            <Text
                style={{
                  fontSize: 22,
                    fontWeight:'700',
                    marginVertical: 8,
                }}
            >
                Welcome to LawLens
            </Text>

            <Text
                style={{
                    fontSize:20,
                    fontWeight:'400',
                    color: COLORS.text,
                    marginBottom: 36,
                }}
            >
              An AI Lawyer Chatbot App
            </Text>

            <Button
                title="Log in"
                filled
                onPress={() => navigation.navigate('Login')}
                style={{
                    width: SIZES.width - 44,
                    marginBottom: SIZES.padding,
                }}
            />

            <Button
                title="Register"
                onPress={() => navigation.navigate('Register')}
                
                style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    width: SIZES.width - 44,
                    marginBottom: SIZES.padding,
                    backgroundColor: 'transparent',
                    borderColor: COLORS.primary,
                }}
            />
        </View>
    </PageContainer>
</SafeAreaView>
  )
}

export default Welcome