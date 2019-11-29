import React from "react";
import { hot } from "react-hot-loader/root";
import { HashRouter, Switch, Route /* ,Redirect  */ } from "react-router-dom";
import Header from "./Header";
import Pop from "./Pop";
import Battle from "./Battle";
import Footer from "./Footer";
import Battleresult from "./Battleresult";

class App extends React.Component {
  render() {
    return (
      <>
        <HashRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Pop} />
            <Route exact path="/battle" component={Battle} />
            <Route exact path="/battle/result" component={Battleresult} />
          </Switch>
          <Footer />
        </HashRouter>
      </>
    );
  }
}
/* export default App; */
export default hot(App);
