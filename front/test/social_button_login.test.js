import React from "react";

import {mount} from "enzyme";

import Signup from "../components/signup/signup";

describe('Social media href attribute should not changed', () => {
    // ******************* Facebook Button Login ******************
    it('href facebook authenticate link should exist', () => {
        const wrapper = mount(<Signup/>);
        expect(wrapper.find('a[href="/auth/facebook"]')).toHaveLength(1);
    });

    // ******************* Facebook Button Login ******************
    it('href google authenticate link should exist', () => {
        const wrapper = mount(<Signup/>);
        expect(wrapper.find('a[href="/auth/google"]')).toHaveLength(1);
    });

    // ******************* Facebook Button Login ******************
    it('href linkedin authenticate link should exist', () => {
        const wrapper = mount(<Signup/>);
        expect(wrapper.find('a[href="/auth/linkedin"]')).toHaveLength(1);
    });

    // ******************* Facebook Button Login ******************
    it('href twitter authenticate link should exist', () => {
        const wrapper = mount(<Signup/>);
        expect(wrapper.find('a[href="/auth/twitter"]')).toHaveLength(1);
    });
});