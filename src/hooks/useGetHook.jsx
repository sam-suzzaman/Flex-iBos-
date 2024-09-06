import { useEffect, useState } from "react";

export const useGetHook = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState(null);

    useEffect(() => {
        const getAllHandler = async (url) => {
            try {
                setIsLoading(true);
                setIsError(false);
                setError("");
                setData(null);

                const response = await fetch(url);
                const result = await response.json();

                setIsLoading(false);
                setIsError(false);
                setError("");
                setData(result);
            } catch (error) {
                setIsLoading(false);
                setIsError(true);
                setError(error?.message);
                setData(null);
            }
        };
        getAllHandler(url);
    }, []);

    return { isLoading, data, isError, error };
};
