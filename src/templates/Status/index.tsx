import React, {useEffect, useLayoutEffect} from 'react';
import {View} from 'react-native';

import StatusBar from '../../molecules/StatusBar';
import TextButton from '../../molecules/TextButton';

import StatusPage from '../../pages/Status';
import {connect} from 'react-redux';
import {getPoints, setPoints, TPoint} from '../../ducks/points';
import {queue} from '../Home';

interface IStatus {
  navigation: any;
  loadPoints: () => void;
  points: TPoint[];
  loading: boolean;
}

const Status: React.FC<IStatus> = ({
  navigation,
  loadPoints,
  points,
  loading,
}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Status',
      headerLeft: () => (
        <TextButton
          text="Voltar"
          textCustomStyles="color: #ffff;
          font-size: 15px;
          font-weight: 600;"
          onClick={() => navigation.goBack()}
        />
      ),
      headerTitleStyle: {
        color: '#bdbdf5',
        fontWeight: 'bold',
        fontSize: 15,
      },
    });
  }, [navigation]);

  useEffect(() => {
    loadPoints();
  }, [loadPoints]);

  return (
    <View>
      <StatusBar backgroundColor="#000066" barStyle="light-content" />
      <StatusPage
        data={queue.getQueue().concat(points)}
        onRefresh={() => loadPoints()}
        isRefreshing={loading}
      />
    </View>
  );
};

export default connect(setPoints, (dispatch: any) => ({
  loadPoints: () => dispatch(getPoints()),
}))(Status);
