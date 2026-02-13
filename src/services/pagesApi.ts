import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PageItem } from "../types";

export type PagesResponse =
    | PageItem[]
    | { pages: PageItem[] }
    | string[]
    | { pages: string[] };

export const pagesApi = createApi({
    reducerPath: "pagesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://chalysh.pro",
    }),
    endpoints: (builder) => ({
        getPages: builder.query<PagesResponse, void>({
            query: () => "/birthday/api/pages",
        }),
    }),
});

export const { useGetPagesQuery } = pagesApi;
