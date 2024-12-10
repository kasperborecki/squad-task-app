import { RecoilRoot } from "recoil";
import AppRouter from "./routes/Router";

const App = () => {
  return (
    <RecoilRoot>
      <AppRouter />
    </RecoilRoot>
  );
};

export default App;
