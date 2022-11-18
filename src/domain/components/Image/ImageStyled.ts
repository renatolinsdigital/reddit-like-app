import styled, { CSSObject } from 'styled-components';
import { StyledImageProps } from './Image.model';

const ImageStyled = styled.img<StyledImageProps>(
  ({ isVisible = true }): CSSObject => {
    return {
      display: isVisible ? 'flex' : 'none'
    };
  },
);

export default ImageStyled;
