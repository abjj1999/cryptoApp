import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const CryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '4dfc059f59mshfbcc80152a0965ap1aa4d3jsndf5761350e07'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/exchanges';
const createReq = (url) => ({ url, Headers: CryptoApiHeaders })
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createReq('./coins')
        })
    }) 
})

export const {
    useGetCryptosQuery,
} = cryptoApi;