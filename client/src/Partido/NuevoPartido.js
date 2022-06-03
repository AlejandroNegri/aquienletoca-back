import React, { useState } from "react";
import { List, Checkbox } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const data = [
  {
    key: "1",
    nombre: "Ale Negri2",
    pjsl: 7,
    selected: false,
  },
  {
    key: "2",
    nombre: "Maxi Ceballos",
    pjsl: 12,
    selected: false,
  },
  {
    key: "3",
    nombre: "Ramiro Cámara",
    pjsl: 4,
    selected: false,
  },
  {
    key: "4",
    nombre: "Nico Chervo",
    pjsl: 10,
    selected: false,
  },
];

function NuevoPartido() {
  const [seleccionados, setSeleccionados] = useState(0);

  function onChange(e, jugador) {
    e.target.checked
      ? setSeleccionados(seleccionados + 1)
      : setSeleccionados(seleccionados - 1);
    jugador.selected = e.target.checked;
    console.log(jugador);
  }

  return (
    <div className="App">
      <List
        header={<div>Seleccionados: {seleccionados}</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={(jugador) => (
          <List.Item>
            <Checkbox onChange={(e) => onChange(e, jugador)}>
              {jugador.nombre}
            </Checkbox>
          </List.Item>
        )}
      />
    </div>
  );
}

export default NuevoPartido;
