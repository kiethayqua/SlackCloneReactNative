import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {ChannelList} from './src/components/ChannelList';

// where put channel component which contain MessageList and MessageInput component
const ChannelScreen = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <Text>Channel Screen</Text>
    </SafeAreaView>
  );
};

// put channel list based navigation
const ChannelListDrawer = (props) => {
  return (
    <SafeAreaView>
      <ChannelList />
    </SafeAreaView>
  );
};

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Drawer.Navigator
          drawerContent={ChannelListDrawer}
          drawerStyle={styles.drawerNavigator}>
          <Drawer.Screen name="ChannelScreen" component={ChannelScreen} />
        </Drawer.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  channelScreenSaveAreaView: {
    backgroundColor: 'white',
  },
  channelScreenContainer: {flexDirection: 'column', height: '100%'},
  container: {
    flex: 1,
  },
  drawerNavigator: {
    backgroundColor: '#3F0E40',
    width: 350,
  },
  chatContainer: {
    backgroundColor: 'white',
    flexGrow: 1,
    flexShrink: 1,
  },
});
