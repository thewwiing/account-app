import React     from 'react';
import {shallow} from 'enzyme';

import {Accounts, Filter} from "./containers";
import App from './app';

describe('(Component) app js', () => {

    let props = {};
    function generateWrapper(passedProps) {
        const defaultProps = {};
        props = {...defaultProps, ...passedProps};
        return shallow(
            <App {...props} />
        )
    }

    let wrapper;
    beforeEach(() => {
        wrapper = generateWrapper();
    });

    // RENDERING

    it('should renders',  () => {
        expect(wrapper.exists()).toBe(true)
    });

    it('should renders Accounts',  () => {
        expect(wrapper.find(Accounts).exists()).toBe(true)
    });

    it('should renders Filter',  () => {
        expect(wrapper.find(Filter).exists()).toBe(true)
    });


    // PROPS

    it('should pass right props to Accounts',  () => {
        const actual = wrapper.find(Accounts).prop('toggleHiding');
        expect(actual).toEqual(expect.any(Function))
    });

    // it('should simulate change order in Accounts',  () => {
    //     const accounts = wrapper.find(Accounts);
    //     const prevHide = accounts.prop('isHidden');
    //     console.log(accounts.props());
    //     const currentHide = accounts.prop('isHidden');
    //
    //     console.log('PREV HIDE!!!', prevHide);
    //     console.log('CURRENT HIDE!!!', currentHide);
    //
    // });
});
