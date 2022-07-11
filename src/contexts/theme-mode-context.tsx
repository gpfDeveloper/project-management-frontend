import {
  createContext,
  FunctionComponent,
  ReactNode,
  useState,
  useContext,
} from 'react';

type ThemeMode = 'light' | 'dark';
type ThemeProps = {
  mode: ThemeMode;
  setMode: React.Dispatch<React.SetStateAction<ThemeMode>>;
};

const ThemeModeContext = createContext<ThemeProps>({
  mode: 'light',
  setMode: () => {},
});
export default ThemeModeContext;

type Props = {
  children: ReactNode;
};

export const ThemeModeProvider: FunctionComponent<Props> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('light');
  return (
    <ThemeModeContext.Provider
      value={{
        mode,
        setMode,
      }}
    >
      {children}
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => {
  const themeMode = useContext(ThemeModeContext);
  return themeMode;
};
