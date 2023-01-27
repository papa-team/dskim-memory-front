import UserSeekApiStub from "~/comp/api/user/query/rest/UserSeekApiStub";
import {useQuery, useQueryClient} from "react-query";

export const useLogin = (userId?: string, password?: string) => {
  const {genQueryKey, queryFn} = UserSeekApiStub.loginUser;
  const queryKey = genQueryKey(userId!, password!);

  const { data, isLoading, refetch} = useQuery({
    queryKey,
    queryFn: async ({queryKey}) => {
      // const [, , id] = queryKey;
      const res = await queryFn(userId!, password!);
      return res.data;
    },
    enabled: false,
  })

  const queryClient = useQueryClient();

  return {
    userLogin: data,
    isLoading,
    refetch,
  }
}
