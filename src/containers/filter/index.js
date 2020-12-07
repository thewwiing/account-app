import React from 'react';

const Filter = (props) => {
    const {
        currencies,
        onChange,
        filters
    } = props;

    return (
        <div className='filters'>

            <div className="filters__item">
                {
                    currencies.map(filter => (
                        <label key={filter['id']}
                               htmlFor={filter['id']}
                        >
                            <input
                                type='checkbox'
                                onChange={() => onChange(filter['value'])}
                                checked={filters.includes(filter['value'])}
                                id={filter['id']}
                            />
                            <span>{filter['value']}</span>
                        </label>
                    ))
                }
            </div>

            <div className="filters__item">

            </div>

        </div>
    )
};

export default Filter;
