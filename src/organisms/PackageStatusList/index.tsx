import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import Text from '../../atoms/Text';
import {TPoint} from '../../ducks/points';
import PackageStatus from '../../molecules/PackageStatus';

import {Container, Separator} from './style';

interface IPackageStatusList {
  data: Array<TPoint>;
  onRefresh: () => void;
  isRefreshing: boolean;
}

const PackageStatusList: React.FC<IPackageStatusList> = ({
  data,
  onRefresh,
  isRefreshing,
}) => {
  const renderItem: ListRenderItem<TPoint> = ({item}) => (
    <PackageStatus time={item.time} isSync={item?.sync || false} id={item.id} />
  );
  return (
    <Container>
      {data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <Separator />}
          keyExtractor={item => item.id}
          refreshing={isRefreshing}
          onRefresh={onRefresh}
        />
      ) : (
        <Text customStyles="font-size: 16px; font-weight: 600; text-align: center;">
          Ainda não existem pacotes
        </Text>
      )}
    </Container>
  );
};

export default PackageStatusList;
