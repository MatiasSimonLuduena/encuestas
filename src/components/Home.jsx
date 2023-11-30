/* eslint-disable react/prop-types */
import { useState } from "react"

import "../styles/home.css"

const Home = ({ pag, setPag, questions, data, setData }) => {
  const [select, setSelect] = useState(null);
  const [choice, setChoice] = useState([]);
  const [texta, setTexta] = useState("");

  return (
    <div className="container">
      {questions.slice(pag - 1, pag).map((item, index) => (
        <div key={index} className="questions">
          <p style={{ margin: 5 }}>Pregunta {pag}</p>
          <p className="question">{item.question}</p>
          <p className="correcta" style={{ color: item.choice && "red" }}>
            {
              item.choice ?
              "Puedes seleccionar más de una opción" :
              "Selecciona la opción correcta"
            }
          </p>
          <div className="res">
            {item.res.map((r, i) => (
              <p key={i} onClick={() => {
                item.justify ?
                (
                  item.choice ? setChoice([...choice, r]) : setSelect(r)
                ) :
                setPag(pag + 1);
                setData({...data, [pag]: texta ? [r, texta] : r});
              }}
                style={{ backgroundColor: select === r ? "rgb(200, 200, 200)" : (choice.includes(r) && "rgb(200, 200, 200)") }}
              >{r}</p>
            ))}
          </div>
          {item.justify && (
            <> 
              <span>Opcional</span>
              <textarea placeholder="Justifica tu respuesta aquí"
                value={texta} onChange={e => setTexta(e.target.value)}
              ></textarea>
              {select ?
              (
                <button className="button"
                  onClick={() => {
                    setSelect(null);
                    setTexta("");
                    setPag(pag + 1);
                    setData({...data, [pag]: [select, texta]});
                  }}
                >Siguiente</button>
              ) : choice.length ? (
                <button className="button"
                  onClick={() => {
                    setSelect(null);
                    setTexta("");
                    setPag(pag + 1);
                    setData({...data, [pag]: {choice, texta}});
                  }}
                >Siguiente</button>
              ) : (
                <button className="buttonNone">Siguiente</button>
              )}
            </>
          )}
        </div>
      ))}
      <h2>Sus respuestas son 100% anonimas.</h2>
    </div>
  )
}

export default Home