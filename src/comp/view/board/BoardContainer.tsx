import React from 'react';
import {useBoards} from "~/comp/view/board/hooks/BoardList.hook";
import BoardListView from "~/comp/view/board/view/BoardListView";
import {IconButton} from "@mui/material";
import {Refresh} from "@mui/icons-material";

const BoardContainer = () => {
  //
  const {refetch} = useBoards();

  // const test = useQuery(ApiQuery.findBoards.queryKey, ApiQuery.findBoards.api,
  //   {
  //     enabled: false,
  //     onSuccess: (data) => {
  //       console.log('onSuccess', data);
  //     },
  //     onError: (error) => {
  //       console.log('onError', error);
  //     }
  //   }
  // );
  // const result = useMutation(
  //     ApiQuery.findBoards.queryKey,
  //     ApiQuery.findBoards.api,
  // );

  const handleClickRefresh = async () => {
    await refetch();
  }

  return (
    <>
      <IconButton
        onClick={handleClickRefresh}
      >
        <Refresh/>
      </IconButton>
      <BoardListView />
    </>
  );
}

export default BoardContainer;
