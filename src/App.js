import logo from "./logo.svg";
import "./App.css";
import {createBrowserHistory} from "history";
import {Router, Switch} from "react-router";
import {HomeTemplate} from "./template/HomeTempalte/HomeTemplate";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact Component={Home} />
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
      </Switch>
    </Router>
  );
}

export default App;
