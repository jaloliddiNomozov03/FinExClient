import React, { useState } from "react";
import { Button, Row, Col, Space, Input, Modal } from "antd";
import "./vseDocument.css";

const { Search } = Input;
const onSearch = (value) => console.log(value);
const HeaderDocument = () => {
  const [isCreateModalVisble, setIsCreateModalVisible] = useState(false);

  const showCreateModal = () => {
    setIsCreateModalVisible(true);
  };

  const handleCreateOk = () => {
    setIsCreateModalVisible(false);
  };

  const handleCreateCancel = () => {
    setIsCreateModalVisible(false);
  };

  return (
    <Row>
      <Col span={4}>
        <Space>
          <Button type="primary" onClick={showCreateModal}>
            Create
          </Button>
          <Modal
            title=" Все Документы"
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
            centered
            style={{ fontSize: "13px" }}
          >
            <div style={{ fontSize: "13px" }}>
              <p>Bank qoldiqlarini kiritish</p>
              <p> Инвентаризация</p>
              <p>Kassa qoldiqlarini kiritish</p>
              <p>Qarzdorliklar oldiqlarini kiritish</p>
              <p> Kassaga naqt pul tushumi </p>
              <p> Kassaga naqt pul chiqimi </p>
              <p> Maxsulotlarn qoldiqlarini kiritish </p>
              <p> Maxsulotlarni kilentdan qaytarib olish </p>
              <p> Maxsulotlarni yuk beruvchiga qaytarish </p>
              <p> ОптовыеПродажи </p>
              <p> ОчититьДП </p>
              <p> ПеремищениеТоваров </p>
              <p> Поступление Товаров </p>
              <p> ПриходВБанк </p>
              <p> Производство </p>
              <p> РасходОтБанке </p>
              <p> Расходы </p>
              <p> Расчет Зарплаты </p>
              <p> Списания Таваров </p>
              <p> Хакдорликлар колдикларни киритиш </p>
            </div>
          </Modal>
        </Space>
      </Col>
      <Col span={8} offset={12} className="search">
        <Space>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
          />
          <Button type="primary">More actions</Button>
        </Space>
      </Col>
    </Row>
  );
};
export default HeaderDocument;
