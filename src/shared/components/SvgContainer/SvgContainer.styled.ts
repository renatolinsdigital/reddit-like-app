import styled, { CSSObject } from 'styled-components';

const SvgContainerStyled = styled.svg(
  ({ theme }): CSSObject => {
    const { transitions } = theme;
    return {
      ' path': {
        transition: transitions?.default
      }
    }
  }

);


export default SvgContainerStyled;
