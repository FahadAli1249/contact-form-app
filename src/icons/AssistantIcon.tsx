import * as React from 'react';
import Svg, {G, Mask, Path} from 'react-native-svg';

const AssistantIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Mask
      id="a"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={25}>
      <Path fill="#D9D9D9" d="M0 0.0195312H24V24.0195312H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        d="M7 18.02v-12h2v12H7zm4 4v-20h2v20h-2zm-8-8v-4h2v4H3zm12 4v-12h2v12h-2zm4-4v-4h2v4h-2z"
        fill={props.color ?? "#fff"}
      />
    </G>
  </Svg>
);
export default AssistantIcon;
