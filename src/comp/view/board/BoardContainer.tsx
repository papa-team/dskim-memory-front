import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {useBoards} from "~/comp/view/board/hooks/BoardList.hook";
import BoardListView from "~/comp/view/board/view/BoardListView";
import {useNavigate} from "react-router-dom";

const BoardContainer = () => {
  //
  const navigate = useNavigate();
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

  const handleClick = () => {
    refetch();
  }
  return (
    <>
      <button onClick={handleClick}>조회</button>
      <br/>
      <button onClick={() => navigate("/post-new")}>새 글 작성하기</button>
      <br/>
      <BoardListView />
    </>
  );
}

export default BoardContainer;
