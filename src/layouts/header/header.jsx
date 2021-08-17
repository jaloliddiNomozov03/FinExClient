import React from "react";
import { Route, Switch } from "react-router-dom";
import HeaderOfSpravochniklar from "./headerOfSpravochniklar";
import HeaderOfDocuments from "./headerOfDocuments";
import HeaderOfRegistor from "./headerOfRegistr";
import HeaderOfXisobotlar from "./headerXisobotlar";
import HeaderOfSettings from "./headerOfSettings";
const HeaderBase = () => {
  return (
    <Switch>
      <Route path="/Documents">
        <HeaderOfDocuments />
      </Route>
      <Route path="/Spravochniklar">
        <HeaderOfSpravochniklar />
      </Route>
      <Route path="/Registrlar">
        <HeaderOfRegistor />
      </Route>
      <Route path="/Xisobotlar">
        <HeaderOfXisobotlar />
      </Route>
      <Route path="/Settings">
        <HeaderOfSettings />
      </Route>
    </Switch>
  );
};
export default HeaderBase;
