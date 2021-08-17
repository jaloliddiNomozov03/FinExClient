import React from "react";
import { Switch, Route } from "react-router-dom";
import ContentSlider from "../../components/ComponentSlider/slider";
import Akt from "../../components/Xisobotlar/AktSverka/aktSeverka";
import Bank from "../../components/Xisobotlar/Bank/bank";
import Daxod from "../../components/Xisobotlar/Daxodi/daxod";
import Kassa from "../../components/Xisobotlar/Kassa/kassa";
import Obrat from "../../components/Xisobotlar/KireditOborot/obrat";
import KreditID from "../../components/Xisobotlar/KriditTori/kreditID";
import Tavar from "../../components/Xisobotlar/Tavar/tavar";
import TavarB from "../../components/Xisobotlar/TavarBoyichaXisobod/tavarB";
import Xarajat from "../../components/Xisobotlar/Xarajatlar/xarajat";

class ContentXisobotlar extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/Xisobotlar">
          <ContentSlider />
        </Route>
        <Route path="/Xisobotlar/AktSverka">
          <Akt />
        </Route>
        <Route path="/Xisobotlar/Bank">
          <Bank />
        </Route>
        <Route path="/Xisobotlar/Daxodi">
          <Daxod />
        </Route>
        <Route path="/Xisobotlar/Kassa">
          <Kassa />
        </Route>
        <Route path="/Xisobotlar/KireditOborot">
          <Obrat />
        </Route>
        <Route path="/Xisobotlar/KriditTori">
          <KreditID />
        </Route>
        <Route path="/Xisobotlar/Servis">salom</Route>
        <Route path="/Xisobotlar/Tavar">
          <Tavar />
        </Route>
        <Route path="/Xisobotlar/TavarBoyichaXisobod">
          <TavarB />
        </Route>
        <Route path="/Xisobotlar/Xarajatlar">
          <Xarajat />
        </Route>
      </Switch>
    );
  }
}
export default ContentXisobotlar;
