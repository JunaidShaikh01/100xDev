import Bar from "./components/Bar";
import { RecoilRoot } from "recoil";
export default function App() {
  return (
    <div className="w-screen h-screen bg-slate-300 flex items-center justify-center">
      <RecoilRoot>
        <Bar />
      </RecoilRoot>
    </div>
  );
}
