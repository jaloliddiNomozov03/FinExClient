import React from "react";
import ContentSlider from "../../components/ComponentSlider/slider";
import { Switch, Route } from "react-router-dom";
import Nomenklatura from "../../components/spravochniklar/nomenklatura/nomenklatura/nomenklatura";
import MahsulotTuri from "../../components/spravochniklar/nomenklatura/mahsulotTuri/mahsulotTuri";
import NarxTuri from "../../components/spravochniklar/nomenklatura/narxTuri/narxTuri";
import Partiya from "../../components/spravochniklar/nomenklatura/partiya/partiya";
import UlchovBirligi from "../../components/spravochniklar/nomenklatura/ulchovBirligi/ulchovBirligi";
import BankXisobRaqamlari from "../../components/spravochniklar/filial/bankXisobRaqamlari/bankXisobRaqamlari";
import Bulimlar from "../../components/spravochniklar/filial/bulimlar/bulimlar";
import Valyutalar from "../../components/spravochniklar/filial/valyutalar/valyutalar";
import Kassalar from "../../components/spravochniklar/filial/kassalar/kassalar";
import Omborlar from "../../components/spravochniklar/filial/omborlar/omborlar";
import Filial from "../../components/spravochniklar/filial/filial/filial";
import Firma from "../../components/spravochniklar/filial/firma/firma";
import ChiqimTuri from "../../components/spravochniklar/filial/chiqimTuri/chiqimTuri";
import Bulim from "../../components/spravochniklar/shaxslar/bulim/bulim";
import Foydalanuvchi from "../../components/spravochniklar/shaxslar/foydalanuvchi/foydalanuvchi";
import Kontragent from "../../components/spravochniklar/shaxslar/kontragent/kontragent";
import Xodim from "../../components/spravochniklar/shaxslar/xodim/xodim";

class ContentSpravochniklar extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/Spravochniklar">
          <ContentSlider />
        </Route>
        <Route path="/Spravochniklar/nomenklatura">
          <Nomenklatura />
        </Route>
        <Route path="/Spravochniklar/mahsulotTuri">
          <MahsulotTuri />
        </Route>
        <Route path="/Spravochniklar/narxTuri">
          <NarxTuri />
        </Route>
        <Route path="/Spravochniklar/ulchovBirligi">
          <UlchovBirligi />
        </Route>
        <Route path="/Spravochniklar/bankXisobRaqamlari">
          <BankXisobRaqamlari />
        </Route>
        <Route path="/Spravochniklar/bulimlar">
          <Bulimlar />
        </Route>
        <Route path="/Spravochniklar/valyutalar">
          <Valyutalar />
        </Route>
        <Route path="/Spravochniklar/kassalar">
          <Kassalar />
        </Route>
        <Route path="/Spravochniklar/omborlar">
          <Omborlar />
        </Route>
        <Route path="/Spravochniklar/filial">
          <Filial />
        </Route>
        <Route path="/Spravochniklar/firma">
          <Firma />
        </Route>
        <Route path="/Spravochniklar/chiqimTuri">
          <ChiqimTuri />
        </Route>
        <Route path="/Spravochniklar/partiya">
          <Partiya />
        </Route>
        <Route path="/Spravochniklar/bulim">
          <Bulim />
        </Route>
        <Route path="/Spravochniklar/foydalanuvchi">
          <Foydalanuvchi />
        </Route>
        <Route path="/Spravochniklar/kontragent">
          <Kontragent />
        </Route>
        <Route path="/Spravochniklar/xodim">
          <Xodim />
        </Route>
      </Switch>
    );
  }
}
export default ContentSpravochniklar;
