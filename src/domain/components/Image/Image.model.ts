import { HasDynamicProps } from "src/shared/models";

type ImageProps = {
  className?: string;
  alternativeText: string;
  sharedImageFileName: string;
} & HasDynamicProps;

export default ImageProps;
