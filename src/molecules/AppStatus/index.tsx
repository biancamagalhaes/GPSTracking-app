import React from 'react';
import Text from '../../atoms/Text';
import Icon from '../../atoms/Icon';

import {Container, TextContainer} from './style';

interface IAppStatus {
  status: 'Online' | 'Offline';
}

const AppStatus: React.FC<IAppStatus> = ({status}) => (
  <Container>
    <Icon icon={'compass'} color="#000066" />
    <TextContainer>
      <Text customStyles="font-size: 23px; font-weight: 700; color: #3e4943">
        My GPS-Tracking
      </Text>
      <Text
        customStyles={`font-size: 16px; color: ${
          status === 'Online' ? '#0ebc01' : '#3e4943'
        }; font-style: italic; font-weight: 500;`}>
        {status}
      </Text>
    </TextContainer>
  </Container>
);

export default AppStatus;
