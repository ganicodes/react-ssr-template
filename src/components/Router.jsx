import { Route, Switch } from "react-router-dom";
import { About } from "./About";
import { Home } from "./Home";

export function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  );
}
