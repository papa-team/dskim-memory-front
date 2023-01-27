import {useQuery, useQueryClient} from "react-query";
import {useCallback} from "react";
import {Board} from "~/comp";
import BoardSeekApiStub from "~/comp/api/board/query/rest/BoardSeekApiStub";

export const useBoards = () => {
  const { genQueryKey, queryFn } = BoardSeekApiStub.findBoards;
  const queryKey = genQueryKey();

  const { data, isLoading, refetch } = useQuery({
    queryKey,
    queryFn: async () => {
      const res =  await queryFn();
      return res.data;
    },
    enabled: true,
    refetchOnWindowFocus: false,
  })

  const queryClient = useQueryClient();
  const optimisticUpdate = useCallback((_board: Board) => {
    queryClient.setQueryData(queryKey, _board);
  }, [queryClient]);

  return {
    boards: data,
    isLoading,
    optimisticUpdate,
    refetch
  }
}
