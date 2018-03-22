import React from 'react';
import { Font } from 'expo';
import { StyleSheet, View, Text, TouchableHighlight, } from 'react-native';
import fontAwesome from '../../assets/fonts/fontawesome-webfont.ttf';

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentWillMount() {
    await Font.loadAsync({
      FontAwesome: fontAwesome,
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    const { style, color, onPress } = this.props;
    let bgColor = '#E31676';
    let textColor = '#FFF';
    if (color === 'white') {
      bgColor = '#FFF';
      textColor = '#E31676';
    }
    return (
      <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
      <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
      {
        this.state.fontLoaded ? (
          <Text style={[styles.circleButtonTitle, { color: textColor }]}>
            {this.props.children}
          </Text>
        ) : null
      }
      </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 32,
    right: 32,
  },
  circleButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontFamily: 'FontAwesome',
    fontSize: 32,
    lineHeight: 32,
  },
});

export default CircleButton;
