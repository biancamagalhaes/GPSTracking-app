import React from 'react';
import {View} from 'react-native';
import {Text} from '../../atoms/Text/style';
import {Container} from './style';

export interface IPackageStatus {
  time: string;
  id: string;
  isSync: boolean;
}

const PackageStatus: React.FC<IPackageStatus> = ({time, id, isSync}) => {
  return (
    <Container>
      <View>
        <Text
          customStyles={
            'font-size: 20px; font-weight: 600; color: #47514e; margin-bottom: 5px;'
          }>{`Pacote ID: ${id.substring(0, 5)}`}</Text>
        <Text
          customStyles={'font-size: 16px; font-weight: 600; color: #47514e'}>
          {isSync ? 'Sincronizado' : 'Pendente Sincronizar'}
        </Text>
      </View>
      <Text customStyles={'font-size: 18px; font-weight: 600; color: #959ba3'}>
        {time}
      </Text>
    </Container>
  );
};

export default PackageStatus;
