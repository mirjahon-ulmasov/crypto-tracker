import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";

import TodoPage from "./pages/TodoPage";
import AboutPage from "./pages/AboutPage";
import UsersPage from "./pages/UsersPage";
import TodoItemPage from "./pages/TodoItemPage";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/todos" />
      </Route>
      <Route path="/todos" component={TodoPage} exact />
      <Route path="/todos/:todoId" component={TodoItemPage} />
      <Route path="/users" component={UsersPage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  );
};

export default App;
