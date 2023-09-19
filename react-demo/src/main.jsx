import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const elemento = 
<>
  <h1>hola</h1>
  <p>mundo</p>
  <button>hola</button>
</>

// con mayuscula para diferenciar de los componentes de html nativo
function MiFuncion(xxx) {
  console.log(xxx)
  const {titulo, contenido} = xxx
  return (
  <>
  <h1>hola</h1>
  <p>mundo</p>
  <button>hola {xxx.titulo} y {titulo}</button>
  <Button params="xx"></Button>
  <Button2>holas children</Button2>
  </>
  )
}

function Button({params}) {
  return <button>{params}</button>
}

function Button2({children}) {
  return <button style={{background:"yellow"}}>{children}</button>
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  {elemento}
    {/* 
    // esto es algo estático 
     {elemento} 
    // esto es un componente 
    */}
    <MiFuncion titulo="yo!" contenido="mero" />
    <MiFuncion titulo="tu!" contenido="petatero" />
  </>
)
