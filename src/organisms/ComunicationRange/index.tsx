import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import Text from '../../atoms/Text';
import TimeButton from '../../molecules/TimeButton';

import {Container, Separator} from './style';

interface IComunicationRange {
  ranges: Array<number>;
  onChangeComunicationRange: (time: number) => void;
  activeRange: number;
}

const ComunicationRange: React.FC<IComunicationRange> = ({
  ranges,
  activeRange,
  onChangeComunicationRange,
}) => {
  const renderItem: ListRenderItem<number> = ({item}) => (
    <TimeButton
      key={item}
      time={item.toString()}
      isActive={item === activeRange}
      onChange={() => onChangeComunicationRange(item)}
    />
  );
  return (
    <Container>
      <Text customStyles="font-size: 23px; color: #3e4943; font-weight: 500;">
        Intervalo de comunicação
      </Text>
      <FlatList
        data={ranges}
        renderItem={renderItem}
        horizontal={true}
        ItemSeparatorComponent={() => <Separator />}
      />
    </Container>
  );
};

export default ComunicationRange;
