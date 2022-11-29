import axios, { AxiosResponse, Canceler } from 'axios';
import { useEffect, useState } from 'react';
import { PostEntry } from 'src/domain/models';

const POSTS_ENTRIES_ENDPOINT = 'https://www.mocky.io/v2/5a6bc16631000078341b8b77';
const axiosInstance = axios.create();

function usePostsEntries() {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [postsEntries, setPostsEntries] = useState<any[]>([]);

  useEffect(() => {
    // This will clean old results for new usages of this hook
    setPostsEntries([]);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    let canceler: Canceler;
    axiosInstance.get<any>(POSTS_ENTRIES_ENDPOINT, {
      // This wierd pattern works pretty well within axios, avoiding too many api calls to be made at once
      cancelToken: new axios.CancelToken((axiosCanceler: Canceler) => canceler = axiosCanceler)
    })
      .then((response: AxiosResponse<any>) => {
        const fetchedPostsEntries = response.data.links;
        setPostsEntries(previousEntries => [...previousEntries, ...fetchedPostsEntries]);
        setTotalResults(fetchedPostsEntries.length);
        setIsLoading(false);
      })
      .catch((error: any) => {
        if (axios.isCancel(error)) return;
        setHasError(true);
        throw error;
      });
    return () => canceler();
  }, []);
  return { isLoading, postsEntries, hasError, totalResults };

}

export default usePostsEntries;
