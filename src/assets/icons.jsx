import * as React from "react";
import Svg, { Mask, Rect, G, Path } from "react-native-svg";

export const Plusicon = (props:SvgProps) => (
  <Svg
    width={17}
    height={18}
    viewBox="0 0 17 18"
    fill="none"
    {...props}
  >
    <Path
      d="M8.07095 1.92893V16.0711"
      stroke="#FF7622"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M0.999878 9H15.142"
      stroke="#FF7622"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const MenuIcon = (props:SvgProps) => (
  <Svg
    width={20}
    height={2}
    viewBox="0 0 20 2"
    fill="none"
    {...props}
  >
    <Path
      d="M19 1H1"
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);



export const SearchIcon = (props:SvgProps) => (
  <Svg
    width={41}
    height={41}
    viewBox="0 0 41 41"
    fill="none"
    {...props}
  >
    <Circle cx={20.5} cy={20.5} r={20.5} fill="#D9D9D9" fillOpacity={0.25} />
  </Svg>
);
