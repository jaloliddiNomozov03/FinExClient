import React from "react";
import ContentSlider from "../../components/ComponentSlider/slider";
import { Switch, Route } from "react-router-dom";
import VseDoc from "../../components/document/Document/VseDocument/vseDocument";
import Ochistit from "../../components/document/Document/OchistitDP/ochistit";
import RasxodBank from "../../components/document/bank/RasxodBank/rasxodBank";
import PrixodBank from "../../components/document/bank/PrixodBank/prixodBank";
import Raschet from "../../components/document/harajatlar/raschet/raschet";
import Rasxod from "../../components/document/harajatlar/rasxod/rasxod";
import Proiz from "../../components/document/ishlabChiqarish/IshlabChiqarish/proizvadstve";
import Tushum from "../../components/document/kassa/KassagaNaqtPulTyshumi/NaqtPulTushumi";
import Chiqim from "../../components/document/kassa/KassagaNaxtPulChiqimi/NaxtPulChiqishi";
import Inter from "../../components/document/ombor/Intervazatsiya/intervazatsiya";
import Pastupleniya from "../../components/document/ombor/PastupleniyaTavar/pastupleniyaTavar";
import Peremisheniya from "../../components/document/ombor/PeremesheniyaTavar/peremisheniya";
import Spisaniya from "../../components/document/ombor/SpisaniyaTavar/spisaniya";
import MaxsulotKilent from "../../components/document/qaytarishBolimi/Maxsulotlarnikilentdanqaytarish/maxsulotKilent";
import YukberuvchiQaytarish from "../../components/document/qaytarishBolimi/Maxsulotlarniyukberuvchigaqaytarisj/yukberuvchiQaytarishi";
import BankQoldiqlari from "../../components/document/qoldiqlarKirimi/bankQoldiqlariniKiritish/bankQodiqlari";
import KassaQoldiq from "../../components/document/qoldiqlarKirimi/KassaQoldiqlariniKiritish/kassaQoldiqlari";
import MaxsulotQoldiq from "../../components/document/qoldiqlarKirimi/MaxsulotQoldiqlari/maxsulotQoldiqlari";
import Qarizdorlik from "../../components/document/qoldiqlarKirimi/QarzdorlikQoldiqlariniKiritish/qarizdorlik";
import XodimlarQoldiqi from "../../components/document/qoldiqlarKirimi/XodimlarQoldigi/XodimlarQoldiqlari";
import DocumentSavdo from "../../components/document/savdo/savdoDocumet";
import Servis from "../../components/document/servis/servis";

class ContentDocument extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/Documents">
          <ContentSlider />
        </Route>
        <Route exact path="/Documents/VseDocument">
          <VseDoc />
        </Route>
        <Route exact path="/Documents/OchistitDP">
          <Ochistit />
        </Route>
        <Route path="/Documents/PrixodBank">
          <PrixodBank />
        </Route>
        <Route path="/Documents/RasxodBank">
          <RasxodBank />
        </Route>
        <Route path="/Documents/raschet">
          <Raschet />
        </Route>
        <Route path="/Documents/rasxod">
          <Rasxod />
        </Route>
        <Route path="/Documents/IshlabChiqarish">
          <Proiz />
        </Route>
        <Route path="/Documents/KassagaNaqtPulTyshumi">
          <Tushum />
        </Route>
        <Route path="/Documents/KassagaNaxtPulChiqimi">
          <Chiqim />
        </Route>
        <Route path="/Documents/Intervazatsiya">
          <Inter />
        </Route>
        <Route path="/Documents/PastupleniyaTavar">
          <Pastupleniya />
        </Route>
        <Route path="/Documents/PeremesheniyaTavar">
          <Peremisheniya />
        </Route>
        <Route path="/Documents/SpisaniyaTavar">
          <Spisaniya />
        </Route>
        <Route path="/Documents/Maxsulotlarnikilentdanqaytarish">
          <MaxsulotKilent />
        </Route>
        <Route path="/Documents/Maxsulotlarniyukberuvchigaqaytarisj">
          <YukberuvchiQaytarish />
        </Route>
        <Route path="/Documents/bankQoldiqlariniKiritish">
          <BankQoldiqlari />
        </Route>
        <Route path="/Documents/KassaQoldiqlariniKiritish">
          <KassaQoldiq />
        </Route>
        <Route path="/Documents/MaxsulotQoldiqlari">
          <MaxsulotQoldiq />
        </Route>
        <Route path="/Documents/QarzdorlikQoldiqlariniKiritish">
          <Qarizdorlik />
        </Route>
        <Route path="/Documents/XodimlarQoldigi">
          <XodimlarQoldiqi />
        </Route>
        <Route path="/Documents/savdo">
          <DocumentSavdo />
        </Route>
        <Route path="/Documents/servis">
          <Servis />
        </Route>
      </Switch>
    );
  }
}
export default ContentDocument;
