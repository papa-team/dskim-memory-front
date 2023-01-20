class BoardStore {
  //
  private static instance;

  static getInstance() {
    if (BoardStore.instance === undefined) {
      BoardStore.instance = new BoardStore();
    }
    return BoardStore.instance;
  }

  boards;


}

export default BoardStore;
