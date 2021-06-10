import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from "./commons/app-bar";
import { StudentForm, StudentsList } from "./students";

const InternalRouter = () => {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route path="/students/list">
          <StudentsList />
        </Route>
        <Route path="/students/form">
          <StudentForm />
        </Route>
      </Switch>
    </Router>
  );
};

export default InternalRouter;
