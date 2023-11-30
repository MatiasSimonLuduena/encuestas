import "../styles/load.css"

const Load = () => {
  return (
    <div className="load-container">
      <h1>Bienvenida mamá y gracias por participar</h1>
      <p>
        A continuación podrás responer 6 preguntas simples que forman parte de un estudio con fines educativos.
      </p>
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    </div>
  )
}

export default Load