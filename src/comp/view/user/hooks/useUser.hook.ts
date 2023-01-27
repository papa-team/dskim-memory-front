import UserSeekApiStub from "~/comp/api/user/query/rest/UserSeekApiStub";
import {useQuery, useQueryClient} from "react-query";

export const useUser = (id: string) => {
  const {genQueryKey, queryFn} = UserSeekApiStub.findUser;
  const queryKey = genQueryKey(id);

  const { data, isLoading, refetch} = useQuery({
    queryKey,
    queryFn: async ({queryKey}) => {
      // const [, , id] = queryKey;
      const res = await queryFn(id);
      return res.data;
    },
    enabled: false,
    refetchOnWindowFocus: false
  })

  const queryClient = useQueryClient();

  return {
    userData: data,
    isLoading,
    userRefetch: refetch,
  }
}
