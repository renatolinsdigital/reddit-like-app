/* 

= Default app theme = 

This file is the core of app's look and feel.
All values here are to be matching a design system crafted by UI/UX designers.

This file is used to construct a theme compatible with Styled components library,
which means that every component created with this library (having 'Styled' on its name)
will be able to use this strong-typed custom theme.

*/

import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {

  /* Company & App colors */

  colors: {

    // Branding
    primaryDark: '#CB3720',
    primaryDefault: '#E3472F',

    // Neutrals
    white: '#fff',
    dark: '#131313',
    gray1: '#fcfcfc',
    gray2: '#ECECEC',
    gray3: '#c3c3c3',
    inherit: 'inherit',
    transparent: 'transparent',

    // Semantic
    discussion: '#4271D6',
    ux_ui: '#00BBFF',
    case_study: '#F4973C',
    product_design: '#00E2AD',

  },

  /* Typography */

  fontSizes: {
    smallest: 0.75,
    small: 0.875,
    default: 1,
    large: 1.125,
    extraLarge: 1.375,
    huge: 1.5,
    jumbo: 2,
    biggest: 2.5,
  },

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },

  lineHeights: {
    small: 1,
    default: 1.2,
    tall: 1.5,
    taller: 1.8,
    big: 2,
    biggest: 2.4,
  },

  /* Timings */

  transitions: {
    defaultAll: 'all .2s ease',
    defaultTime: '.2s'
  }

};