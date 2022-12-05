import { useEffect, useState } from 'react';

const useImportAppImages = (sharedImageFileName?: string, domainImageFileName?: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | string>('');
  const [staticImageUrl, setStaticImageUrl] = useState<string>('');

  const isShared = sharedImageFileName !== undefined;

  useEffect(() => {
    const createStaticImageUrl = async () => {
      try {
        const importResponse = await import(
          `/src/${isShared ? 'shared' : 'domain'}/images/${
            isShared ? sharedImageFileName : domainImageFileName
          }`
        );
        setStaticImageUrl(importResponse.default);
      } catch (error) {
        setError(String(error));
      } finally {
        setIsLoading(false);
      }
    };

    createStaticImageUrl();
  }, [sharedImageFileName, domainImageFileName, isShared]);

  return {
    error,
    isLoading,
    staticImageUrl
  };
};

export default useImportAppImages;
