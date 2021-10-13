import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const CryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '62e35401bbmsh1aac8ebd509f22cp18872bjsn3ea67eb2fab4'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: CryptoApiHeaders })
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    }) 
})

export const {
    useGetCryptosQuery,
} = cryptoApi;