import React from 'react';
import Text from '../../atoms/Text';
import ToggleButton from '../../atoms/ToggleButton';

import {Container, TextContainer} from './style';

interface IServiceStatus {
  status: boolean;
  onChangeServiceStatus: () => void;
}

const ServiceStatus: React.FC<IServiceStatus> = ({
  status,
  onChangeServiceStatus,
}) => {
  return (
    <Container>
      <TextContainer>
        <Text customStyles="font-size: 20px; color: #3e4943; font-weight: 500;">
          Status do Serviço
        </Text>
        <Text customStyles="font-size: 16px; color: #3e4943; font-weight: 500;">
          {`Serviço ${status ? 'ativo' : 'inativo'}`}
        </Text>
      </TextContainer>
      <ToggleButton onChange={onChangeServiceStatus} value={status} />
    </Container>
  );
};

export default ServiceStatus;
