import React from 'react';


class ClientComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           
            clients:[]
        }

    }

    buscarCliente(){  console.log("test");
         console.time("#buscarCliente");     
        fetch('http://localhost:8080/client')
        .then(response => {
 
            response.json().then(data => {
 
             this.setState({clients:data});
            })
 
        }).catch(err => {
            console.log(err);
        })
        console.timeEnd("#buscarCliente");
     }
    render(){
      
        return (
            <div className="container-sm">
                <h1 className = "text-center"> Lista de Clientes</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Nome</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.clients.map(
                                client  =>
                                <tr key ={client.id}>
                                    <td>{client.id}</td>
                                    <td>{client.name}</td> 
                                </tr>
                            )
                        }
                    </tbody>

                </table>

                <button className="btn btn-secondary btn-sm" onClick={()=>this.buscarCliente()}>
                    Buscar Clientes
                </button>

            </div>
        )
    }
}

export default ClientComponent