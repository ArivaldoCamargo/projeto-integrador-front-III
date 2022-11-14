//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Cards(props) {
    return (
        <div>
          <div className="card"> 
                  
                <h1>{props.cadastro.empresa}</h1>
                <h1>{props.cadastro.nome}</h1>
             
                    
          </div>

           
        </div>
    )
}

export default Cards