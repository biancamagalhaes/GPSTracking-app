import React from 'react';
import {Text} from '../../atoms/Text/style';
import {Container} from './style';

interface ITimeButton {
  time: string;
  isActive: boolean;
  onChange: () => void;
}

const TimeButton: React.FC<ITimeButton> = ({time, isActive, onChange}) => {
  return (
    <Container isActive={isActive} onPress={onChange}>
      <Text
        customStyles={`font-size: 20px; font-weight: 600; color:${
          isActive ? '#3e4943' : '#c0c5cd'
        }`}>{`${time}s`}</Text>
    </Container>
  );
};

export default TimeButton;
