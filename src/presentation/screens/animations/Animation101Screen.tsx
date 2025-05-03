import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../config/theme/theme.tsx';

export const Animation101Screen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.purpleBox]} />
      <Pressable onPress={() => console.log('fadeIn')} style={{marginTop:10}}>
        <Text>FadeIn</Text>
      </Pressable>

      <Pressable onPress={() => console.log('fadeOut')} style={{marginTop:10}}>
        <Text>FadeOut</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  },
});
