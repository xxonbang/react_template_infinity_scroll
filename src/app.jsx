import "./app.css";
import Main from "./pages/main/main";
import Detail from "./pages/detail/detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App( http ) {
  return (
    <div className="app">
      <Router>
        <Switch>
          {/* <Route exact path='/' render={ () => <Main http={ http }/> }/> */}
          {/* <Route exact path={`/detail/:id`} render={ () => <Detail http={ http } />} /> */}
          <Route exact path='/' component={Main} />
          <Route exact path={`/detail/:id`} component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
