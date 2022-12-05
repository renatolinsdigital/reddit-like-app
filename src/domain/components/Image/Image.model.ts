import { HasDynamicProps } from 'src/shared/models';

export type ImageProps = {
  id?: string;
  className?: string;
  isVisible?: boolean;
  alternativeText: string;
  sharedImageFileName?: string;
  domainImageFileName?: string;
} & HasDynamicProps;

export type StyledImageProps = {
  isVisible?: boolean;
};

export default ImageProps;
