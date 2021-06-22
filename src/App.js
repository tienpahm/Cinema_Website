import logo from "./logo.svg";
import "./App.css";
import {createBrowserHistory} from "history";
import {Router, Switch} from "react-router";
import {HomeTemplate} from "./template/HomeTempalte/HomeTemplate";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Detail from "./pages/Detail/Detail";
import CinemaDetail from "./pages/CinemaDetail/CinemaDetail";
import CinemaShows from "./pages/CinemaShows/CinemaShows";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact Component={Home} />
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />
        <HomeTemplate path="/cinemashows/:id" exact Component={CinemaShows} />
        <HomeTemplate
          path="/detail/cinemaDetail/:id"
          exaxt
          Component={CinemaDetail}
        />
      </Switch>
    </Router>
  );
}

export default App;
