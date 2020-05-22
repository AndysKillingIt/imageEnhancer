import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  let [state, setState] = useState({
    isFocused: false
  });

  const onFocusChange = () => {
    setState({
      isFocused: true
    });

  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={(state.isFocused) ? styles.buttonHovered : styles.button}>
          <Text
            onFocus = {onFocusChange}
            style={(state.isFocused) ? styles.buttonTextHovered : styles.buttonText}>
              UPLOAD IMAGE
          </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#404040',
    padding: 20,
    borderRadius: 6
  },
  buttonHovered: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    letterSpacing: 3,
    shadowRadius: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.5
  },
  butonText: {
    color: '#ffffff',
    fontWeight: '300',
  },
  buttonTextHovered: {
    color: '#404040',
    fontWeight: '800'
  }
});
