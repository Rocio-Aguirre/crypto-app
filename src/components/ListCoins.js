import React from 'react'
import RowCoin from './RowCoin'

const columns = [
    "",
    "Moneda",
    "Precio",
    "Cambio de precio (%)",
    "Volumen de 24 hs "
]
const ListCoins = ({coins, search}) => {
    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase()));
    return (
        <table className='table table-dark mt-4 table-hover'>
            <thead>
                <tr>
                    {
                        columns.map((colum, id) => (
                            <td key={id}>{colum}</td>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {filteredCoins.map((coin, i) =>(
                    <RowCoin coin={coin} key={i} i={i} />
                ))}
            </tbody>
        </table>
    )
}

export default ListCoins
