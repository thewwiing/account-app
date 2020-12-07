import React, {useState, useEffect} from "react";

import {Accounts, Filter} from './containers';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import {accounts, currencies} from './shared/helpers';


export default function App() {
    const [filters, setFilters] = useState([]);
    const [order, setOrder]     = useState('');
    const [set, setSet]         = useState(accounts);

    const filterChangeHandler = (value) => {
        if (!filters.includes(value)) {
            setFilters([...filters, value]);
        } else {
            let temp = filters;
            temp.splice(filters.indexOf(value), 1);
            setFilters([...temp]);
        }
    };

    useEffect(() => {
        if (!filters.length) {
            setSet([...accounts]);
            return;
        }
        const tempSet = accounts.filter(item => filters.includes(item['currency']));
        setSet([...tempSet]);
    }, [filters]);

    // useEffect(() => {
    //     if (!order) {
    //         return;
    //     }
    //     let res = [];
    //     if (order === 1) res = set.sort((a, b) => a['sum'] - b['sum']);
    //     if (order === 2) res = set.sort((a, b) => b['sum'] - a['sum']);
    //     setSet([...res]);
    // }, [order]);

    const orderHandler = (e) => setOrder(e.target.value);



    return (
        <div className="app">
            <Container component='div' maxWidth='md'>
                <Grid component='div'
                      xs={6}
                      item
                >
                    <Filter
                        orderHandler={orderHandler}
                        onChange={filterChangeHandler}
                        currencies={currencies}
                        filters={filters}
                        order={order}
                    />

                    <Accounts
                        set={set}
                    />
                </Grid>

            </Container>
        </div>
    );
}
