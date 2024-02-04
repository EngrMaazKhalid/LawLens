import { View, Text, StatusBar, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, Images, images } from '../constants'
import PageContainer from '../components/PageContainer'

const Welcome = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white}}>
    <StatusBar style='light' />
      <PageContainer>
        <View style={{
          flex:1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
      <Image
      src={images.logo}
      style={{
        height:120,
        width: 120,
        marginBottom: 22
      }}

      />
      <Text
                        style={{
                            ...FONTS.h4,
                            color: COLORS.text,
                            marginVertical: 8,
                        }}
                    >
                        Welcome to ChatGPT
                    </Text>

                    <Text
                        style={{
                            ...FONTS.body3,
                            color: COLORS.text,
                            marginBottom: 36,
                        }}
                    >
                        Pick any options to continue
                    </Text>
        </View>
      </PageContainer>
    

    </SafeAreaView>
  )
}

export default Welcome