import { atom } from 'jotai'

export const userAtom = atom<{userId: string, userName: string}>({
  userId: sessionStorage.getItem("userId") as string,
  userName: sessionStorage.getItem("userName") as string,
})
