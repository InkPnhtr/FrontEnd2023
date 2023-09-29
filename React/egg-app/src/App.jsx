import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {



  const [counters, setCounters] = useState({
    mesa: "00000",
    votosMesa: 0,
    nroOrden: 0,
    voto: false,
    votosRecurridos: 0,
    votosImpugnados: 0,
  })

  const [listCounters, setListCounters] = useState([]);

  const [inputValue, setInputValue] = useState('');


  function agregarVoto() {
    if (event.key === 'Enter') {
      listCounters.push(counters);

      setCounters({
        ...counters, votosMesa: counters.votosMesa + 1,
        nroOrden: document.getElementById("i1").value,
      })
      // counters.votosMesa = counters.votosMesa +1;
      //const newCounters = { newCounters: counters};

      //setObjectArray([...listCounters, newCounters]);

      // listCounters.push(counters);
      // listCounters.push(counters);

      console.log(listCounters);
      setInputValue('')
      
    }
  }



  const [count, setCount] = useState(0)

  // listCounters.push(counters);
  // console.log(listCounters);


  counters.mesa = '1234';

  // listCounters.push(counters);
  // console.log(listCounters);

  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        <h1>MESA:{counters.mesa} </h1>
      </div>
      <h1>VotosMesa: {counters.votosMesa} </h1>
      <h1>NroOrden: {counters.nroOrden} </h1>
      <div className='enterData'>
        <label for="i1">Nro de Orden: </label>
        <input size={4} id='i1' type='number' placeholder='Orden' 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={agregarVoto}></input>
      </div>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count ++ {count}
        </button>

        <button onClick={() => setCount((count) => count - 1)}>
          count -- {count}
        </button>
 */}
        <button onClick={agregarVoto}>
          VtosMesa: {counters.votosMesa}
        </button>



        <button onClick={() => setCounters({ ...counters, votosImpugnados: counters.votosImpugnados + 1 })}>
          VtosImpug: {counters.votosImpugnados}
        </button>

        <button onClick={() => setCounters({ ...counters, votosRecurridos: counters.votosRecurridos + 1 })}>
          VtosRecur: {counters.votosRecurridos}
        </button>


        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>

        //console.log("splash"); */}


        <div>
          <table>
            <thead>
              <tr>
                <th>NroOrden</th>
                <th>VotosMesa</th>
                <th>Mesa</th>
              </tr>
            </thead>
            <tbody>
              {listCounters.map((item) => (
                <tr key={item.nroOrden}>
                  <td>{item.nroOrden}</td>
                  <td>{item.votosMesa}</td>
                  <td>{item.mesa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
      <p className="read-the-docs">
        LUCHE Y VUELVE!!!
      </p>
    </>
  )
}

export default App
