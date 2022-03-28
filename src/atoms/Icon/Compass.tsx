import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width="30%" height="60%" viewBox="0 0 20 25">
    <Circle cx={12} cy={12} r={10} stroke={props.color} strokeWidth={1.3} />
    <Path
      d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"
      stroke={props.color}
      strokeWidth={1.3}
    />
  </Svg>
);

export default SvgComponent;
