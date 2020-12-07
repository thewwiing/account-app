import React from 'react';


const Accounts = ({set}) => {
    return (
        <table className='accounts'>
            <thead>
                <tr>
                    <th>Номер счета</th>
                    <th>Сумма</th>
                    <th>Валюта</th>
                </tr>
            </thead>
            <tbody>
                {
                    set.map(item => (
                        <tr className='accounts__item'
                            key={item['id']}
                        >
                            <th>
                                {item['accountNumber']}
                            </th>
                            <th>
                                {item['sum']}
                            </th>
                            <th>
                                {item['currency']}
                            </th>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
};

export default Accounts;
