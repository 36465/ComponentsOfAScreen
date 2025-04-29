import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.navbar}>
        <Text>navbar</Text>
      </View>

      <View style={styles.jumbotronSection}>
        <Text>image/video</Text>
      </View>

      <View style={styles.secondMainSection}>
        <Text>section 2</Text>
      </View>

      <View style={styles.footer}>
        <Text>footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },

  navbar: {
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0000',
    width: '100%',
  },

  jumbotronSection: {
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F0',
    width: '100%',
    padding: 20,
  },

  secondMainSection: {
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00F',
    width: '100%',
    padding: 20,
  },

  footer: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA73D',
    width: '100%',
  },
});

export default App;