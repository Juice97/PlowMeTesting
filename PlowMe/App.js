import { StatusBar } from 'expo-status-bar';
//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Appbar, BottomNavigation, Provider} from 'react-native-paper'

const OnCall = () => <Text>On Call Tab</Text>


const MakeRequest = () => <Text>Make Request Tab</Text>

const Messages = () => <Text>Messages Tab</Text>

const Account = () => <Text>Account Tab</Text>


export default function App()
{
  const [PageState, SetPageState] = React.useState(0);
  const [Routes] = React.useState([
    { key: 'OnCallTab', title: 'On Call', icon: 'call' },
    { key: 'MakeRequestTab', title: 'Make Request', icon: 'phone_in_talk' },
    { key: 'MessagesTab', title: 'Messages', icon: 'mail' },
    { key: 'AccountTab', title: 'Account', icon: 'emoji_emotions' }
  ]);

  const SceneRender = BottomNavigation.SceneMap({
    OnCallTab: OnCall,
    MakeRequestTab: MakeRequest,
    MessagesTab: Messages,
    AccountTab: Account
  });

  return (
    <Provider theme = {MainTheme}>
      <Appbar.Header>
        <Appbar.Content title = "PlowMe" subtitle = "Select Tab" />
      </Appbar.Header>
      <BottomNavigation navigationState = {{PageState, Routes}} onIndexChange = {SetPageState} renderScene = {SceneRender} />
    </Provider>
  );
}

const MainTheme = 
{
  dark: false,
  mode: 'exact',
  roundness: 10,
  colors:
  {
    primary: '#176be8',
    accent: '#2e78e6',
    background: '#0b63e6',
    surface: '#528ce3',
    text: '#ffffff',
    disabled: '#8aaee3',
    placeholder: '#4e88de',
    backdrop: '#4e7fc7'
  },
  fonts:
  {
    thin:
    {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal'
    }
  },
  animation:
  {
    scale: 1.0
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
