import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<{isActive: boolean}>`
  border-color: #c0c5cd;
  border-width: 2px;
  border-radius: 5px;
  width: 70px;
  height: 60px;
  align-items: center;
  justify-content: center;
  margin: 15px 0px;
  ${({isActive}) =>
    isActive && 'border-color: #4bc540; background-color: #eef4f2;'}
`;
