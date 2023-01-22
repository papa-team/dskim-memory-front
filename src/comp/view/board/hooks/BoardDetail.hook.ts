import {useQuery, useQueryClient} from "react-query";
import {useCallback} from "react";
import {Board} from "~/comp";
import BoardSeekApiStub from "~/comp/api/board/query/rest/BoardSeekApiStub";

export const useBoard = (boardId: string) => {
  const { genQueryKey, queryFn } = BoardSeekApiStub.findBoard;
  const queryKey = genQueryKey(boardId);

  const { data, isLoading, refetch } = useQuery({
    queryKey,
    queryFn: async ({queryKey}) => {
      const [, , id] = queryKey;
      const res =  await queryFn(id);
      return res.data;
    },
    // enabled: false,
  })

  const queryClient = useQueryClient();
  const optimisticUpdate = useCallback((_board: Board) => {
    queryClient.setQueryData(queryKey, _board);
  }, [queryClient]);

  return {
    board: data,
    isLoading,
    optimisticUpdate,
    refetch
  }
}
