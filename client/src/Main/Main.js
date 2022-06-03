import React, { useEffect, useState } from "react";
import { Table, Modal } from "antd";
import axios from "axios";

function Main() {
  const [modalVisible, setModalVisible] = useState(false);
  const [jugadorSeleccionado, setJugadorSeleccionado] = useState({});
  const [listaJugadoresMain, setListaJugadoresMain] = useState([]);

  const columns = [
    {
      title: "Jugador",
      dataIndex: "nombre",
      key: "nombre",
    },
    {
      title: "Jugados desde última lavada",
      dataIndex: "pjsl",
      key: "pjsl",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.pjsl - b.pjsl,
      sortDirections: ["ascend", "descend", "ascend"],
    },
  ];

  useEffect(() => {
    getJugadores();
    console.log("lista", listaJugadoresMain);
  }, []);

  useEffect(() => {
    console.log("lista", listaJugadoresMain);
  }, [listaJugadoresMain]);



  const getJugadores = async () => {
    try {
      const respuesta = await axios.get("http://localhost:3001/listajugadores");
      setListaJugadoresMain(respuesta.data);
    } catch (e) {
      console.log("error fetch", e);
    }
  };

  function writeUserData() {
    /* console.log("entra");
  const db = getDatabase();
  set(ref(db, '/jugadores/BRzjNjVz285JsO2kYCFE'), {
    nombre: "pepito",
    pjsl: 5,
  });*/
  }

  return (
    <div className="App">
      <button onClick={() => writeUserData()}></button>
      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              console.log("record: ", record);
              setModalVisible(true);
              setJugadorSeleccionado(record);
            }, // click row
          };
        }}
        columns={columns}
        dataSource={listaJugadoresMain}
      />
      <Modal
        title="Modal"
        visible={modalVisible}
        onOk={() => setModalVisible(true)}
        onCancel={() => setModalVisible(false)}
        okText="Aceptar"
        cancelText="Cancelar"
      >
        <p>
          ¿Estas seguro de que {jugadorSeleccionado.nombre} se llevará las
          camisetas hoy?
        </p>
      </Modal>
    </div>
  );
}

export default Main;
