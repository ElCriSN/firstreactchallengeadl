import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Titulo from './components/Header.jsx';
import Card from './components/Card.jsx';
import Footer from './components/Footer.jsx';
import Descripcion from './components/Descripcion'

function App() {
  return (
    <div className="App">
      <Titulo titulo="Galería de Imágenes con React" />
      <hr></hr>
      <Descripcion texto="What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
      <Card src="https://placedog.net/500" titulo="Perruno Entusiasmado" descripcion="Un Perruno siendo muy Feliz" />
      <Card src="https://placedog.net/501" titulo="Perruno Alegrado" descripcion="Un Perruno siendo demasiado Feliz" />
      <Card src="https://placedog.net/502" titulo="Perruno Motivado" descripcion="Un Perruno siendo Feliz" />
      <Footer />
    </div>

  )
}

export default App;
