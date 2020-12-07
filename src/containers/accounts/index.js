import React from 'react';

import TableContainer from '@material-ui/core/TableContainer';
import TableHead      from '@material-ui/core/TableHead';
import TableCell      from '@material-ui/core/TableCell';
import TableBody      from '@material-ui/core/TableBody';
import Checkbox       from '@material-ui/core/Checkbox';
import TableRow       from '@material-ui/core/TableRow';
import Paper          from '@material-ui/core/Paper';
import Table          from '@material-ui/core/Table';

import {hideNumber} from "../../shared/helpers";

const Accounts = (props) => {
    const {
        toggleHiding,
        isHidden,
        set
    } = props;


    return (
        <div className='accounts'>
            <div className='accounts__disguise'>
                <span>Маскировка счетов:</span>
                <Checkbox
                    checked={isHidden}
                    onChange={toggleHiding}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </div>

            <TableContainer component={Paper}>

                <Table size="small" aria-label="a dense table">

                    <TableHead>
                        <TableRow>
                            <TableCell>Номер счета</TableCell>
                            <TableCell>Сумма</TableCell>
                            <TableCell>Валюта</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            set.map((item) => {
                                const number = item['accountNumber'];
                                const currentNumber = isHidden ? hideNumber(number) : number;
                                return(
                                    <TableRow key={item['id']}>
                                        <TableCell component="th" scope="row">
                                            {currentNumber}
                                        </TableCell>
                                        <TableCell>
                                            {item['sum']}
                                        </TableCell>
                                        <TableCell>
                                            {item['currency']}
                                        </TableCell>
                                    </TableRow>

                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    )
};

export default Accounts;
