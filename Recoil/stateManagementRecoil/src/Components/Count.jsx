import React, { useContext } from "react";
import Buttons from "./Buttons";
import { useRecoilValue } from "recoil";
import { countAtom } from "../Store/atoms/Count";

export default function Count() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      {count}
      <Buttons />
    </div>
  );
}
