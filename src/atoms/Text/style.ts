import styled from 'styled-components/native';
import {IText} from './index';

export const Text = styled.Text`
  ${({customStyles}: IText) => customStyles};
`;
