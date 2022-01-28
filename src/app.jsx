import styles from "./app.module.css";
import Main from "./pages/main/main";
import Detail from "./pages/detail/detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path={`/detail/:id`} component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
