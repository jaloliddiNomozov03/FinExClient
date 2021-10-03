import React from "react";
import { Route, Switch } from "react-router-dom";
import CardDocument from "./DocumentCard/cardDocument";
import CardSpravochnik from "./SpravochniklarCard/cardSpravochniklar"
import CardXisobod from "./XisobotCard/CardXisobot"
import CardRegistor from "./RegistorCard/cardRegistor";

const ContentSlider = () => {
  return (
    <>
      <Switch>
        <Route path="/Documents" >
          <CardDocument />
        </Route>
        <Route  path="/Spravochniklar" >
          <CardSpravochnik />
        </Route>
        <Route path="/Registrlar" >
          <CardRegistor/>
        </Route>
        <Route  path="/Xisobotlar" >
          <CardXisobod/>
        </Route>
      </Switch>
    </>
  )
}
export default ContentSlider;