import { useContext } from "react";
import Count from "./Components/Count";
import { countContext } from "./Context/CountContext";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

export default App;
