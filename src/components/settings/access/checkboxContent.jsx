import { React, useState } from "react";
import { Checkbox, Divider } from "antd";
import { Switch, Route } from "react-router-dom";

const Checkboxes = () => {
  const [readFirst, setReadFirst] = useState(false);
  const [readSecond, setReadSecond] = useState(false);
  const [readThird, setReadThird] = useState(false);
  const [updateFirst, setUpdateFirst] = useState(false);
  const [updateSecond, setUpdateSecond] = useState(false);
  const [updateThird, setUpdateThird] = useState(false);


  const onChangeReadFirst = () => {
    setReadFirst(!readFirst);
    setReadSecond(!readFirst);
    setReadThird(!readFirst);
    setUpdateFirst(!readFirst);
    setUpdateSecond(!readFirst);
    setUpdateThird(!readFirst);
  };
  const onChangeReadSecond = () => {
    setReadSecond(!readSecond);
    setReadThird(!readSecond);
    setUpdateSecond(!readSecond);
    setUpdateThird(!readSecond);
  };
  const onChangeUpdateFirst = () => {
    setUpdateFirst(!updateFirst);
    setUpdateSecond(!updateFirst);
    setUpdateThird(!updateFirst);
};
const onChangeUpdateSecond = () => {
    setUpdateSecond(!updateSecond);
    setUpdateThird(!updateSecond);
  }

  return (
    <Switch>
      <Route path="/Settings/Access/provedenie/spravochniklar">
        <Checkbox checked={readFirst} onChange={onChangeReadFirst}>
          Read
        </Checkbox>
        <Checkbox checked={updateFirst} onChange={onChangeUpdateFirst}>
          Update
        </Checkbox>
        <Route path="/Settings/Access/provedenie/spravochniklar/BankHisobRaqamlari">
          <Divider />
          <Checkbox checked={readSecond} onChange={onChangeReadSecond}>
            Read - bankHisobRaqamlari
          </Checkbox>
          <Checkbox checked={updateSecond} onChange={onChangeUpdateSecond}>
            Update - bankHisobRaqamlari
          </Checkbox>
          <Route path="/Settings/Access/provedenie/spravochniklar/BankHisobRaqamlari/description">
            <Divider />
            <Checkbox
              checked={readThird}
              onChange={() => setReadThird(!updateThird)}
            >
              Read - description
            </Checkbox>
            <Checkbox
              checked={updateThird}
              onChange={() => setUpdateThird(!updateThird)}
            >
              Update - description
            </Checkbox>
          </Route>
        </Route>
      </Route>
    </Switch>
  );
};
export default Checkboxes;
