/** @format */

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import imagen from "./../../imagenes/grafo_co-ocurencia_hashtags-2023-06-16-2023-06-16.PNG";
import imagen2 from "./../../imagenes/grafo_co-ocurencia_hashtags-2023-09-09-2023-09-09.png";
import imagen3 from "./../../imagenes/grafo_co-ocurencia_hashtags-2023-09-10-2023-09-10.png";
import "./Graficos.css";
import { Collapse, Tooltip, Button, Select, Modal } from "antd";
import { TiInfoLarge } from "react-icons/ti";
import video from "./../../imagenes/TendenciasConversaciones.mp4";
//FILTRO FECHAS

import jsonFechas from "./../../datos/rango_fechas.json";
//FIN FILTRO FECHAS

export default function GraphHashtags() {
  //FILTRO FECHAS
  const [fechas, setFechas] = useState(jsonFechas.fechas);
  const [filtroFecha, setFiltroFecha] = useState(fechas[0]);

  const opciones = fechas.slice(0, -1).map((fecha, index) => {
    return (
      <Select.Option key={index} value={fecha}>
        {fecha.slice(0, 10)}
      </Select.Option>
    );
  });

  const handleFiltroFechaChange = (valor) => {
    setFiltroFecha(valor);
    // console.log(valor);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="fondo-grafo">
      <div className="card-body">
        <div className="contenedorfiltrosinfo">
          <Select
            placeholder="Fechas"
            className="fechas-grafos"
            onChange={handleFiltroFechaChange}
            defaultValue={filtroFecha}
          >
            {opciones}
          </Select>

          <Tooltip title="Video explicativo del grafo">
            <Button
              className="boton-abrirnavegador"
              shape="circle"
              onClick={showModal}
            >
              <TiInfoLarge />
            </Button>

            <Modal
              title="Explicación grafo"
              open={isModalOpen}
              onCancel={handleCancel}
              width={1000}
              heigth={500}
              footer={null}
            >
              <video
                src={video}
                controls
                style={{ width: "100%", marginBottom: "1rem" }}
              />
              <div className="carta grafohashtagsmodal">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                ¡Hola! En esta oportunidad, te mostraré cómo interpretar grafos
                de coocurrencia de hashtags. Estos grafos son una herramienta
                poderosa para analizar tendencias, descubrir comunidades y
                visualizar las relaciones entre los hashtags. Cada comunidad
                está representada por un color, en el contexto de la
                coocurrencia de hashtags en un conjunto de comentarios, una
                comunidad representa el grupo de hashtags fuertemente
                relacionados entre sí, es decir, que tienden a aparecer juntos
                con frecuencia en los comentarios analizados. Esto puede indicar
                temas similares, discusiones relacionadas o tendencias
                compartidas dentro de esas comunidades, lo que te permite
                descubrir grupos temáticos o comunidades de interés. En fin,
                este tipo de grafos puede serte útil para identificar las
                tendencias más relevantes en un conjunto de comentarios. Los
                hashtags fuertemente conectados en el grafo son aquellos que
                coocurren con mayor frecuencia, lo que indica una relación
                temática o una tendencia popular y los puedes identificar ya sea
                porque pertenecen a la misma comunidad (visualmente están
                pintados del mismo color) o también por el grosor de las líneas
                que los unen, mientras más gruesa sea, mayor es la relación o
                coocurrencia de dichos hashtags en los comentarios. Además, un
                nodo mientras mayor sea su tamaño, representará un hashtag más
                comentado en las redes. Al identificar los hashtags más
                importantes en el grafo, también es posible determinar los
                influencers o usuarios más influyentes en una determinada
                temática. Aquellos hashtags que estén altamente conectados con
                otros hashtags y que tengan un tamaño de nodo grande podrían
                indicar la presencia de usuarios con mayor influencia en la
                conversación. Para conocer o identificar las menciones
                relacionadas a cada grupo de hashtags podrás ver el grafo de
                relaciones entre hashtags y menciones.
              </div>
            </Modal>
          </Tooltip>
        </div>

        <Tooltip title="Click para ver el grafo">
          <a
            href={`https://qsngrafos.vercel.app/co-ocurrencia/medios_instituciones/grafo_co-ocurencia_hashtags-${filtroFecha}.html`}
            target="_blank"
          >
            <div>
              {filtroFecha === fechas[0] && (
                <img src={imagen} className="imagen-grafo-hashtags-menciones" />
              )}
              {filtroFecha === fechas[1] && (
                <img
                  src={imagen2}
                  className="imagen-grafo-hashtags-menciones"
                />
              )}
              {filtroFecha === fechas[2] && (
                <img
                  src={imagen3}
                  className="imagen-grafo-hashtags-menciones"
                />
              )}
            </div>
          </a>
        </Tooltip>

        

      </div>
    </div>
  );
}
