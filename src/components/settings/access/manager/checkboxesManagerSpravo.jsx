import { React, useState } from "react";
import { Checkbox, Divider, Row, Col } from "antd";
import { Switch, Route } from "react-router-dom";

const CheckboxesOfManagerSpravo = () => {
  // ----spravochniklar-----
  const [createSpravochniklar, setCreateSpravochniklar] = useState(false);
  const [readSpravochniklar, setReadSpravochniklar] = useState(false);
  const [updateSpravochniklar, setUpdateSpravochniklar] = useState(false);
  const [deleteSpravochniklar, setDeleteSpravochniklar] = useState(false);
  // ----bankHisobRaqamlari-----
  const [createBHRS, setCreateBHRS] = useState(false);
  const [readBHRS, setReadBHRS] = useState(false);
  const [updateBHRS, setUpdateBHRS] = useState(false);
  const [deleteBHRS, setDeleteBHRS] = useState(false);
  // ----Bulimlar-----
  const [createBulim, setCreateBulim] = useState(false);
  const [readBulim, setReadBulim] = useState(false);
  const [updateBulim, setUpdateBulim] = useState(false);
  const [deleteBulim, setDeleteBulim] = useState(false);
  // ----ChiqimTuri-----
  const [createCHT, setCreateCHT] = useState(false);
  const [readCHT, setReadCHT] = useState(false);
  const [updateCHT, setUpdateCHT] = useState(false);
  const [deleteCHT, setDeleteCHT] = useState(false);
  // ----Filial-----
  const [createFilial, setCreateFilial] = useState(false);
  const [readFilial, setReadFilial] = useState(false);
  const [updateFilial, setUpdateFilial] = useState(false);
  const [deleteFilial, setDeleteFilial] = useState(false);
  // ----Firma-----
  const [createFirma, setCreateFirma] = useState(false);
  const [readFirma, setReadFirma] = useState(false);
  const [updateFirma, setUpdateFirma] = useState(false);
  const [deleteFirma, setDeleteFirma] = useState(false);
  // ----Kassalar-----
  const [createKassalar, setCreateKassalar] = useState(false);
  const [readKassalar, setReadKassalar] = useState(false);
  const [updateKassalar, setUpdateKassalar] = useState(false);
  const [deleteKassalar, setDeleteKassalar] = useState(false);
  // ----Omborlar-----
  const [createOmborlar, setCreateOmborlar] = useState(false);
  const [readOmborlar, setReadOmborlar] = useState(false);
  const [updateOmborlar, setUpdateOmborlar] = useState(false);
  const [deleteOmborlar, setDeleteOmborlar] = useState(false);
  // ----Valyutalar-----
  const [createValyutalar, setCreateValyutalar] = useState(false);
  const [readValyutalar, setReadValyutalar] = useState(false);
  const [updateValyutalar, setUpdateValyutalar] = useState(false);
  const [deleteValyutalar, setDeleteValyutalar] = useState(false);
  // ----MahsulotTuri-----
  const [createMT, setCreateMT] = useState(false);
  const [readMT, setReadMT] = useState(false);
  const [updateMT, setUpdateMT] = useState(false);
  const [deleteMT, setDeleteMT] = useState(false);
  // ----NarxTuri-----
  const [createNT, setCreateNT] = useState(false);
  const [readNT, setReadNT] = useState(false);
  const [updateNT, setUpdateNT] = useState(false);
  const [deleteNT, setDeleteNT] = useState(false);
  // ----Nomenklatura-----
  const [createNmklt, setCreateNmklt] = useState(false);
  const [readNmklt, setReadNmklt] = useState(false);
  const [updateNmklt, setUpdateNmklt] = useState(false);
  const [deleteNmklt, setDeleteNmklt] = useState(false);
  // ----Partiya-----
  const [createPartiya, setCreatePartiya] = useState(false);
  const [readPartiya, setReadPartiya] = useState(false);
  const [updatePartiya, setUpdatePartiya] = useState(false);
  const [deletePartiya, setDeletePartiya] = useState(false);
  // ----UlchovBirligi-----
  const [createUB, setCreateUB] = useState(false);
  const [readUB, setReadUB] = useState(false);
  const [updateUB, setUpdateUB] = useState(false);
  const [deleteUB, setDeleteUB] = useState(false);
  // ----Bulim-----
  const [createBolim, setCreateBolim] = useState(false);
  const [readBolim, setReadBolim] = useState(false);
  const [updateBolim, setUpdateBolim] = useState(false);
  const [deleteBolim, setDeleteBolim] = useState(false);
  // ----Foydalanuvchi-----
  const [createFoyda, setCreateFoyda] = useState(false);
  const [readFoyda, setReadFoyda] = useState(false);
  const [updateFoyda, setUpdateFoyda] = useState(false);
  const [deleteFoyda, setDeleteFoyda] = useState(false);
  // ----Kontragent-----
  const [createKontr, setCreateKontr] = useState(false);
  const [readKontr, setReadKontr] = useState(false);
  const [updateKontr, setUpdateKontr] = useState(false);
  const [deleteKontr, setDeleteKontr] = useState(false);
  // ----Xodim-----
  const [createXodim, setCreateXodim] = useState(false);
  const [readXodim, setReadXodim] = useState(false);
  const [updateXodim, setUpdateXodim] = useState(false);
  const [deleteXodim, setDeleteXodim] = useState(false);

  const onChangeCreateSpravochniklar = () => {
    setCreateSpravochniklar(!createSpravochniklar);
    setCreateBHRS(!createSpravochniklar);
    setCreateBulim(!createSpravochniklar);
    setCreateCHT(!createSpravochniklar);
    setCreateFilial(!createSpravochniklar);
    setCreateFirma(!createSpravochniklar);
    setCreateKassalar(!createSpravochniklar);
    setCreateOmborlar(!createSpravochniklar);
    setCreateValyutalar(!createSpravochniklar);
    setCreateMT(!createSpravochniklar);
    setCreateNT(!createSpravochniklar);
    setCreateNmklt(!createSpravochniklar);
    setCreatePartiya(!createSpravochniklar);
    setCreateUB(!createSpravochniklar);
    setCreateBolim(!createSpravochniklar);
    setCreateFoyda(!createSpravochniklar);
    setCreateKontr(!createSpravochniklar);
    setCreateXodim(!createSpravochniklar);
  };
  const onChangeReadSpravochniklar = () => {
    setCreateSpravochniklar(!readSpravochniklar);
    setReadSpravochniklar(!readSpravochniklar);
    setUpdateSpravochniklar(!readSpravochniklar);
    setDeleteSpravochniklar(!readSpravochniklar);
    // ------bankHisobRaqamlari-----
    setCreateBHRS(!readSpravochniklar);
    setReadBHRS(!readSpravochniklar);
    setUpdateBHRS(!readSpravochniklar);
    setDeleteBHRS(!readSpravochniklar);
    // ------Bulimlar-----
    setCreateBulim(!readSpravochniklar);
    setReadBulim(!readSpravochniklar);
    setUpdateBulim(!readSpravochniklar);
    setDeleteBulim(!readSpravochniklar);
    // ------ChiqimTuri-----
    setCreateCHT(!readSpravochniklar);
    setReadCHT(!readSpravochniklar);
    setUpdateCHT(!readSpravochniklar);
    setDeleteCHT(!readSpravochniklar);
    // ------Filial-----
    setCreateFilial(!readSpravochniklar);
    setReadFilial(!readSpravochniklar);
    setUpdateFilial(!readSpravochniklar);
    setDeleteFilial(!readSpravochniklar);
    // ------Firma-----
    setCreateFirma(!readSpravochniklar);
    setReadFirma(!readSpravochniklar);
    setUpdateFirma(!readSpravochniklar);
    setDeleteFirma(!readSpravochniklar);
    // ------Kassalar-----
    setCreateKassalar(!readSpravochniklar);
    setReadKassalar(!readSpravochniklar);
    setUpdateKassalar(!readSpravochniklar);
    setDeleteKassalar(!readSpravochniklar);
    // ------Omborlar-----
    setCreateOmborlar(!readSpravochniklar);
    setReadOmborlar(!readSpravochniklar);
    setUpdateOmborlar(!readSpravochniklar);
    setDeleteOmborlar(!readSpravochniklar);
    // ------Valyutalar-----
    setCreateValyutalar(!readSpravochniklar);
    setReadValyutalar(!readSpravochniklar);
    setUpdateValyutalar(!readSpravochniklar);
    setDeleteValyutalar(!readSpravochniklar);
    // ------MahsulotTuri-----
    setCreateMT(!readSpravochniklar);
    setReadMT(!readSpravochniklar);
    setUpdateMT(!readSpravochniklar);
    setDeleteMT(!readSpravochniklar);
    // ------NarxTuri-----
    setCreateNT(!readSpravochniklar);
    setReadNT(!readSpravochniklar);
    setUpdateNT(!readSpravochniklar);
    setDeleteNT(!readSpravochniklar);
    // ------Nomenklatura-----
    setCreateNmklt(!readSpravochniklar);
    setReadNmklt(!readSpravochniklar);
    setUpdateNmklt(!readSpravochniklar);
    setDeleteNmklt(!readSpravochniklar);
    // ------Partiya-----
    setCreatePartiya(!readSpravochniklar);
    setReadPartiya(!readSpravochniklar);
    setUpdatePartiya(!readSpravochniklar);
    setDeletePartiya(!readSpravochniklar);
    // ------UlchovBirligi-----
    setCreateUB(!readSpravochniklar);
    setReadUB(!readSpravochniklar);
    setUpdateUB(!readSpravochniklar);
    setDeleteUB(!readSpravochniklar);
    // ------Bulim-----
    setCreateBolim(!readSpravochniklar);
    setReadBolim(!readSpravochniklar);
    setUpdateBolim(!readSpravochniklar);
    setDeleteBolim(!readSpravochniklar);
    // ------Foydalanuvchi-----
    setCreateFoyda(!readSpravochniklar);
    setReadFoyda(!readSpravochniklar);
    setUpdateFoyda(!readSpravochniklar);
    setDeleteFoyda(!readSpravochniklar);
    // ------Kontragent-----
    setCreateKontr(!readSpravochniklar);
    setReadKontr(!readSpravochniklar);
    setUpdateKontr(!readSpravochniklar);
    setDeleteKontr(!readSpravochniklar);
    // ------Xodim-----
    setCreateXodim(!readSpravochniklar);
    setReadXodim(!readSpravochniklar);
    setUpdateXodim(!readSpravochniklar);
    setDeleteXodim(!readSpravochniklar);
  };
  const onChangeUpdateSpravochniklar = () => {
    setUpdateSpravochniklar(!updateSpravochniklar);
    setUpdateBHRS(!updateSpravochniklar);
    setUpdateBulim(!updateSpravochniklar);
    setUpdateCHT(!updateSpravochniklar);
    setUpdateFilial(!updateSpravochniklar);
    setUpdateFirma(!updateSpravochniklar);
    setUpdateKassalar(!updateSpravochniklar);
    setUpdateOmborlar(!updateSpravochniklar);
    setUpdateValyutalar(!updateSpravochniklar);
    setUpdateMT(!updateSpravochniklar);
    setUpdateNT(!updateSpravochniklar);
    setUpdateNmklt(!updateSpravochniklar);
    setUpdatePartiya(!updateSpravochniklar);
    setUpdateUB(!updateSpravochniklar);
    setUpdateBolim(!updateSpravochniklar);
    setUpdateFoyda(!updateSpravochniklar);
    setUpdateKontr(!updateSpravochniklar);
    setUpdateXodim(!updateSpravochniklar);
  };
  const onChangeDeleteSpravochniklar = () => {
    setDeleteSpravochniklar(!deleteSpravochniklar);
    setDeleteBHRS(!deleteSpravochniklar);
    setDeleteBulim(!deleteSpravochniklar);
    setDeleteCHT(!deleteSpravochniklar);
    setDeleteFilial(!deleteSpravochniklar);
    setDeleteFirma(!deleteSpravochniklar);
    setDeleteKassalar(!deleteSpravochniklar);
    setDeleteOmborlar(!deleteSpravochniklar);
    setDeleteValyutalar(!deleteSpravochniklar);
    setDeleteMT(!deleteSpravochniklar);
    setDeleteNT(!deleteSpravochniklar);
    setDeleteNmklt(!deleteSpravochniklar);
    setDeletePartiya(!deleteSpravochniklar);
    setDeleteUB(!deleteSpravochniklar);
    setDeleteBolim(!deleteSpravochniklar);
    setDeleteFoyda(!deleteSpravochniklar);
    setDeleteKontr(!deleteSpravochniklar);
    setDeleteXodim(!deleteSpravochniklar);
  };

  return (
    <>
      <Checkbox
        checked={createSpravochniklar}
        onChange={onChangeCreateSpravochniklar}
      >
        Create
      </Checkbox>
      <Checkbox
        checked={readSpravochniklar}
        onChange={onChangeReadSpravochniklar}
      >
        Read
      </Checkbox>
      <Checkbox
        checked={updateSpravochniklar}
        onChange={onChangeUpdateSpravochniklar}
      >
        Update
      </Checkbox>
      <Checkbox
        checked={deleteSpravochniklar}
        onChange={onChangeDeleteSpravochniklar}
      >
        Delete
      </Checkbox>

      <Route path="/Settings/Access/manager/spravochniklar/BankHisobRaqamlari">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createBHRS}
              onChange={() => setCreateBHRS(!createBHRS)}
            >
              Create - bankHisobRaqamlari
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readBHRS}
              onChange={() => setReadBHRS(!readBHRS)}
            >
              Read - bankHisobRaqamlari
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateBHRS}
              onChange={() => setUpdateBHRS(!updateBHRS)}
            >
              Update - bankHisobRaqamlari
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteBHRS}
              onChange={() => setDeleteBHRS(!deleteBHRS)}
            >
              Delete - bankHisobRaqamlari
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/manager/spravochniklar/Bulimlar">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createBulim}
              onChange={() => setCreateBulim(!createBulim)}
            >
              Create - Bulimlar
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readBulim}
              onChange={() => setReadBulim(!readBulim)}
            >
              Read - Bulimlar
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateBulim}
              onChange={() => setUpdateBulim(!updateBulim)}
            >
              Update - Bulimlar
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteBulim}
              onChange={() => setDeleteBulim(!deleteBulim)}
            >
              Delete - Bulimlar
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/manager/spravochniklar/ChiqimTuri">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createCHT}
              onChange={() => setCreateCHT(!createCHT)}
            >
              Create - ChiqimTuri
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox checked={readCHT} onChange={() => setReadCHT(!readCHT)}>
              Read - ChiqimTuri
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateCHT}
              onChange={() => setUpdateCHT(!updateCHT)}
            >
              Update - ChiqimTuri
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteCHT}
              onChange={() => setDeleteCHT(!deleteCHT)}
            >
              Delete - ChiqimTuri
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/manager/spravochniklar/Filial">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createFilial}
              onChange={() => setCreateFilial(!createFilial)}
            >
              Create - Filial
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readFilial}
              onChange={() => setReadFilial(!readFilial)}
            >
              Read - Filial
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateFilial}
              onChange={() => setUpdateFilial(!updateFilial)}
            >
              Update - Filial
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteFilial}
              onChange={() => setDeleteFilial(!deleteFilial)}
            >
              Delete - Filial
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/manager/spravochniklar/Firma">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createFirma}
              onChange={() => setCreateFirma(!createFirma)}
            >
              Create - Firma
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readFirma}
              onChange={() => setReadFirma(!readFirma)}
            >
              Read - Firma
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateFirma}
              onChange={() => setUpdateFirma(!updateFirma)}
            >
              Update - Firma
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteFirma}
              onChange={() => setDeleteFirma(!deleteFirma)}
            >
              Delete - Firma
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/manager/spravochniklar/Kassalar">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createKassalar}
              onChange={() => setCreateKassalar(!createKassalar)}
            >
              Create - Kassalar
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readKassalar}
              onChange={() => setReadKassalar(!readKassalar)}
            >
              Read - Kassalar
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateKassalar}
              onChange={() => setUpdateKassalar(!updateKassalar)}
            >
              Update - Kassalar
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteKassalar}
              onChange={() => setDeleteKassalar(!deleteKassalar)}
            >
              Delete - Kassalar
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/manager/spravochniklar/Omborlar">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createOmborlar}
              onChange={() => setCreateOmborlar(!createOmborlar)}
            >
              Create - Omborlar
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readOmborlar}
              onChange={() => setReadOmborlar(!readOmborlar)}
            >
              Read - Omborlar
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateOmborlar}
              onChange={() => setUpdateOmborlar(!updateOmborlar)}
            >
              Update - Omborlar
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteOmborlar}
              onChange={() => setDeleteOmborlar(!deleteOmborlar)}
            >
              Delete - Omborlar
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/manager/spravochniklar/Valyutalar">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createValyutalar}
              onChange={() => setCreateValyutalar(!createValyutalar)}
            >
              Create - Valyutalar
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readValyutalar}
              onChange={() => setReadValyutalar(!readValyutalar)}
            >
              Read - Valyutalar
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateValyutalar}
              onChange={() => setUpdateValyutalar(!updateValyutalar)}
            >
              Update - Valyutalar
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteValyutalar}
              onChange={() => setDeleteValyutalar(!deleteValyutalar)}
            >
              Delete - Valyutalar
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/manager/spravochniklar/MahsulotTuri">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createMT}
              onChange={() => setCreateMT(!createMT)}
            >
              Create - MahsulotTuri
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox checked={readMT} onChange={() => setReadMT(!readMT)}>
              Read - MahsulotTuri
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateMT}
              onChange={() => setUpdateMT(!updateMT)}
            >
              Update - MahsulotTuri
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteMT}
              onChange={() => setDeleteMT(!deleteMT)}
            >
              Delete - MahsulotTuri
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/manager/spravochniklar/NarxTuri">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createNT}
              onChange={() => setCreateNT(!createNT)}
            >
              Create - NarxTuri
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox checked={readNT} onChange={() => setReadNT(!readNT)}>
              Read - NarxTuri
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateNT}
              onChange={() => setUpdateNT(!updateNT)}
            >
              Update - NarxTuri
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteNT}
              onChange={() => setDeleteNT(!deleteNT)}
            >
              Delete - NarxTuri
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/manager/spravochniklar/Nomenklatura">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createNmklt}
              onChange={() => setCreateNmklt(!createNmklt)}
            >
              Create - Nomenklatura
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readNmklt}
              onChange={() => setReadNmklt(!readNmklt)}
            >
              Read - Nomenklatura
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateNmklt}
              onChange={() => setUpdateNmklt(!updateNmklt)}
            >
              Update - Nomenklatura
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteNmklt}
              onChange={() => setDeleteNmklt(!deleteNmklt)}
            >
              Delete - Nomenklatura
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/manager/spravochniklar/Partiya">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createPartiya}
              onChange={() => setCreatePartiya(!createPartiya)}
            >
              Create - Partiya
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readPartiya}
              onChange={() => setReadPartiya(!readPartiya)}
            >
              Read - Partiya
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updatePartiya}
              onChange={() => setUpdatePartiya(!updatePartiya)}
            >
              Update - Partiya
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deletePartiya}
              onChange={() => setDeletePartiya(!deletePartiya)}
            >
              Delete - Partiya
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/manager/spravochniklar/UlchovBirligi">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createUB}
              onChange={() => setCreateUB(!createUB)}
            >
              Create - UlchovBirligi
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox checked={readUB} onChange={() => setReadUB(!readUB)}>
              Read - UlchovBirligi
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateUB}
              onChange={() => setUpdateUB(!updateUB)}
            >
              Update - UlchovBirligi
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteUB}
              onChange={() => setDeleteUB(!deleteUB)}
            >
              Delete - UlchovBirligi
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/manager/spravochniklar/Bulim">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createBolim}
              onChange={() => setCreateBolim(!createBolim)}
            >
              Create - Bulim
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readBolim}
              onChange={() => setReadBolim(!readBolim)}
            >
              Read - Bulim
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateBolim}
              onChange={() => setUpdateBolim(!updateBolim)}
            >
              Update - Bulim
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteBolim}
              onChange={() => setDeleteBolim(!deleteBolim)}
            >
              Delete - Bulim
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/manager/spravochniklar/Foydalanuvchi">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createFoyda}
              onChange={() => setCreateFoyda(!createFoyda)}
            >
              Create - Foydalanuvchi
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readFoyda}
              onChange={() => setReadFoyda(!readFoyda)}
            >
              Read - Foydalanuvchi
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateFoyda}
              onChange={() => setUpdateFoyda(!updateFoyda)}
            >
              Update - Foydalanuvchi
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteFoyda}
              onChange={() => setDeleteFoyda(!deleteFoyda)}
            >
              Delete - Foydalanuvchi
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/manager/spravochniklar/Kontragent">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createKontr}
              onChange={() => setCreateKontr(!createKontr)}
            >
              Create - Kontragent
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readKontr}
              onChange={() => setReadKontr(!readKontr)}
            >
              Read - Kontragent
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateKontr}
              onChange={() => setUpdateKontr(!updateKontr)}
            >
              Update - Kontragent
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteKontr}
              onChange={() => setDeleteKontr(!deleteKontr)}
            >
              Delete - Kontragent
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/manager/spravochniklar/Xodim">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createXodim}
              onChange={() => setCreateXodim(!createXodim)}
            >
              Create - Xodim
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readXodim}
              onChange={() => setReadXodim(!readXodim)}
            >
              Read - Xodim
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateXodim}
              onChange={() => setUpdateXodim(!updateXodim)}
            >
              Update - Xodim
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteXodim}
              onChange={() => setDeleteXodim(!deleteXodim)}
            >
              Delete - Xodim
            </Checkbox>
          </Col>
        </Row>
      </Route>
    </>
  );
};
export default CheckboxesOfManagerSpravo;
