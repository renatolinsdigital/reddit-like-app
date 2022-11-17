import { useImportAppImages } from 'src/domain/hooks';
import ImageProps from './Image.model';


const Image = (
  {
    className,
    alternativeText,
    sharedImageFileName,
    ...rest
  }: ImageProps) => {
  const { isLoading, error, staticImageUrl } = useImportAppImages(sharedImageFileName);
  if (error) return (<p>alternativeText</p>);
  return (
    <>
      {
        isLoading ? (
          <><p>Loading...</p></>
        ) : (
          <img
            {...rest}
            src={staticImageUrl}
            className={className}
            alt={alternativeText}
          />
        )}
    </>
  )
}

export default Image;