import * as React from "react";
import Svg, { Mask, Rect, G, Path ,  Circle,
  Line,
  Defs,
  Pattern,  ClipPath, 
  Use,} from "react-native-svg";

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


export const SearchIconAdd = (props:SvgProps) => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0_4_290)">
      <Path
        d="M12.0833 18.4167C16.1334 18.4167 19.4167 15.1334 19.4167 11.0833C19.4167 7.03325 16.1334 3.75 12.0833 3.75C8.03325 3.75 4.75 7.03325 4.75 11.0833C4.75 15.1334 8.03325 18.4167 12.0833 18.4167Z"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.25 21.25L17.2625 17.2625"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_4_290">
        <Rect width={22} height={22} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const MenuIcon = (props:SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M16 10H2"
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20 5H2"
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20 16H2"
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 21H2"
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);