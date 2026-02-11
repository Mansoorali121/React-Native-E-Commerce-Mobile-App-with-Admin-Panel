import * as React from "react";
import Svg, { Mask, Rect, G, Path ,  Circle,
  Line,
  Defs,
  Pattern,  ClipPath, 
  Use,Image} from "react-native-svg";

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

export const OrderIconn = (props:SvgProps) => (
  <Svg
    width={22}
    height={25}
    viewBox="0 0 22 25"
    fill="one"
    {...props}
  >
    <Path
      d="M17.1875 7.8125V6.25C17.1875 2.80371 14.3837 0 10.9375 0C7.49121 0 4.6875 2.80371 4.6875 6.25V7.8125H0V21.0938C0 23.2511 1.74888 25 3.90625 25H17.9688C20.1261 25 21.875 23.2511 21.875 21.0938V7.8125H17.1875ZM7.8125 6.25C7.8125 4.52686 9.21436 3.125 10.9375 3.125C12.6606 3.125 14.0625 4.52686 14.0625 6.25V7.8125H7.8125V6.25ZM15.625 12.1094C14.9778 12.1094 14.4531 11.5847 14.4531 10.9375C14.4531 10.2903 14.9778 9.76562 15.625 9.76562C16.2722 9.76562 16.7969 10.2903 16.7969 10.9375C16.7969 11.5847 16.2722 12.1094 15.625 12.1094ZM6.25 12.1094C5.60278 12.1094 5.07812 11.5847 5.07812 10.9375C5.07812 10.2903 5.60278 9.76562 6.25 9.76562C6.89722 9.76562 7.42188 10.2903 7.42188 10.9375C7.42188 11.5847 6.89722 12.1094 6.25 12.1094Z"
      fill="black"
      fillOpacity={0.7}
    />
  </Svg>
);

export const BackArrow = (props:SvgProps) => (
  <Svg
    width={6}
    height={10}
    viewBox="0 0 6 10"
    fill="none"
    {...props}
  >
    <Path
      d="M5 9L1 5L5 1"
      stroke="#181C2E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);