import React, { useContext, useEffect, useState } from "react";

export const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState({ show: 'false', msg: '' });
    const [query, setQuery] = useState('titanic');

    const getMovies = async (url) => {
        setLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.Response === 'True') {
                setLoading(false);
                setError({
                    show: false,
                    msg: '',
                })
                setMovie(data.Search)
            } else {
                setError({
                    show: true,
                    msg: data.Error,
                })
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        let timerOut = setTimeout(() => {
            getMovies(`${API_URL}&s=${query}`)
        }, 500)
        return () => clearTimeout(timerOut);
    }, [query])

    return <AppContext.Provider value={{ movie, loading, error, query, setQuery }}>
        {children}
    </AppContext.Provider>


}

//Custom Hook

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext }    