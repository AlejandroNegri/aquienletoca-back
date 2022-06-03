import "./App.css";
import Main from "./Main/Main";
import TopMenu from "./TopMenu/TopMenu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NuevoPartido from "./Partido/NuevoPartido";

function App() {
  return (
    <Router>
      <div className="App">
        <TopMenu></TopMenu>
      </div>

      <Switch>
        <Route path="/nuevo_partido">
          <NuevoPartido />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
