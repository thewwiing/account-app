import React, {useState, useEffect} from "react";

import {Accounts, Filter} from './containers';

import {accounts, currencies} from './shared/helpers';

export default function App() {
    let [set, setSet] = useState(accounts);
    let [filters, setFilters] = useState([]);

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


    return (
        <div className="container">
            <div className="app">

                <Filter
                    currencies={currencies}
                    onChange={filterChangeHandler}
                    filters={filters}
                />

                <Accounts
                    set={set}
                />

            </div>
        </div>
    );
}
