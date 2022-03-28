import React from 'react';
import {View} from 'react-native';
import {TPoint} from '../../ducks/points';
import PackageStatusList from '../../organisms/PackageStatusList';

interface IStatus {
  data: TPoint[];
  onRefresh: () => void;
  isRefreshing: boolean;
}

const Status: React.FC<IStatus> = ({data, onRefresh, isRefreshing}) => {
  return (
    <View>
      <PackageStatusList
        data={data}
        onRefresh={onRefresh}
        isRefreshing={isRefreshing}
      />
    </View>
  );
};

export default Status;
