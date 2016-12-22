import React from "react";
import {shallow} from "enzyme";
import Overview from "./overview";

describe('Overview', () => {
  it('Should render without an error', () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper).to.have.exactly(1).descendants('div')
  })
});
