import { createContext, useState, useContext, ReactNode } from 'react';

import movies from './../data.json';
import { useDebounce } from './../hooks/useDebounce';

type ContextProviderProps = {
    children: ReactNode;
};

export type Data = typeof movies;

type Context = {
    data: Data;
    updateIsBookmarked: (id: number) => void;
    getSearchString: (searchString: string) => void;
};

const DataContext = createContext<Context | undefined>(undefined);

const DataProvider = ({ children }: ContextProviderProps) => {
    const [data, setData] = useState(movies);
    const [search, setSearch] = useDebounce('', 500);

    const updateIsBookmarked = (id: number) => {
        const index = data.findIndex((movie) => movie.id === id);
        const moviesCopy = [...data];
        moviesCopy[index] = {
            ...moviesCopy[index],
            isBookmarked: !moviesCopy[index].isBookmarked,
        };
        setData(moviesCopy);
    };

    const getSearchString = (searchString: string) => {
        setSearch(searchString);
    };

    const value = { data, updateIsBookmarked, getSearchString };

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
};

const useDataProvider = () => {
    const context = useContext(DataContext);

    if (!context) {
        throw new Error('useDataProvider must be used within a CountProvider');
    }

    return context;
};

export { useDataProvider, DataProvider };
