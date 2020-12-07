import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl      from '@material-ui/core/FormControl';
import InputLabel       from '@material-ui/core/InputLabel';
import FormGroup        from '@material-ui/core/FormGroup';
import MenuItem         from '@material-ui/core/MenuItem';
import Checkbox         from '@material-ui/core/Checkbox';
import Select           from '@material-ui/core/Select';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    formControl: {
        width: '100%'
    }
}));

const Filter = (props) => {
    const classes = useStyles();
    const {
        orderHandler,
        currencies,
        onChange,
        filters,
        order
    } = props;


    return (
        <div className='filters'>
            <FormGroup row>
                {
                    currencies.map(filter => {
                        const isChecked = filters.includes(filter['value']);
                        return (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={isChecked}
                                        onChange={() => onChange(filter['value'])}
                                        color="primary"
                                    />
                                }
                                label={filter['value']}
                                key={filter['id']}
                            />
                        )
                    })
                }
            </FormGroup>


            <FormControl component='div' className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">
                    Сортировка по:
                </InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={order}
                    onChange={orderHandler}
                >
                    <MenuItem value={''}>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'1'}>возрастанию</MenuItem>
                    <MenuItem value={'2'}>убыванию</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
};

export default Filter;
