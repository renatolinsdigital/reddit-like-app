import axios, { AxiosError, AxiosResponse, Canceler } from 'axios';
import { useEffect, useState } from 'react';
import { PostEntryInfo, PostsEntriesResponse } from 'src/domain/models';

const POSTS_ENTRIES_ENDPOINT = 'https://www.mocky.io/v2/5a6bc16631000078341b8b77';
const axiosInstance = axios.create();

interface UsePostsEntriesProps {
  hookRefresher?: boolean
  inputQuery?: string;
}

function usePostsEntries({ hookRefresher, inputQuery }: UsePostsEntriesProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [originalPostsEntries, setOriginalPostsEntries] = useState<PostEntryInfo[]>([]);

  useEffect(() => {
    setOriginalPostsEntries([]);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    let canceler: Canceler;
    setOriginalPostsEntries([]);
    axiosInstance.get<PostsEntriesResponse>(POSTS_ENTRIES_ENDPOINT, {
      // This wierd pattern works pretty well within axios, avoiding too many api calls to be made at once
      cancelToken: new axios.CancelToken((axiosCanceler: Canceler) => canceler = axiosCanceler)
    })
      .then((response: AxiosResponse<PostsEntriesResponse>) => {
        const fetchedPostsEntries: PostEntryInfo[] = response.data.links;
        setOriginalPostsEntries(previousEntries => [...previousEntries, ...fetchedPostsEntries]);
        setTotalResults(fetchedPostsEntries.length);
        setIsLoading(false);
      })
      .catch((error: Error | AxiosError) => {
        if (axios.isCancel(error)) return;
        setHasError(true);
        setIsLoading(false);
        throw error;
      });
    return () => canceler();
  }, [hookRefresher]);

  return {
    isLoading,
    hasError,
    totalResults,
    originalPostsEntries
  };

}

export default usePostsEntries;
