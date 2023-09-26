import { useParams, Link } from "react-router-dom";
import React, { useState } from "react";
import Inicio from "./Inicio";

const Encuesta = ({ listaEncuestas, responderEncuesta }) => {
    const { id } = useParams();
    const encuesta = listaEncuestas.find((enc) => enc.id === parseInt(id));

    const [selectedOptions, setSelectedOptions] = useState({});

    const handleOptionChange = (preguntaId, opcionId) => {
        setSelectedOptions({
            ...selectedOptions,
            [preguntaId]: opcionId,
        });
    };

    return (
        <div>
            <div className="encuesta-item-container">
                <div className="encuesta-item">
                    <h2>{encuesta.titulo}</h2>
                    <p>{encuesta.descripcion}</p>
                    <br />
                </div>
            </div>
            <div className="encuesta-item-container">
                <div className="encuesta-item">
                    <h2>Preguntas</h2>
                    <p>
                        {!encuesta.preguntas && <p>Sin preguntas definidas.</p>}
                        {encuesta.preguntas &&
                            encuesta.preguntas.map((pregunta) => (
                                <div key={pregunta.id}>
                                    <p>{pregunta.pregunta}</p>
                                    <ol>
                                        {pregunta.opciones.map((opcion) => (
                                            <div key={opcion.id}>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name={`opcion_${pregunta.id}`}
                                                        value={opcion.id}
                                                        checked={
                                                            selectedOptions[
                                                                pregunta.id
                                                            ] === opcion.id
                                                        }
                                                        onChange={() =>
                                                            handleOptionChange(
                                                                pregunta.id,
                                                                opcion.id
                                                            )
                                                        }
                                                    />
                                                    {opcion.texto}
                                                </label>
                                            </div>
                                        ))}
                                    </ol>
                                </div>
                            ))}
                    </p>
                    <br />
                </div>
            </div>
            {/*<button>Enviar</button>*/}
            <Link to="/" className="back">Volver</Link>
        </div>
    );
};

export default Encuesta;
