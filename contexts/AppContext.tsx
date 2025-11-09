
import React, { createContext, useState, useContext, ReactNode } from 'react';

type CursorVariant = 'default' | 'link' | 'text';

interface AppContextType {
  isReelPlaying: boolean;
  playReel: () => void;
  stopReel: () => void;
  cursorVariant: CursorVariant;
  setCursorVariant: (variant: CursorVariant) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isReelPlaying, setIsReelPlaying] = useState(false);
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default');

  const playReel = () => setIsReelPlaying(true);
  const stopReel = () => setIsReelPlaying(false);

  return (
    <AppContext.Provider value={{ isReelPlaying, playReel, stopReel, cursorVariant, setCursorVariant }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
