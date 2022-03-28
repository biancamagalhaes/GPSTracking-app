import React from 'react';
import {Switch, SwitchProps} from 'react-native';

export interface IToggleButton extends SwitchProps {
  value: boolean;
  onChange: () => void;
}

const ToogleButton: React.FC<IToggleButton> = ({value, onChange}) => {
  return (
    <Switch
      trackColor={{false: '#767577', true: '#e4e3ea'}}
      thumbColor={value ? '#0abd00' : '#e4e3ea'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={onChange}
      value={value}
    />
  );
};
export default ToogleButton;
