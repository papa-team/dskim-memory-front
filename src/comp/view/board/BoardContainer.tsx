import React, {useCallback} from 'react';
import {useBoards} from "~/comp/view/board/hooks/BoardList.hook";
import BoardListView from "~/comp/view/board/view/BoardListView";
import {useNavigate} from "react-router-dom";
import {useAtom} from "jotai";
import {editableAtom} from "~/comp";

const BoardContainer = () => {
  //
  const navigate = useNavigate();
  const {refetch} = useBoards();

  const [,setEditable] = useAtom(editableAtom);

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

  const handleClick = async () => {
    await refetch();
  }

  const handleClickNewPost = useCallback(() => {
    navigate("/post-new");
    setEditable(false);
  }, []);

  return (
    <>
      <button onClick={handleClick}>조회</button>
      <br/>
      <button onClick={handleClickNewPost}>새 글 작성하기</button>
      <br/>
      <BoardListView />
    </>
  );
}

export default BoardContainer;
