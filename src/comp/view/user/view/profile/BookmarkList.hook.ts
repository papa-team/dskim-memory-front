import {useQuery, useQueryClient} from "react-query";
import {useCallback} from "react";
import {User} from "~/comp";
import UserSeekApiStub from "~/comp/api/user/query/rest/UserSeekApiStub";

export const useBookmarks = (userId: string) => {
  const { genQueryKey, queryFn } = UserSeekApiStub.findBookmarks;
  const queryKey = genQueryKey(userId);

  const { data, isLoading, refetch } = useQuery({
    queryKey,
    queryFn: async ({queryKey}) => {
      const [, , id] = queryKey;
      const res =  await queryFn(id);
      return res.data;
    },
    enabled: true,
    refetchOnWindowFocus: false
  })

  const queryClient = useQueryClient();
  const optimisticUpdate = useCallback((_user: User) => {
    queryClient.setQueryData(queryKey, _user);
  }, [queryClient]);

  return {
    bookmarks: data,
    isLoading,
    optimisticUpdate,
    refetch
  }
}
