import { useRecoilState } from "recoil";
import { countAtom } from "../Store/atoms/Count";
export default function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increament +</button>
      <button onClick={() => setCount(count - 1)}>Decreament -</button>
    </div>
  );
}
