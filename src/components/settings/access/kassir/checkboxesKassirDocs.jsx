import { React, useState } from "react";
import { Checkbox, Divider, Row, Col } from "antd";
import { Switch, Route } from "react-router-dom";

const CheckboxesOfKassirDocs = () => {
  // ----Documents-----
  const [createDocuments, setCreateDocuments] = useState(false);
  const [readDocuments, setReadDocuments] = useState(false);
  const [updateDocuments, setUpdateDocuments] = useState(false);
  const [deleteDocuments, setDeleteDocuments] = useState(false);
  // ----PrixodBank-----
  const [createPB, setCreatePB] = useState(false);
  const [readPB, setReadPB] = useState(false);
  const [updatePB, setUpdatePB] = useState(false);
  const [deletePB, setDeletePB] = useState(false);
  // ----RasxodBank-----
  const [createRB, setCreateRB] = useState(false);
  const [readRB, setReadRB] = useState(false);
  const [updateRB, setUpdateRB] = useState(false);
  const [deleteRB, setDeleteRB] = useState(false);
  // ----OchistitDp-----
  const [createODp, setCreateODp] = useState(false);
  const [readODp, setReadODp] = useState(false);
  const [updateODp, setUpdateODp] = useState(false);
  const [deleteODp, setDeleteODp] = useState(false);
  // ----VseDocument-----
  const [createVseDocument, setCreateVseDocument] = useState(false);
  const [readVseDocument, setReadVseDocument] = useState(false);
  const [updateVseDocument, setUpdateVseDocument] = useState(false);
  const [deleteVseDocument, setDeleteVseDocument] = useState(false);
  // ----Raschet-----
  const [createRaschet, setCreateRaschet] = useState(false);
  const [readRaschet, setReadRaschet] = useState(false);
  const [updateRaschet, setUpdateRaschet] = useState(false);
  const [deleteRaschet, setDeleteRaschet] = useState(false);
  // ----Rasxod-----
  const [createRasxod, setCreateRasxod] = useState(false);
  const [readRasxod, setReadRasxod] = useState(false);
  const [updateRasxod, setUpdateRasxod] = useState(false);
  const [deleteRasxod, setDeleteRasxod] = useState(false);
  // ----IshlabChiqarish-----
  const [createIshlabChiqarish, setCreateIshlabChiqarish] = useState(false);
  const [readIshlabChiqarish, setReadIshlabChiqarish] = useState(false);
  const [updateIshlabChiqarish, setUpdateIshlabChiqarish] = useState(false);
  const [deleteIshlabChiqarish, setDeleteIshlabChiqarish] = useState(false);
  // ----KassagaNaqdPulTushumi-----
  const [createKassagaNaqdPulTushumi, setCreateKassagaNaqdPulTushumi] = useState(false);
  const [readKassagaNaqdPulTushumi, setReadKassagaNaqdPulTushumi] = useState(false);
  const [updateKassagaNaqdPulTushumi, setUpdateKassagaNaqdPulTushumi] = useState(false);
  const [deleteKassagaNaqdPulTushumi, setDeleteKassagaNaqdPulTushumi] = useState(false);
  // ----Kassaga Naqd Pul Chiqimi-----
  const [createKNPCH, setCreateKNPCH] = useState(false);
  const [readKNPCH, setReadKNPCH] = useState(false);
  const [updateKNPCH, setUpdateKNPCH] = useState(false);
  const [deleteKNPCH, setDeleteKNPCH] = useState(false);
  // ----Intervizatsiya-----
  const [createIntervizatsiya, setCreateIntervizatsiya] = useState(false);
  const [readIntervizatsiya, setReadIntervizatsiya] = useState(false);
  const [updateIntervizatsiya, setUpdateIntervizatsiya] = useState(false);
  const [deleteIntervizatsiya, setDeleteIntervizatsiya] = useState(false);
  // ----PeremesheniyaTovara-----
  const [createPeremesheniyaTovara, setCreatePeremesheniyaTovara] = useState(false);
  const [readPeremesheniyaTovara, setReadPeremesheniyaTovara] = useState(false);
  const [updatePeremesheniyaTovara, setUpdatePeremesheniyaTovara] = useState(false);
  const [deletePeremesheniyaTovara, setDeletePeremesheniyaTovara] = useState(false);
  // ----PostupleniyaTovara-----
  const [createPostupleniyaTovara, setCreatePostupleniyaTovara] = useState(false);
  const [readPostupleniyaTovara, setReadPostupleniyaTovara] = useState(false);
  const [updatePostupleniyaTovara, setUpdatePostupleniyaTovara] = useState(false);
  const [deletePostupleniyaTovara, setDeletePostupleniyaTovara] = useState(false);
  // ----SpisaniyaTovara-----
  const [createSpisaniyaTovara, setCreateSpisaniyaTovara] = useState(false);
  const [readSpisaniyaTovara, setReadSpisaniyaTovara] = useState(false);
  const [updateSpisaniyaTovara, setUpdateSpisaniyaTovara] = useState(false);
  const [deleteSpisaniyaTovara, setDeleteSpisaniyaTovara] = useState(false);
  // ----RB-----
  const [createMahsulotlarniKlientdanQaytarish, setCreateMahsulotlarniKlientdanQaytarish] = useState(false);
  const [readMahsulotlarniKlientdanQaytarish, setReadMahsulotlarniKlientdanQaytarish] = useState(false);
  const [updateMahsulotlarniKlientdanQaytarish, setUpdateMahsulotlarniKlientdanQaytarish] = useState(false);
  const [deleteMahsulotlarniKlientdanQaytarish, setDeleteMahsulotlarniKlientdanQaytarish] = useState(false);
  // ----MahsulotlarniYukBeruvchigaQaytarish-----
  const [createMahsulotlarniYukBeruvchigaQaytarish, setCreateMahsulotlarniYukBeruvchigaQaytarish] = useState(false);
  const [readMahsulotlarniYukBeruvchigaQaytarish, setReadMahsulotlarniYukBeruvchigaQaytarish] = useState(false);
  const [updateMahsulotlarniYukBeruvchigaQaytarish, setUpdateMahsulotlarniYukBeruvchigaQaytarish] = useState(false);
  const [deleteMahsulotlarniYukBeruvchigaQaytarish, setDeleteMahsulotlarniYukBeruvchigaQaytarish] = useState(false);
  // ----BankQoldiqlariniKiritish-----
  const [createBankQoldiqlariniKiritish, setCreateBankQoldiqlariniKiritish] = useState(false);
  const [readBankQoldiqlariniKiritish, setReadBankQoldiqlariniKiritish] = useState(false);
  const [updateBankQoldiqlariniKiritish, setUpdateBankQoldiqlariniKiritish] = useState(false);
  const [deleteBankQoldiqlariniKiritish, setDeleteBankQoldiqlariniKiritish] = useState(false);
  // ----KassaQoldiqlariniKiritish-----
  const [createKassaQoldiqlariniKiritish, setCreateKassaQoldiqlariniKiritish] = useState(false);
  const [readKassaQoldiqlariniKiritish, setReadKassaQoldiqlariniKiritish] = useState(false);
  const [updateKassaQoldiqlariniKiritish, setUpdateKassaQoldiqlariniKiritish] = useState(false);
  const [deleteKassaQoldiqlariniKiritish, setDeleteKassaQoldiqlariniKiritish] = useState(false);
  // ----MahsulotQoldiqlariniKiritish-----
  const [createMahsulotQoldiqlariniKiritish, setCreateMahsulotQoldiqlariniKiritish] = useState(false);
  const [readMahsulotQoldiqlariniKiritish, setReadMahsulotQoldiqlariniKiritish] = useState(false);
  const [updateMahsulotQoldiqlariniKiritish, setUpdateMahsulotQoldiqlariniKiritish] = useState(false);
  const [deleteMahsulotQoldiqlariniKiritish, setDeleteMahsulotQoldiqlariniKiritish] = useState(false);
  // ----QarzdorlikQoldiqlariniKiritish-----
  const [createQarzdorlikQoldiqlariniKiritish, setCreateQarzdorlikQoldiqlariniKiritish] = useState(false);
  const [readQarzdorlikQoldiqlariniKiritish, setReadQarzdorlikQoldiqlariniKiritish] = useState(false);
  const [updateQarzdorlikQoldiqlariniKiritish, setUpdateQarzdorlikQoldiqlariniKiritish] = useState(false);
  const [deleteQarzdorlikQoldiqlariniKiritish, setDeleteQarzdorlikQoldiqlariniKiritish] = useState(false);
  // ----XodimlarQoldigi-----
  const [createXodimlarQoldigi, setCreateXodimlarQoldigi] = useState(false);
  const [readXodimlarQoldigi, setReadXodimlarQoldigi] = useState(false);
  const [updateXodimlarQoldigi, setUpdateXodimlarQoldigi] = useState(false);
  const [deleteXodimlarQoldigi, setDeleteXodimlarQoldigi] = useState(false);
  // ----Savdo-----
  const [createSavdo, setCreateSavdo] = useState(false);
  const [readSavdo, setReadSavdo] = useState(false);
  const [updateSavdo, setUpdateSavdo] = useState(false);
  const [deleteSavdo, setDeleteSavdo] = useState(false);
  // ----Servis-----
  const [createServis, setCreateServis] = useState(false);
  const [readServis, setReadServis] = useState(false);
  const [updateServis, setUpdateServis] = useState(false);
  const [deleteServis, setDeleteServis] = useState(false);

  const onChangeCreateDocuments = () => {
    setCreateDocuments(!createDocuments);
    setCreatePB(!createDocuments);
    setCreateRB(!createDocuments);
    setCreateODp(!createDocuments);
    setCreateVseDocument(!createDocuments);
    setCreateRaschet(!createDocuments);
    setCreateRasxod(!createDocuments);
    setCreateIshlabChiqarish(!createDocuments);
    setCreateKassagaNaqdPulTushumi(!createDocuments);
    setCreateKNPCH(!createDocuments);
    setCreateIntervizatsiya(!createDocuments);
    setCreatePeremesheniyaTovara(!createDocuments);
    setCreatePostupleniyaTovara(!createDocuments);
    setCreateSpisaniyaTovara(!createDocuments);
    setCreateMahsulotlarniKlientdanQaytarish(!createDocuments);
    setCreateMahsulotlarniYukBeruvchigaQaytarish(!createDocuments);
    setCreateBankQoldiqlariniKiritish(!createDocuments);
    setCreateKassaQoldiqlariniKiritish(!createDocuments);
    setCreateMahsulotQoldiqlariniKiritish(!createDocuments);
    setCreateQarzdorlikQoldiqlariniKiritish(!createDocuments);
    setCreateXodimlarQoldigi(!createDocuments);
    setCreateSavdo(!createDocuments);
    setCreateServis(!createDocuments);
  };
  const onChangeReadDocuments = () => {
    setCreateDocuments(!readDocuments);
    setReadDocuments(!readDocuments);
    setUpdateDocuments(!readDocuments);
    setDeleteDocuments(!readDocuments);
    // ------PrixodBank-----
    setCreatePB(!readDocuments);
    setReadPB(!readDocuments);
    setUpdatePB(!readDocuments);
    setDeletePB(!readDocuments);
    // ------RasxodBank-----
    setCreateRB(!readDocuments);
    setReadRB(!readDocuments);
    setUpdateRB(!readDocuments);
    setDeleteRB(!readDocuments);
    // ------OchistitDp-----
    setCreateODp(!readDocuments);
    setReadODp(!readDocuments);
    setUpdateODp(!readDocuments);
    setDeleteODp(!readDocuments);
    // ------VseDocument-----
    setCreateVseDocument(!readDocuments);
    setReadVseDocument(!readDocuments);
    setUpdateVseDocument(!readDocuments);
    setDeleteVseDocument(!readDocuments);
    // ------Raschet-----
    setCreateRaschet(!readDocuments);
    setReadRaschet(!readDocuments);
    setUpdateRaschet(!readDocuments);
    setDeleteRaschet(!readDocuments);
    // ------Rasxod-----
    setCreateRasxod(!readDocuments);
    setReadRasxod(!readDocuments);
    setUpdateRasxod(!readDocuments);
    setDeleteRasxod(!readDocuments);
    // ------IshlabChiqarish-----
    setCreateIshlabChiqarish(!readDocuments);
    setReadIshlabChiqarish(!readDocuments);
    setUpdateIshlabChiqarish(!readDocuments);
    setDeleteIshlabChiqarish(!readDocuments);
    // ------KassagaNaqdPulTushumi-----
    setCreateKassagaNaqdPulTushumi(!readDocuments);
    setReadKassagaNaqdPulTushumi(!readDocuments);
    setUpdateKassagaNaqdPulTushumi(!readDocuments);
    setDeleteKassagaNaqdPulTushumi(!readDocuments);
    // ------Kassaga Naqd Pul Chiqimi-----
    setCreateKNPCH(!readDocuments);
    setReadKNPCH(!readDocuments);
    setUpdateKNPCH(!readDocuments);
    setDeleteKNPCH(!readDocuments);
    // ------Intervizatsiya-----
    setCreateIntervizatsiya(!readDocuments);
    setReadIntervizatsiya(!readDocuments);
    setUpdateIntervizatsiya(!readDocuments);
    setDeleteIntervizatsiya(!readDocuments);
    // ------PeremesheniyaTovara-----
    setCreatePeremesheniyaTovara(!readDocuments);
    setReadPeremesheniyaTovara(!readDocuments);
    setUpdatePeremesheniyaTovara(!readDocuments);
    setDeletePeremesheniyaTovara(!readDocuments);
    // ------PostupleniyaTovara-----
    setCreatePostupleniyaTovara(!readDocuments);
    setReadPostupleniyaTovara(!readDocuments);
    setUpdatePostupleniyaTovara(!readDocuments);
    setDeletePostupleniyaTovara(!readDocuments);
    // ------SpisaniyaTovara-----
    setCreateSpisaniyaTovara(!readDocuments);
    setReadSpisaniyaTovara(!readDocuments);
    setUpdateSpisaniyaTovara(!readDocuments);
    setDeleteSpisaniyaTovara(!readDocuments);
    // ------RB-----
    setCreateMahsulotlarniKlientdanQaytarish(!readDocuments);
    setReadMahsulotlarniKlientdanQaytarish(!readDocuments);
    setUpdateMahsulotlarniKlientdanQaytarish(!readDocuments);
    setDeleteMahsulotlarniKlientdanQaytarish(!readDocuments);
    // ------MahsulotlarniYukBeruvchigaQaytarish-----
    setCreateMahsulotlarniYukBeruvchigaQaytarish(!readDocuments);
    setReadMahsulotlarniYukBeruvchigaQaytarish(!readDocuments);
    setUpdateMahsulotlarniYukBeruvchigaQaytarish(!readDocuments);
    setDeleteMahsulotlarniYukBeruvchigaQaytarish(!readDocuments);
    // ------BankQoldiqlariniKiritish-----
    setCreateBankQoldiqlariniKiritish(!readDocuments);
    setReadBankQoldiqlariniKiritish(!readDocuments);
    setUpdateBankQoldiqlariniKiritish(!readDocuments);
    setDeleteBankQoldiqlariniKiritish(!readDocuments);
    // ------KassaQoldiqlariniKiritish-----
    setCreateKassaQoldiqlariniKiritish(!readDocuments);
    setReadKassaQoldiqlariniKiritish(!readDocuments);
    setUpdateKassaQoldiqlariniKiritish(!readDocuments);
    setDeleteKassaQoldiqlariniKiritish(!readDocuments);
    // ------MahsulotQoldiqlariniKiritish-----
    setCreateMahsulotQoldiqlariniKiritish(!readDocuments);
    setReadMahsulotQoldiqlariniKiritish(!readDocuments);
    setUpdateMahsulotQoldiqlariniKiritish(!readDocuments);
    setDeleteMahsulotQoldiqlariniKiritish(!readDocuments);
    // ------QarzdorlikQoldiqlariniKiritish-----
    setCreateQarzdorlikQoldiqlariniKiritish(!readDocuments);
    setReadQarzdorlikQoldiqlariniKiritish(!readDocuments);
    setUpdateQarzdorlikQoldiqlariniKiritish(!readDocuments);
    setDeleteQarzdorlikQoldiqlariniKiritish(!readDocuments);
    // ------XodimlarQoldigi-----
    setCreateXodimlarQoldigi(!readDocuments);
    setReadXodimlarQoldigi(!readDocuments);
    setUpdateXodimlarQoldigi(!readDocuments);
    setDeleteXodimlarQoldigi(!readDocuments);
    // ------Savdo-----
    setCreateSavdo(!readDocuments);
    setReadSavdo(!readDocuments);
    setUpdateSavdo(!readDocuments);
    setDeleteSavdo(!readDocuments);
    // ------Servis-----
    setCreateServis(!readDocuments);
    setReadServis(!readDocuments);
    setUpdateServis(!readDocuments);
    setDeleteServis(!readDocuments);
  };
  const onChangeUpdateDocuments = () => {
    setUpdateDocuments(!updateDocuments);
    setUpdatePB(!updateDocuments);
    setUpdateRB(!updateDocuments);
    setUpdateODp(!updateDocuments);
    setUpdateVseDocument(!updateDocuments);
    setUpdateRaschet(!updateDocuments);
    setUpdateRasxod(!updateDocuments);
    setUpdateIshlabChiqarish(!updateDocuments);
    setUpdateKassagaNaqdPulTushumi(!updateDocuments);
    setUpdateKNPCH(!updateDocuments);
    setUpdateIntervizatsiya(!updateDocuments);
    setUpdatePeremesheniyaTovara(!updateDocuments);
    setUpdatePostupleniyaTovara(!updateDocuments);
    setUpdateSpisaniyaTovara(!updateDocuments);
    setUpdateMahsulotlarniKlientdanQaytarish(!updateDocuments);
    setUpdateMahsulotlarniYukBeruvchigaQaytarish(!updateDocuments);
    setUpdateBankQoldiqlariniKiritish(!updateDocuments);
    setUpdateKassaQoldiqlariniKiritish(!updateDocuments);
    setUpdateMahsulotQoldiqlariniKiritish(!updateDocuments);
    setUpdateQarzdorlikQoldiqlariniKiritish(!updateDocuments);
    setUpdateXodimlarQoldigi(!updateDocuments);
    setUpdateSavdo(!updateDocuments);
    setUpdateServis(!updateDocuments);
  };
  const onChangeDeleteDocuments = () => {
    setDeleteDocuments(!deleteDocuments);
    setDeletePB(!deleteDocuments);
    setDeleteRB(!deleteDocuments);
    setDeleteODp(!deleteDocuments);
    setDeleteVseDocument(!deleteDocuments);
    setDeleteRaschet(!deleteDocuments);
    setDeleteRasxod(!deleteDocuments);
    setDeleteIshlabChiqarish(!deleteDocuments);
    setDeleteKassagaNaqdPulTushumi(!deleteDocuments);
    setDeleteKNPCH(!deleteDocuments);
    setDeleteIntervizatsiya(!deleteDocuments);
    setDeletePeremesheniyaTovara(!deleteDocuments);
    setDeletePostupleniyaTovara(!deleteDocuments);
    setDeleteSpisaniyaTovara(!deleteDocuments);
    setDeleteMahsulotlarniKlientdanQaytarish(!deleteDocuments);
    setDeleteMahsulotlarniYukBeruvchigaQaytarish(!deleteDocuments);
    setDeleteBankQoldiqlariniKiritish(!deleteDocuments);
    setDeleteKassaQoldiqlariniKiritish(!deleteDocuments);
    setDeleteMahsulotQoldiqlariniKiritish(!deleteDocuments);
    setDeleteQarzdorlikQoldiqlariniKiritish(!deleteDocuments);
    setDeleteXodimlarQoldigi(!deleteDocuments);
    setDeleteSavdo(!deleteDocuments);
    setDeleteServis(!deleteDocuments);
  };

  return (
    <>
      <Checkbox
        checked={createDocuments}
        onChange={onChangeCreateDocuments}
      >
        Create
      </Checkbox>
      <Checkbox
        checked={readDocuments}
        onChange={onChangeReadDocuments}
      >
        Read
      </Checkbox>
      <Checkbox
        checked={updateDocuments}
        onChange={onChangeUpdateDocuments}
      >
        Update
      </Checkbox>
      <Checkbox
        checked={deleteDocuments}
        onChange={onChangeDeleteDocuments}
      >
        Delete
      </Checkbox>

      <Route path="/Settings/Access/kassir/Documents/PrixodBank">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createPB}
              onChange={() => setCreatePB(!createPB)}
            >
              Create - Prixod Bank
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readPB}
              onChange={() => setReadPB(!readPB)}
            >
              Read - Prixod Bank
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updatePB}
              onChange={() => setUpdatePB(!updatePB)}
            >
              Update - Prixod Bank
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deletePB}
              onChange={() => setDeletePB(!deletePB)}
            >
              Delete - Prixod Bank
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/kassir/Documents/RasxodBank">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createRB}
              onChange={() => setCreateRB(!createRB)}
            >
              Create - Rasxod Bank
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readRB}
              onChange={() => setReadRB(!readRB)}
            >
              Read - Rasxod Bank
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateRB}
              onChange={() => setUpdateRB(!updateRB)}
            >
              Update - Rasxod Bank
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteRB}
              onChange={() => setDeleteRB(!deleteRB)}
            >
              Delete - Rasxod Bank
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/kassir/Documents/OchistitDp">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createODp}
              onChange={() => setCreateODp(!createODp)}
            >
              Create - OchistitDp
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox checked={readODp} onChange={() => setReadODp(!readODp)}>
              Read - OchistitDp
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateODp}
              onChange={() => setUpdateODp(!updateODp)}
            >
              Update - OchistitDp
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteODp}
              onChange={() => setDeleteODp(!deleteODp)}
            >
              Delete - OchistitDp
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/kassir/Documents/VseDocument">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createVseDocument}
              onChange={() => setCreateVseDocument(!createVseDocument)}
            >
              Create - Vse Document
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readVseDocument}
              onChange={() => setReadVseDocument(!readVseDocument)}
            >
              Read - Vse Document
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateVseDocument}
              onChange={() => setUpdateVseDocument(!updateVseDocument)}
            >
              Update - Vse Document
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteVseDocument}
              onChange={() => setDeleteVseDocument(!deleteVseDocument)}
            >
              Delete - Vse Document
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/kassir/Documents/Raschet">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createRaschet}
              onChange={() => setCreateRaschet(!createRaschet)}
            >
              Create - Raschet
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readRaschet}
              onChange={() => setReadRaschet(!readRaschet)}
            >
              Read - Raschet
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateRaschet}
              onChange={() => setUpdateRaschet(!updateRaschet)}
            >
              Update - Raschet
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteRaschet}
              onChange={() => setDeleteRaschet(!deleteRaschet)}
            >
              Delete - Raschet
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/kassir/Documents/Rasxod">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createRasxod}
              onChange={() => setCreateRasxod(!createRasxod)}
            >
              Create - Rasxod
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readRasxod}
              onChange={() => setReadRasxod(!readRasxod)}
            >
              Read - Rasxod
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateRasxod}
              onChange={() => setUpdateRasxod(!updateRasxod)}
            >
              Update - Rasxod
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteRasxod}
              onChange={() => setDeleteRasxod(!deleteRasxod)}
            >
              Delete - Rasxod
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/kassir/Documents/IshlabChiqarish">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createIshlabChiqarish}
              onChange={() => setCreateIshlabChiqarish(!createIshlabChiqarish)}
            >
              Create - Ishlab Chiqarish
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readIshlabChiqarish}
              onChange={() => setReadIshlabChiqarish(!readIshlabChiqarish)}
            >
              Read - Ishlab Chiqarish
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateIshlabChiqarish}
              onChange={() => setUpdateIshlabChiqarish(!updateIshlabChiqarish)}
            >
              Update - Ishlab Chiqarish
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteIshlabChiqarish}
              onChange={() => setDeleteIshlabChiqarish(!deleteIshlabChiqarish)}
            >
              Delete - Ishlab Chiqarish
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/kassir/Documents/KassagaNaqdPulTushumi">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createKassagaNaqdPulTushumi}
              onChange={() => setCreateKassagaNaqdPulTushumi(!createKassagaNaqdPulTushumi)}
            >
              Create - Kassaga Naqd Pul Tushumi
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readKassagaNaqdPulTushumi}
              onChange={() => setReadKassagaNaqdPulTushumi(!readKassagaNaqdPulTushumi)}
            >
              Read - Kassaga Naqd Pul Tushumi
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateKassagaNaqdPulTushumi}
              onChange={() => setUpdateKassagaNaqdPulTushumi(!updateKassagaNaqdPulTushumi)}
            >
              Update - Kassaga Naqd Pul Tushumi
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteKassagaNaqdPulTushumi}
              onChange={() => setDeleteKassagaNaqdPulTushumi(!deleteKassagaNaqdPulTushumi)}
            >
              Delete - Kassaga Naqd Pul Tushumi
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/kassir/Documents/KassagaNaqdPulChiqimi">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createKNPCH}
              onChange={() => setCreateKNPCH(!createKNPCH)}
            >
              Create - Kassaga Naqd Pul Chiqimi
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox checked={readKNPCH} onChange={() => setReadKNPCH(!readKNPCH)}>
              Read - Kassaga Naqd Pul Chiqimi
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateKNPCH}
              onChange={() => setUpdateKNPCH(!updateKNPCH)}
            >
              Update - Kassaga Naqd Pul Chiqimi
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteKNPCH}
              onChange={() => setDeleteKNPCH(!deleteKNPCH)}
            >
              Delete - Kassaga Naqd Pul Chiqimi
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/kassir/Documents/Intervizatsiya">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createIntervizatsiya}
              onChange={() => setCreateIntervizatsiya(!createIntervizatsiya)}
            >
              Create - Intervizatsiya
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox checked={readIntervizatsiya} onChange={() => setReadIntervizatsiya(!readIntervizatsiya)}>
              Read - Intervizatsiya
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateIntervizatsiya}
              onChange={() => setUpdateIntervizatsiya(!updateIntervizatsiya)}
            >
              Update - Intervizatsiya
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteIntervizatsiya}
              onChange={() => setDeleteIntervizatsiya(!deleteIntervizatsiya)}
            >
              Delete - Intervizatsiya
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/kassir/Documents/PeremesheniyaTovara">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createPeremesheniyaTovara}
              onChange={() => setCreatePeremesheniyaTovara(!createPeremesheniyaTovara)}
            >
              Create - Peremesheniya Tovara
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readPeremesheniyaTovara}
              onChange={() => setReadPeremesheniyaTovara(!readPeremesheniyaTovara)}
            >
              Read - Peremesheniya Tovara
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updatePeremesheniyaTovara}
              onChange={() => setUpdatePeremesheniyaTovara(!updatePeremesheniyaTovara)}
            >
              Update - Peremesheniya Tovara
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deletePeremesheniyaTovara}
              onChange={() => setDeletePeremesheniyaTovara(!deletePeremesheniyaTovara)}
            >
              Delete - Peremesheniya Tovara
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/kassir/Documents/PostupleniyaTovara">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createPostupleniyaTovara}
              onChange={() => setCreatePostupleniyaTovara(!createPostupleniyaTovara)}
            >
              Create - Postupleniya Tovara
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readPostupleniyaTovara}
              onChange={() => setReadPostupleniyaTovara(!readPostupleniyaTovara)}
            >
              Read - Postupleniya Tovara
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updatePostupleniyaTovara}
              onChange={() => setUpdatePostupleniyaTovara(!updatePostupleniyaTovara)}
            >
              Update - Postupleniya Tovara
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deletePostupleniyaTovara}
              onChange={() => setDeletePostupleniyaTovara(!deletePostupleniyaTovara)}
            >
              Delete - Postupleniya Tovara
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/kassir/Documents/SpisaniyaTovara">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createSpisaniyaTovara}
              onChange={() => setCreateSpisaniyaTovara(!createSpisaniyaTovara)}
            >
              Create - Spisaniya Tovara
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox checked={readSpisaniyaTovara} onChange={() => setReadSpisaniyaTovara(!readSpisaniyaTovara)}>
              Read - Spisaniya Tovara
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateSpisaniyaTovara}
              onChange={() => setUpdateSpisaniyaTovara(!updateSpisaniyaTovara)}
            >
              Update - Spisaniya Tovara
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteSpisaniyaTovara}
              onChange={() => setDeleteSpisaniyaTovara(!deleteSpisaniyaTovara)}
            >
              Delete - Spisaniya Tovara
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/kassir/Documents/MahsulotlarniKlientdanQaytarish">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createMahsulotlarniKlientdanQaytarish}
              onChange={() => setCreateMahsulotlarniKlientdanQaytarish(!createMahsulotlarniKlientdanQaytarish)}
            >
              Create - Mahsulotlarni Klientdan Qaytarish
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readMahsulotlarniKlientdanQaytarish}
              onChange={() => setReadMahsulotlarniKlientdanQaytarish(!readMahsulotlarniKlientdanQaytarish)}
            >
              Read - Mahsulotlarni Klientdan Qaytarish
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateMahsulotlarniKlientdanQaytarish}
              onChange={() => setUpdateMahsulotlarniKlientdanQaytarish(!updateMahsulotlarniKlientdanQaytarish)}
            >
              Update - Mahsulotlarni Klientdan Qaytarish
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteMahsulotlarniKlientdanQaytarish}
              onChange={() => setDeleteMahsulotlarniKlientdanQaytarish(!deleteMahsulotlarniKlientdanQaytarish)}
            >
              Delete - Mahsulotlarni Klientdan Qaytarish
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/kassir/Documents/MahsulotlarniYukBeruvchigaQaytarish">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createMahsulotlarniYukBeruvchigaQaytarish}
              onChange={() => setCreateMahsulotlarniYukBeruvchigaQaytarish(!createMahsulotlarniYukBeruvchigaQaytarish)}
            >
              Create - Mahsulotlarni Yuk Beruvchiga Qaytarish
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readMahsulotlarniYukBeruvchigaQaytarish}
              onChange={() => setReadMahsulotlarniYukBeruvchigaQaytarish(!readMahsulotlarniYukBeruvchigaQaytarish)}
            >
              Read - Mahsulotlarni Yuk Beruvchiga Qaytarish
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateMahsulotlarniYukBeruvchigaQaytarish}
              onChange={() => setUpdateMahsulotlarniYukBeruvchigaQaytarish(!updateMahsulotlarniYukBeruvchigaQaytarish)}
            >
              Update - Mahsulotlarni Yuk Beruvchiga Qaytarish
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteMahsulotlarniYukBeruvchigaQaytarish}
              onChange={() => setDeleteMahsulotlarniYukBeruvchigaQaytarish(!deleteMahsulotlarniYukBeruvchigaQaytarish)}
            >
              Delete - Mahsulotlarni Yuk Beruvchiga Qaytarish
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/kassir/Documents/BankQoldiqlariniKiritish">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createBankQoldiqlariniKiritish}
              onChange={() => setCreateBankQoldiqlariniKiritish(!createBankQoldiqlariniKiritish)}
            >
              Create - Bank Qoldiqlarini Kiritish
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readBankQoldiqlariniKiritish}
              onChange={() => setReadBankQoldiqlariniKiritish(!readBankQoldiqlariniKiritish)}
            >
              Read - Bank Qoldiqlarini Kiritish
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateBankQoldiqlariniKiritish}
              onChange={() => setUpdateBankQoldiqlariniKiritish(!updateBankQoldiqlariniKiritish)}
            >
              Update - Bank Qoldiqlarini Kiritish
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteBankQoldiqlariniKiritish}
              onChange={() => setDeleteBankQoldiqlariniKiritish(!deleteBankQoldiqlariniKiritish)}
            >
              Delete - Bank Qoldiqlarini Kiritish
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/kassir/Documents/KassaQoldiqlariniKiritish">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createKassaQoldiqlariniKiritish}
              onChange={() => setCreateKassaQoldiqlariniKiritish(!createKassaQoldiqlariniKiritish)}
            >
              Create - Kassa Qoldiqlarini Kiritish
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readKassaQoldiqlariniKiritish}
              onChange={() => setReadKassaQoldiqlariniKiritish(!readKassaQoldiqlariniKiritish)}
            >
              Read - Kassa Qoldiqlarini Kiritish
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateKassaQoldiqlariniKiritish}
              onChange={() => setUpdateKassaQoldiqlariniKiritish(!updateKassaQoldiqlariniKiritish)}
            >
              Update - Kassa Qoldiqlarini Kiritish
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteKassaQoldiqlariniKiritish}
              onChange={() => setDeleteKassaQoldiqlariniKiritish(!deleteKassaQoldiqlariniKiritish)}
            >
              Delete - Kassa Qoldiqlarini Kiritish
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/kassir/Documents/MahsulotQoldiqlariniKiritish">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createMahsulotQoldiqlariniKiritish}
              onChange={() => setCreateMahsulotQoldiqlariniKiritish(!createMahsulotQoldiqlariniKiritish)}
            >
              Create - Mahsulot Qoldiqlarini Kiritish
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readMahsulotQoldiqlariniKiritish}
              onChange={() => setReadMahsulotQoldiqlariniKiritish(!readMahsulotQoldiqlariniKiritish)}
            >
              Read - Mahsulot Qoldiqlarini Kiritish
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateMahsulotQoldiqlariniKiritish}
              onChange={() => setUpdateMahsulotQoldiqlariniKiritish(!updateMahsulotQoldiqlariniKiritish)}
            >
              Update - Mahsulot Qoldiqlarini Kiritish
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteMahsulotQoldiqlariniKiritish}
              onChange={() => setDeleteMahsulotQoldiqlariniKiritish(!deleteMahsulotQoldiqlariniKiritish)}
            >
              Delete - Mahsulot Qoldiqlarini Kiritish
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/kassir/Documents/QarzdorlikQoldiqlariniKiritish">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createQarzdorlikQoldiqlariniKiritish}
              onChange={() => setCreateQarzdorlikQoldiqlariniKiritish(!createQarzdorlikQoldiqlariniKiritish)}
            >
              Create - Qarzdorlik Qoldiqlarini Kiritish
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readQarzdorlikQoldiqlariniKiritish}
              onChange={() => setReadQarzdorlikQoldiqlariniKiritish(!readQarzdorlikQoldiqlariniKiritish)}
            >
              Read - Qarzdorlik Qoldiqlarini Kiritish
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateQarzdorlikQoldiqlariniKiritish}
              onChange={() => setUpdateQarzdorlikQoldiqlariniKiritish(!updateQarzdorlikQoldiqlariniKiritish)}
            >
              Update - Qarzdorlik Qoldiqlarini Kiritish
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteQarzdorlikQoldiqlariniKiritish}
              onChange={() => setDeleteQarzdorlikQoldiqlariniKiritish(!deleteQarzdorlikQoldiqlariniKiritish)}
            >
              Delete - Qarzdorlik Qoldiqlarini Kiritish
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/kassir/Documents/XodimlarQoldigi">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createXodimlarQoldigi}
              onChange={() => setCreateXodimlarQoldigi(!createXodimlarQoldigi)}
            >
              Create - Xodimlar Qoldigi
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readXodimlarQoldigi}
              onChange={() => setReadXodimlarQoldigi(!readXodimlarQoldigi)}
            >
              Read - Xodimlar Qoldigi
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateXodimlarQoldigi}
              onChange={() => setUpdateXodimlarQoldigi(!updateXodimlarQoldigi)}
            >
              Update - Xodimlar Qoldigi
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteXodimlarQoldigi}
              onChange={() => setDeleteXodimlarQoldigi(!deleteXodimlarQoldigi)}
            >
              Delete - Xodimlar Qoldigi
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/kassir/Documents/Savdo">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createSavdo}
              onChange={() => setCreateSavdo(!createSavdo)}
            >
              Create - Savdo
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readSavdo}
              onChange={() => setReadSavdo(!readSavdo)}
            >
              Read - Savdo
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateSavdo}
              onChange={() => setUpdateSavdo(!updateSavdo)}
            >
              Update - Savdo
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteSavdo}
              onChange={() => setDeleteSavdo(!deleteSavdo)}
            >
              Delete - Savdo
            </Checkbox>
          </Col>
        </Row>
      </Route>
      <Route path="/Settings/Access/kassir/Documents/Servis">
        <Divider />
        <Row>
          <Col span="12">
            <Checkbox
              checked={createServis}
              onChange={() => setCreateServis(!createServis)}
            >
              Create - Servis
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={readServis}
              onChange={() => setReadServis(!readServis)}
            >
              Read - Servis
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={updateServis}
              onChange={() => setUpdateServis(!updateServis)}
            >
              Update - Servis
            </Checkbox>
          </Col>
          <Col span="12">
            <Checkbox
              checked={deleteServis}
              onChange={() => setDeleteServis(!deleteServis)}
            >
              Delete - Servis
            </Checkbox>
          </Col>
        </Row>
      </Route>
    </>
  );
};
export default CheckboxesOfKassirDocs;
