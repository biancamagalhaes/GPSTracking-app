import React from 'react';
import {TextProps} from 'react-native';
import {Text} from './style';

export interface IText extends TextProps {
  customStyles?: string;
  children: string;
}

const CustomText: React.FC<IText> = ({customStyles, children}) => {
  return <Text customStyles={customStyles}>{children}</Text>;
};
export default CustomText;
