import React from "react";
import ContentSlider from "../../components/ComponentSlider/slider";
import { Switch, Route } from "react-router-dom";
import Bank from "../../components/Registrlar/Bank/bank";
import Bonus from "../../components/Registrlar/Bonus/bonus";
import Data from "../../components/Registrlar/DataPogasheniya/dataP";
import Daxodi from "../../components/Registrlar/Daxodi/daxodi";
import Kassa from "../../components/Registrlar/Kassa/kassa";
import Kurs from "../../components/Registrlar/KursValyuta/kursValyuta";
import Prodaj from "../../components/Registrlar/Prodaji/prodaj";
import Raschet from "../../components/Registrlar/RaschetCRabochi/raschet";
import Rasxod from "../../components/Registrlar/Rasxodi/rasxod";
import Sena from "../../components/Registrlar/SenaNamenKlatura/sena";
import Tavar from "../../components/Registrlar/TavarNaSklad/tavar";
import Vzoin from "../../components/Registrlar/Vzoimorascheti/vzoim";
import ChiqimTuri from "../../components/spravochniklar/filial/chiqimTuri/chiqimTuri";

class ContentRegistorlar extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/Registrlar">
          <ContentSlider />
        </Route>
        <Route path="/Registrlar/bank">
          <Bank />
        </Route>
        <Route path="/Registrlar/Bonus">
          <Bonus />
        </Route>
        <Route path="/Registrlar/DataPogasheniya">
          <Data />
        </Route>
        <Route path="/Registrlar/Daxodi">
          <Daxodi />
        </Route>
        <Route path="/Registrlar/Kassa">
          <Kassa />
        </Route>
        <Route path="/Registrlar/KursValyuta">
          <Kurs />
        </Route>
        <Route path="/Registrlar/Prodaji">
          <Prodaj />
        </Route>
        <Route path="/Registrlar/RaschetCRabochi">
          <Raschet />
        </Route>
        <Route path="/Registrlar/Rasxodi">
          <Rasxod />
        </Route>
        <Route path="/Registrlar/SenaNamenKlatura">
          <Sena />
        </Route>
        <Route path="/Registrlar/TavarNaSklad">
          <Tavar />
        </Route>
        <Route path="/Registrlar/Test">
          <ChiqimTuri />
        </Route>
        <Route path="/Registrlar/Vzoimorascheti">
          <Vzoin />
        </Route>
      </Switch>
    );
  }
}
export default ContentRegistorlar;
