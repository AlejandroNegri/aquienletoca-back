import React, { useEffect, useState } from "react";
import { Table, Modal } from "antd";


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import { getDatabase, ref, set } from "firebase/database";







function Main3() {

  const firebaseConfig = {
    apiKey: "AIzaSyDLoFO1QGfgkSfxdsp61UvOWz8Fn1IuqfQ",
    authDomain: "aquienletocadb.firebaseapp.com",
    projectId: "aquienletocadb",
    storageBucket: "aquienletocadb.appspot.com",
    messagingSenderId: "694316714292",
    appId: "1:694316714292:web:df183ccce10c275d1bfd61",
    measurementId: "G-BQM2NQ6DJM"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  const [modalVisible, setModalVisible] = useState(false);
  const [jugadorSeleccionado, setJugadorSeleccionado] = useState({});
  const [listaJugadoresMain, setListaJugadoresMain] = useState([
    {
      key: "1",
      nombre: "Ale Negri",
      pjsl: 7,
    },
    {
      key: "2",
      nombre: "Maxi Ceballos",
      pjsl: 12,
    },
    {
      key: "3",
      nombre: "Ramiro Cámara",
      pjsl: 4,
    },
    {
      key: "4",
      nombre: "Nico Chervo",
      pjsl: 10,
    },
  ]);

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
   getCities();
  }, []);

  async function getCities() {
    const jugadores = collection(db, 'jugadores');
    const citySnapshot = await getDocs(jugadores);
    const cityList = citySnapshot.docs.map(doc => doc.data());

    console.log("jugadores", cityList);

    setListaJugadoresMain(cityList);
  }


function writeUserData() {
  console.log("entra");
  const db = getDatabase();
  set(ref(db, '/jugadores/BRzjNjVz285JsO2kYCFE'), {
    nombre: "pepito",
    pjsl: 5,
  });
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

export default Main3;
