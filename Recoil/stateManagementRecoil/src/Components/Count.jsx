import React, { useContext } from "react";
import Buttons from "./Buttons";
import { useRecoilValue } from "recoil";
import { countAtom, evenSelector } from "../Store/atoms/Count";

export default function Count() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      {count}
      <Buttons />
      <EvenCountRendrer />
    </div>
  );
}

function EvenCountRendrer() {
  const isEven = useRecoilValue(evenSelector);

  return <div>{isEven ? "It is even" : null}</div>;
}
