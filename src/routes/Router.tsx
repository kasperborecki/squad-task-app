import { useRecoilState } from "recoil";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { routerState } from "../atoms/Router_atom";
import AuthenticationView from "../views/Authenthication_view";
import HomeView from "../views/Home_view";


const AppRouter = () => {
    const [session] = useRecoilState(routerState);
  
    return (
      <Router>
        <Routes>
          {session ? (
            <>
            <Route path="/" element={<HomeView />} />
            </>
          ) : (
            <Route path="/" element={<AuthenticationView />} />
          )}
        </Routes>
      </Router>
    );
  };
  
  export default AppRouter;
  