import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import * as SplashScreen from 'expo-splash-screen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {useFonts} from 'expo-font'
import { useCallback } from 'react';
import { FONTS } from './constants';
import AppNavigation from './navigation/AppNavigation';
import { Welcome } from './screen';

SplashScreen.preventAutoHideAsync()

export default function App() {

  const [fontsLoaded] = useFonts(FONTS)

  const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
          await SplashScreen.hideAsync()
      }
  }, [fontsLoaded])

  if (!fontsLoaded) {
      return null
  }
  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
    <AppNavigation />
    {/* <Welcome /> */}
</SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
