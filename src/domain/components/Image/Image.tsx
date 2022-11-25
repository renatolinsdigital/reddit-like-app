/* 

= Image component by Renato Lins =

This component aims to render images inside the project, by either looking for domain or shared images

Ps. This component is ready to be used as a domain component. For it to be a shared/shareable component, 
the TODO list must be addressed

*/

//TODO: Add 'isDomainImage' and unite this component with 'useImportAppImages'
//TODO: Research for options, file formats, etc for enhancing performance when possible
//TODO: Add a shimmer effect in place of the loading text
//TODO: Allow external images/url to be rendered as well
//TODO: Move this component to the 'shared' folder and make the necessary updates where it is being used

import ImageStyled from './ImageStyled';
import { ImageProps } from './Image.model';
import { TextStyled } from 'src/shared/components';
import { useImportAppImages } from 'src/domain/hooks';

const Image = (
  {
    id,
    className,
    isVisible,
    alternativeText,
    sharedImageFileName,
    domainImageFileName,
    ...rest
  }: ImageProps) => {

  const imageData = useImportAppImages(sharedImageFileName, domainImageFileName);

  if (!imageData || imageData.error) return (<TextStyled>{alternativeText}</TextStyled>);

  const { isLoading, staticImageUrl } = imageData;

  return (
    <>
      {
        isLoading ? (
          <TextStyled>Loading...</TextStyled>
        ) : (
          <ImageStyled
            id={id}
            {...rest}
            src={staticImageUrl}
            isVisible={isVisible}
            className={className}
            alt={alternativeText}
          />
        )
      }
    </>
  )
}

export default Image;