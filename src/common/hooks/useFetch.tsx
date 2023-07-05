import React, {useCallback, useState} from "react";

export type FetchStateProps = {
    responseData: {},
    isLoading: boolean,
    error: {
        errorCode: number | null,
        errorMessage: string | null
    }
}

export type FetchResponse = {
    responseData: {},
    isLoading: boolean,
    error: {
        errorCode: number | null,
        errorMessage: string | null
    },
    ApiFetch: (api: ApiEndpoint) => Promise<void>
}

export type ApiEndpoint = {
    url: string,
    username: string,
    password: string
}

const useFetch = (): FetchResponse => {
    const [fetchProps, setFetchProps] = useState<FetchStateProps>({
        responseData: {},
        isLoading: false,
        error: {
            errorCode: null,
            errorMessage: null,
        }
    });

    const fetchAPI = useCallback(async (api: ApiEndpoint) => {

        setFetchProps({
            responseData: {},
            isLoading: true,
            error: {
                errorCode: null,
                errorMessage: null,
            }
        })

        const headers: HeadersInit = {
            'Content-Type': 'application/json',
            Authorization: (!api.username && !api.password) ? "" : `Basic ${btoa(`${api.username}:${api.password}`)}`
        };

        const response = await fetch(api.url, {headers});
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const responseJson = await response.json();

        setFetchProps({
            responseData: responseJson,
            isLoading: false,
            error: {
                errorCode: null,
                errorMessage: null,
            }
        })


    }, []);

    return {...fetchProps, ApiFetch: fetchAPI};
};

export default useFetch;