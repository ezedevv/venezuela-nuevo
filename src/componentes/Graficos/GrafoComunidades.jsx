/** @format */

import React, { useState } from "react";
import "./Graficos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TiInfoLarge } from "react-icons/ti";
import { Tooltip, Select, theme, Button, Modal } from "antd";
import video from "./../../imagenes/InteraccionUsuariosInfluencia.mp4";
import imagen from "./../../imagenes/hashtag-menciones.png";
import imagen2 from "./../../imagenes/hashtag-menciones2.png";
import imagen3 from "./../../imagenes/hashtag-menciones3.png";
import imagen4 from "./../../imagenes/hashtag-menciones4.png";
import imagen5 from "./../../imagenes/hashtag-menciones5.png";
import imagen6 from "./../../imagenes/hashtag-menciones6.png";
//FILTRO FECHAS

import jsonFechas from "./../../datos/rango_fechas.json";

//FIN FILTRO FECHAS

export default function GraphComunidades() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // FILTRO FECHAS
  const [fechas, setFechas] = useState(jsonFechas.fechas);
  // console.log(jsonFechas);
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
  // // FIN FILTRO FECHAS

  const { token } = theme.useToken();

  return (
    <div className="fondo-grafo">
      <div className="card-body">
        {/* FILTRO FECHAS */}
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
              <video src={video} controls style={{ width: "100%", marginBottom:'1rem'}} />
              <div className="carta grafohashtagsmodal">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                ¡Qué bueno que hayas elegido este grafo! Anteriormente, habíamos
                visto el grafo de coocurrencia de hashtags y te explicaba como
                podías descubrir los hashtags más comentados y su coocurrencia
                con otros, para poder identificar las tendencias en las
                conversaciones y los temas más populares. Ahora, con esta nueva
                representación visual, podrás detectar los hashtags con mayor
                relevancia o centralidad en las conversaciones en función de las
                menciones, eso quiere decir, aquellos que estuvieron más
                conectados con menciones en las publicaciones. Cuando un hashtag
                está acompañado de varias menciones, es probable que esté
                vinculado a discusiones y conversaciones específicas en la red.
                Las menciones representan la interacción de los usuarios con ese
                hashtag en particular, lo que puede indicar que están
                participando en conversaciones relacionadas con ese tema. Esto
                puede ser una herramienta útil para comprender como interactúan
                los usuarios entre sí, e identificar aquellos más influyentes.
                También, puede ser relevante para comprender cómo se difunde la
                información en la red y cómo se conectan diferentes actores o
                temas a través de menciones y hashtags. Comprendiendo que el
                alcance y la difusión de un hashtag puede estar relacionado con
                la cantidad de menciones que recibe; en el grafo se muestra la
                comunidad más relevante, identificando aquellas menciones y
                hashtags más conectados o con mayor influencia en la red, por
                ende, podemos identificar los hashtags que están siendo
                utilizados con mayor grupo de usuarios y seguramente con
                intereses comunes, pudiéndolos considerar líderes de opción o
                influenciadores en la comunidad. Cada nodo representa un hashtag
                (color rosa) o una mención (color azul) y las aristas la
                relación entre ellos . Cada arista tiene un peso que indique la
                frecuencia o intensidad de la relación entre los nodos, de ahí
                su grosor. Un hashtag acompañado de múltiples menciones en el
                grafo sugiere que ese hashtag tiene una mayor visibilidad,
                participación y potencial influencia en la red social. Está
                generando discusiones, atrayendo la atención de los usuarios y
                posiblemente formando comunidades en torno a él.
              </div>
            </Modal>
          </Tooltip>
        </div>

        <div className="contendor-gafosdeados">
    
        <Tooltip title="Click para ver el grafo">
          <a
            href={`https://qsngrafos.vercel.app/hasgtags-menciones/medios_instituciones/grafo_hashtags_menciones-${filtroFecha}.html`}
            target="_blank"
          >
                  {/* <div className="subtitulo-carta" style={{fontSize:'20px'}}>Comunidades completas</div> */}
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
                {filtroFecha === fechas[3] && (
                <img
                  src={imagen}
                  className="imagen-grafo-hashtags-menciones"
                />
              )}
            </div>
          </a>
        </Tooltip>
        {/* <Tooltip title="Click para ver el grafo">
          <a
            href={`https://qsngrafos.vercel.app/hasgtags-menciones/medios_instituciones/grafo_hashtags_menciones-${filtroFecha}_todas.html`}
            target="_blank"
          >
            <div className="subtitulo-carta"  style={{fontSize:'20px'}}>Comunidades de candidatos</div>
            <div>
              {filtroFecha === fechas[0] && (
                <img src={imagen4} className="imagen-grafo-hashtags-menciones" />
              )}
              {filtroFecha === fechas[1] && (
                <img
                  src={imagen5}
                  className="imagen-grafo-hashtags-menciones"
                />
              )}
              {filtroFecha === fechas[2] && (
                <img
                  src={imagen6}
                  className="imagen-grafo-hashtags-menciones"
                />
              )}
               {filtroFecha === fechas[3] && (
                <img
                  src={imagen4}
                  className="imagen-grafo-hashtags-menciones"
                />
              )}
            </div>
          </a>
        </Tooltip> */}
        </div>

        {/* <div className="videosExplicativos carta">
          <div className="titulo-grafo-analisis ">
            Análisis República Dominicana {filtroFecha.slice(0, 10)}
          </div>
          <VideosExplicativos fechas={filtroFecha} />
        </div> */}
      </div>
    </div>
  );
}
