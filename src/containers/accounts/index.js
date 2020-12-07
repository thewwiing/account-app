import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';




const Accounts = ({set}) => {
    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">

                <TableHead>
                    <TableRow>
                        <TableCell>Номер счета</TableCell>
                        <TableCell align="right">Сумма</TableCell>
                        <TableCell align="right">Валюта</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {set.map((item) => (
                        <TableRow key={item['id']}>
                            <TableCell component="th" scope="row">
                                {item['accountNumber']}
                            </TableCell>
                            <TableCell align="right">{item['sum']}</TableCell>
                            <TableCell align="right">{item['currency']}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default Accounts;
