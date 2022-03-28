import React from 'react';
import {SafeAreaView, StatusBarStyle, StatusBar, View} from 'react-native';

const CustomStatusBar = ({
  backgroundColor,
  barStyle,
}: {
  backgroundColor: string;
  barStyle: StatusBarStyle;
}) => (
  <View style={{backgroundColor}}>
    <SafeAreaView>
      <StatusBar backgroundColor={backgroundColor} barStyle={barStyle} />
    </SafeAreaView>
  </View>
);

export default CustomStatusBar;
