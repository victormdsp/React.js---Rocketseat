import React from 'react';

export default class Body extends React.Component {

    render() {
        return (
            <div className= 'corpo'>
                <div className= 'primeiroCorpo'>
                    <h2>Balanço</h2>
                    <h3>Entrada</h3>
                    <p>R$ 5.000,00</p>

                    <h3>Saída</h3>
                    <p>R$ 2.000,00</p>

                    <h3>Total</h3>
                    <p>R$ 3.000,00</p>

                    <h2>Transações</h2>
                </div>

                <div className= 'tabelaCorpo'>
                    <table className= 'tabela'>
                        <thead className= 'thead'>
                            <tr>
                                <th>Descrição</th>
                                <th>Preço</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Luz</td>
                                <td>R$ 500,00</td>
                                <td>07/04/2021</td>
                            </tr>

                            <tr>
                                <td>Criação WebSite</td>
                                <td>R$ 5000,00</td>
                                <td>07/04/2021</td>
                            </tr>

                            <tr>
                                <td>Internet</td>
                                <td>R$ 200,00</td>
                                <td>07/04/2021</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}