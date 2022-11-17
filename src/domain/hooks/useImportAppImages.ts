import { useEffect, useState } from 'react';

const useImportAppImages = (sharedImageFileName: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | string>();
  const [staticImageUrl, setStaticImageUrl] = useState<string>('');

  useEffect(() => {

    const createStaticImageUrl = async () => {
      try {
        const importResponse = await import(`/src/shared/images/${sharedImageFileName}`);
        setStaticImageUrl(importResponse.default);
      } catch (error) {
        setError(String(error));
      } finally {
        setIsLoading(false);
      }
    }

    createStaticImageUrl();
  }, [sharedImageFileName]);

  return {
    error,
    isLoading,
    staticImageUrl
  }

}

export default useImportAppImages;