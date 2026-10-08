import "./App.css";


function App() {
    return ( <div className="app">
      
      <nav className="navbar">
       <div className="logo"> 💧 Agua SV </div>
        <ul className="nav-links">
          <li> <a href="#inicio">Inicio</a> </li>
          <li> <a href="#escasez">Escasez</a> </li>
          <li> <a href="#consejos">Consejos</a></li>
        </ul>
      </nav>
           
      <section id="inicio" className="inicio">
        <div className="inicio-contenido">
         <h1> El agua es vida </h1>
           <p>
              La escasez de agua es un problema que afecta a muchas comunidades en El Salvador.
              Conocer la importancia del agua y aprender a utilizarla responsablemente es tarea de todos.
            </p> <a href="#escasez" className="boton"> Conoce el problema</a>
        </div>
      </section>
             
      <section id="escasez" className="seccion">
       <h2 className="seccion-titulo"> La escasez de agua en El Salvador </h2>
        <p className="seccion-descripcion">
          El agua es un recurso indispensable para la vida. Sin embargo,
          diferentes factores pueden afectar su disponibilidad y calidad.
          Por eso es importante conocer el problema y contribuir a su cuidado. </p>
                   
        <div className="tarjetas">
          
          <div className="tarjeta">
            <h3> Cambio climático</h3>
             <p> Los cambios en los patrones de lluvia y
                 el aumento de las temperaturas pueden afectar
                 la disponibilidad de agua.
              </p>
          </div>
          
          <div className="tarjeta">
            <h3> Deforestación</h3>
             <p> La pérdida de bosques puede afectar la
                  capacidad del suelo para almacenar
                  y filtrar el agua.
              </p>
          </div>
                         
          <div className="tarjeta">
            <h3> Contaminación</h3>
                <p> La contaminación de ríos, lagos y otras
                  fuentes reduce la cantidad de agua disponible
                  para diferentes usos.
                </p>
          </div>
        </div>
      </section>
            
      <section id="consejos" className="seccion consejos">
       <h2 className="seccion-titulo"> ¿Cómo podemos cuidar el agua? </h2>
       <p className="seccion-descripcion"> Cada persona puede contribuir al cuidado
        de este recurso mediante acciones sencillas en su vida cotidiana. </p>
                   
       <div className="lista-consejos">
          <div className="consejo"> 
           <strong>Cierra el grifo:</strong>
              evita dejarlo abierto mientras te cepillas los dientes.
         </div>
                         
         <div className="consejo"> 
            <strong>Reduce el tiempo de ducha:</strong>
             una ducha más corta ayuda a disminuir el desperdicio.
         </div>
            
          <div className="consejo"> 
            <strong>Repara las fugas:</strong>
             una pequeña fuga puede desperdiciar una cantidad considerable de agua.
         </div>
                                 
         <div className="consejo"> 
           <strong>Cuida los recursos naturales:</strong>
             proteger bosques, ríos y zonas de recarga ayuda a conservar el agua.
         </div>
                                 
          <div className="consejo"> 
           <strong>Reutiliza cuando sea posible:</strong>
               algunas aguas pueden aprovecharse para actividades
               que no requieren agua potable.
         </div>
       </div>
      </section>
                 
     <footer className="footer">
        <p> AguaSV — Concientización sobre la escasez de agua </p>
      </footer>
   </div>
 );
}
export default App;