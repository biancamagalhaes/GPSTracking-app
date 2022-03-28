import React from 'react';
import {View} from 'react-native';
import AppSatus from '../../molecules/AppStatus';
import ServiceStatus from '../../molecules/ServiceStatus';
import ComunicationRange from '../../organisms/ComunicationRange';

interface IHome {
  appStatus: 'Online' | 'Offline';
  serviceStatus: boolean;
  onChangeServiceStatus: () => void;
  ranges: Array<number>;
  activeRange: number;
  onChangeComunicationRange: (range: number) => void;
}
const Home: React.FC<IHome> = ({
  appStatus,
  serviceStatus,
  onChangeServiceStatus,
  ranges,
  activeRange,
  onChangeComunicationRange,
}) => {
  return (
    <View>
      <AppSatus status={appStatus} />
      <ServiceStatus
        onChangeServiceStatus={onChangeServiceStatus}
        status={serviceStatus}
      />
      <ComunicationRange
        activeRange={activeRange}
        onChangeComunicationRange={onChangeComunicationRange}
        ranges={ranges}
      />
    </View>
  );
};

export default Home;
