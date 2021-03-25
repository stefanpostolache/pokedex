import { Route, Switch } from "react-router";
import GlobalStyle from "./components/global-style";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;