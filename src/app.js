import React, {useState, useEffect} from "react";

import {Accounts, Filter} from './containers';

import Container from '@material-ui/core/Container';
import Grid      from '@material-ui/core/Grid';

import {accounts, currencies} from './shared/constants';


export default function App() {
    const [isHidden, toggleHiding] = useState(false);
    const [filters, setFilters]    = useState([]);
    const [order, setOrder]        = useState('');
    const [set, setSet]            = useState(accounts);

    const filterChangeHandler = (value) => {
        if (!filters.includes(value)) {
            setFilters([...filters, value]);
        } else {
            let temp = filters;
            temp.splice(filters.indexOf(value), 1);
            setFilters([...temp]);
        }
    };

    const orderHandler = (e) => setOrder(e.target.value);


    useEffect(() => {
        setOrder('');
        if (!filters.length) {
            setSet([...accounts]);
            return;
        }
        const tempSet = accounts.filter(item => filters.includes(item['currency']));
        setSet([...tempSet]);
    }, [filters]);

    useEffect(() => {
        if (!order) return;

        let res = [];
        if (+order === 1) res = set.sort((a, b) => Number(a.sum) - Number(b.sum));
        if (+order === 2) res = set.sort((a, b) => Number(b.sum) - Number(a.sum));
        setSet([...res]);
    }, [order]);


    const toggleNumberHiding = () => toggleHiding(!isHidden);

    return (
        <div className="app">
            <Container component='div' maxWidth='md'>
                <Grid component='div'
                      xs={12}
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
                        toggleHiding={toggleNumberHiding}
                        isHidden={isHidden}
                        set={set}
                    />
                </Grid>
            </Container>
        </div>
    );
}
