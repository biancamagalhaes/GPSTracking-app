import React from 'react';
import {TouchableOpacity} from 'react-native';
import Text from '../../atoms/Text';

export interface IButton {
  text: string;
  onClick: () => void;
  textCustomStyles?: string;
}

const CustomText: React.FC<IButton> = ({
  text,
  onClick,
  textCustomStyles,
  ...props
}) => {
  return (
    <TouchableOpacity onPress={onClick} {...props}>
      <Text customStyles={textCustomStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
export default CustomText;
