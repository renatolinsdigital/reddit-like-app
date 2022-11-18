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
          <><TextStyled>Loading...</TextStyled></>
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