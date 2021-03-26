import { Route, Switch } from "react-router";
import GlobalStyle from "./components/global-style";
import Details from "./pages/details";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/details/:id">
          <Details />
        </Route>
      </Switch>
    </div>
  );
}

export default App;