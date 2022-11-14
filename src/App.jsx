
import { useState } from 'react'
import "./Components/card.css"
import Cards from "./Components/Card.jsx"
import "./index.css"

function App() {
  const [empresa, setEmpresa] = useState('')
  const [nome, setFuncionario] = useState('')
  const [cargo, setCargo] = useState('')
  const [numero, setRegistro] = useState('')
  const [foto, setFoto] = useState('')
  const [Crachas, setCard] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function SalvarCard() {
    if (empresa == "" || nome == "" || cargo == ""|| numero == ""|| foto == ""|| nome == "") {
      alert("Preencha todos os campos");
    } else {
      setCard([...Crachas, {
        Empresa: empresa,
        Nome: nome,
        Cargo: cargo,
        Matricula: numero,
        Foto: foto,

      }])
    }
  }

  
  return (

    <div className="App">

      <header className="app-Header">
        <h1>Criar crachá</h1>
      </header>
      <div>
        <fieldset>
          <legend>Formulário de cadastro </legend>


          <div className="form" onSubmit={handleSubmit}>
            <form>
              <label>Empresa</label>
              <input className="input" onChange={(event) => setEmpresa(event.target.value)}
                value={empresa} placeholder="Digite o nome da Empresa"

              />
              <label>Funcionário</label>
              <input className="input" onChange={(event) => setFuncionario(event.target.value)}
                value={nome} placeholder="Digite o nome do Funcionário(a)"
              />
              <label>Cargo</label>
              <input className="input" onChange={(event) => setCargo(event.target.value)}
                value={cargo} placeholder="Digite o nome do Cargo"
              />
              <label>Registro</label>
              <input className="input" onChange={(event) => setRegistro(event.target.value)}
                value={numero} placeholder="Digite a Matricula"
              />
              <label>Foto</label>
              <input className="input" onChange={(event) => setFoto(event.target.value)}
                value={foto} placeholder="Faça upload da imagem"
              />

            </form>



            <button type="button" onClick={SalvarCard}>Salvar</button>           </div>
        </fieldset>
      </div>
      <div>


        {
          Crachas.map((cadastro) => {
            return (
            <Cards cadastro={cadastro}/>
            )
          })
        }
      </div>


    </div>
  )
}

export default App
