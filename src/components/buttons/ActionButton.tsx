import {Button} from '@rneui/themed';
import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import Colors from '../../constants/Colors';


type ButtonColors = 'white' | 'black' | 'grey' | 'pink' | 'darkGrey';

type PropsType = {
  text?: string;
  textThin?: boolean;
  textThick?: boolean;
  height?: number;
  fontSize?: number;
  iconRight?: boolean;
  icon?: JSX.Element;
  disabled?: boolean;
  loading?: boolean;
  circle?: boolean;
  absolute?: boolean;
  color?: ButtonColors;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  disabledStyle?: StyleProp<ViewStyle>;
};

export default function ActionButton({
  text,
  textThin,
  textThick,
  height,
  fontSize,
  icon,
  iconRight,
  disabled,
  loading,
  circle,
  absolute,
  color = 'white',
  onPress,
  containerStyle,
  disabledStyle,
}: PropsType) {
  const fontFamily = textThin
    ? 'NeuethingSans-Regular'
    : textThick
    ? 'NeuethingSans-Bold'
    : 'NeuethingSans-Meduim';

  const buttonColor = () => {
    switch (color) {
      case 'white':
        return Colors.dark.text100;
      case 'black':
        return Colors.dark.background1;
      case 'grey':
        return Colors.dark.background2;
      case 'pink':
        return Colors.dark.pink;
      case 'darkGrey':
        return Colors.dark.background3  
    }
  };

  const textColor = () => {
    switch (color) {
      case 'white':
      case 'pink':
        return Colors.dark.background1;
      case 'black':
      case 'grey':
        return Colors.dark.text100;
    }
  };

  const borderStyle = () => {
    switch (color) {
      case 'pink':
      case 'white':
        return {};
      case 'black':
        return {
          borderWidth: 1,
          borderColor: Colors.dark.text50,
        };
      case 'grey':
        return {
          borderWidth: 1,
          borderColor: Colors.dark.text30,
        };
    }
  };

  const buttonStyle = {
    height: height ?? 44,
    borderRadius: height ? height / 2 : 22,
    aspectRatio: circle ? 1 : undefined,
    paddingHorizontal: circle ? 0 : 16,
    paddingVertical: circle ? 0 : undefined,
    gap: 10,
    ...borderStyle(),
  };

  const buttonTextStyle = {
    fontFamily: fontFamily,
    fontSize: fontSize ?? 14,
    color: textColor(),
    fontWeight: 700
  };

  const buttonContainerStyle: StyleProp<ViewStyle> = absolute
    ? {
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
      }
    : {};

  return (
    <>
      <Button
        color={buttonColor()}
        containerStyle={[buttonContainerStyle, containerStyle]}
        buttonStyle={buttonStyle}
        disabledStyle={disabledStyle}
        title={text}
        titleStyle={buttonTextStyle}
        icon={icon}
        iconRight={iconRight}
        disabled={disabled}
        loading={loading}
        loadingProps={{color: textColor()}}
        onPress={onPress}
      />
    </>
  );
}

const styles = StyleSheet.create({});
