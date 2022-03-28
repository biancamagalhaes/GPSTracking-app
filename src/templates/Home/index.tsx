import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import StatusBar from '../../molecules/StatusBar';
import TextButton from '../../molecules/TextButton';

import HomePage from '../../pages/Home';
import {HeaderLeft} from './style';

import {postPoint, TPoint, setPoint} from '../../ducks/points';
import uuid from 'react-native-uuid';
import Geolocation from '@react-native-community/geolocation';
import NetInfo from '@react-native-community/netinfo';

import Queue from '../../utils/queue';

interface IHome {
  navigation: any;
  sendPoint: (data: TPoint) => void;
}

const ranges = [10, 5, 3, 1];

export const queue = new Queue();

const Home: React.FC<IHome> = ({navigation, sendPoint}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerRight: () => (
        <TextButton
          text="Status"
          onClick={() => navigation.navigate('Status')}
          textCustomStyles="color: #ffff;
          font-size: 15px;
          font-weight: 600;"
        />
      ),
      headerLeft: () => <HeaderLeft>Olá, bem-vindo</HeaderLeft>,
    });
  }, [navigation]);

  const [serviceStatus, setServiceStatus] = useState(true);
  const [activeRange, setActiveRange] = useState(ranges[0]);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const removeNetInfoSubcription = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected as boolean);
    });

    return () => removeNetInfoSubcription();
  }, []);

  const pad = useCallback((val: number) => {
    return val < 10 ? '0' + val : val;
  }, []);

  const formatTime = useCallback(() => {
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    return pad(h) + ':' + pad(m);
  }, [pad]);

  const interval = setInterval(() => {
    Geolocation.getCurrentPosition(info => {
      if (isConnected) {
        while (!queue.isEmpty()) {
          const item = queue.dequeue()?.value;
          sendPoint({
            id: item.id,
            latitude: item.latitude,
            longitude: item.longitude,
            speed: item.speed,
            time: item.time,
          });
        }
        sendPoint({
          id: uuid.v4().toString(),
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
          speed: info.coords.speed,
          time: formatTime(),
        });
      } else {
        queue.enqueue({
          id: uuid.v4().toString(),
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
          speed: info.coords.speed,
          time: formatTime(),
          sync: false,
        });

        console.log('FILAA', queue.getQueue());
      }
    });
  }, activeRange * 1000);

  useEffect(() => {
    if (serviceStatus) {
      interval;
    } else {
      clearInterval(interval);
    }

    return function cleanup() {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [
    serviceStatus,
    activeRange,
    sendPoint,
    interval,
    isConnected,
    formatTime,
  ]);

  return (
    <View>
      <StatusBar backgroundColor="#000066" barStyle="light-content" />
      <HomePage
        appStatus={isConnected ? 'Online' : 'Offline'}
        serviceStatus={serviceStatus}
        onChangeServiceStatus={() => setServiceStatus(!serviceStatus)}
        activeRange={activeRange}
        onChangeComunicationRange={(range: number) => setActiveRange(range)}
        ranges={ranges}
      />
    </View>
  );
};

export default connect(setPoint, (dispatch: any) => ({
  sendPoint: (data: TPoint) => dispatch(postPoint(data)),
}))(Home);
