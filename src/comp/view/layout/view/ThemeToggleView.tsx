import React, {useCallback} from 'react';
import {Button} from "@mui/material";
import {useAtom} from "jotai";
import {themeAtom} from "~/comp";

const ThemeToggleView = () => {
  //
  const [darkMode, setDarkMode] = useAtom(themeAtom);
  const handleToggleMode = useCallback(() => {
    setDarkMode(!darkMode);
  }, [darkMode]);

  return (
    <Button onClick={handleToggleMode}>
      Theme Mode
    </Button>
  )
}

export default ThemeToggleView;
