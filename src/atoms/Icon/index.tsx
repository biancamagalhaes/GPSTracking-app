import React from 'react';
import Compass from './Compass';

export interface IICon {
  icon: 'compass';
  color: string;
}

const Icon: React.FC<IICon> = ({icon, color}) => {
  switch (icon) {
    case 'compass':
      return <Compass color={color} />;
  }
};

export default Icon;
