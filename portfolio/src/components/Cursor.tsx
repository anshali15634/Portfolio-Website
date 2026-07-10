"use client";

import { CustomCursor } from "cursor-style";

export default function Cursor() {
  return (
    <CustomCursor
      type="two"
      sizeDot={1}
      sizeOutline={5}
      delay={40}
      bgColorDot="#ED254E"
      bgColorOutline="#ED254E"
      useMixBlendDifference={false}
      overrideOpacity={0.95}
    />
  );
}
