import { useState } from 'react'
import './App.css'

function App() {
  // 1. Definimos los estados (Punto 2 del ejercicio)
  const [name, setName] = useState("Sofía");
  const [newName, setNewName] = useState("");

  // 2. Función para el Bonus: Cambiar nombre vía formulario
  const changeName = (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el form
    if (newName.trim() !== "") { // Verifica que no esté vacío
      setName(newName);          // Actualiza el nombre principal
      setNewName("");            // Limpia el input
    }
  };

  return (
    <div className="App">
      <section id="center">
        {/* Título (Punto 3) */}
        <h2>Teacher Name: {name}</h2>

        {/* Lista de profesores (Punto 4 y 5) */}
        <ul>
          <li onClick={() => setName("Data")} style={{ cursor: 'pointer' }}>Data</li>
          <li onClick={() => setName("Reyes")} style={{ cursor: 'pointer' }}>Reyes</li>
          <li onClick={() => setName("Yolanda")} style={{ cursor: 'pointer' }}>Yolanda</li>
        </ul>

        <div className="ticks"></div>

        {/* Bonus: Formulario */}
        <section id="next-steps">
          <form onSubmit={changeName} style={{ marginTop: '20px' }}>
            <input 
              type="text" 
              value={newName} 
              placeholder="add a name" 
              onChange={(e) => setNewName(e.target.value)} 
            />
            <button type="submit" className="counter" style={{ marginLeft: '10px' }}>
              Add
            </button>
          </form>
        </section>
      </section>
    </div>
  )
}

export default App
