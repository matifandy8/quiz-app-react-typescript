import React from "react"
import Home from "./Home"

import 'jest-enzyme';
import 'jest-styled-components';

import { mount } from 'enzyme';

let homeScreen: any;


beforeAll(() => {
    homeScreen = mount(
      <Home/>
    );
  });

