import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import Ionicons from '@react-native-vector-icons/ionicons';

// SCREENS
import HomeScreen from '../screens/HomeScreen';
import CalenderScreen from '../screens/CalenderScreen';
import FocusScreen from '../screens/FocusScreen';
import ProfileScreen from '../screens/ProfileScreen';

//  CUSTOM FAB
import FloatingActionButton from '../components/FloatingActionButton';
import { TaskProvider, useTask } from '../context/TaskContext';

const CurvedTabsContent: FC = () => {
  const Navigator: any = CurvedBottomBar.Navigator;
  const { setShowModal } = useTask();

  //  ICON RENDER FUNCTION
  const renderIcon = (routeName: string, selectedTab: string) => {
    const icons: Record<
      string,
      'home-outline' | 'calendar-outline' | 'flash-outline' | 'person-outline'
    > = {
      Home: 'home-outline',
      Calendar: 'calendar-outline',
      Focus: 'flash-outline',
      Profile: 'person-outline',
    };

    return (
      <Ionicons
        name={icons[routeName] || 'home-outline'}
        size={25}
        color={routeName === selectedTab ? '#4CAF50' : '#9E9E9E'}
      />
    );
  };

  //  TAB BAR UI
  const renderTabBar = ({
    routeName,
    selectedTab,
    navigate,
  }: {
    routeName: string;
    selectedTab: string;
    navigate: (route: string) => void;
  }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
        activeOpacity={0.7}
      >
        {renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <Navigator
      type="DOWN"
      height={65}
      circleWidth={65}
      bgColor="#f5f5f5"
      initialRouteName="Home"
      borderTopLeftRight
      style={styles.bottomBar}
      shadowStyle={styles.shadow}
      //CENTER FAB BUTTON
      renderCircle={() => (
        <Animated.View style={styles.btnCircle}>
          <FloatingActionButton onPress={() => setShowModal(true)} icon="add" />
        </Animated.View>
      )}
      tabBar={renderTabBar}
    >
      {/* LEFT SIDE */}
      <CurvedBottomBar.Screen
        name="Home"
        position="LEFT"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <CurvedBottomBar.Screen
        name="Calendar"
        position="LEFT"
        component={CalenderScreen}
        options={{ headerShown: false }}
      />

      {/* RIGHT SIDE */}
      <CurvedBottomBar.Screen
        name="Focus"
        position="RIGHT"
        component={FocusScreen}
        options={{ headerShown: false }}
      />
      <CurvedBottomBar.Screen
        name="Profile"
        position="RIGHT"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

const CurvedTabs: FC = () => {
  return (
    <TaskProvider>
      <CurvedTabsContent />
    </TaskProvider>
  );
};

const styles = StyleSheet.create({
  bottomBar: {},

  shadow: {
    shadowColor: '#ddd',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },

  btnCircle: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 30,
  },

  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CurvedTabs;
