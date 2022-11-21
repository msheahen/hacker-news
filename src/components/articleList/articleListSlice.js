import {createAsyncThunk, createReducer, createSlice} from '@reduxjs/toolkit';

const initialState = {
    articles: [],
    status: 'idle',
    error: null,
    page: 0
}

const HITS_PER_PAGE = 12;
const BASE_URL = 'http://hn.algolia.com/api/v1/';

/* Fetch Articles API call */
export const fetchArticles = createAsyncThunk(
    'articles/fetchArticles',
    async (pageNumber) => {
        const responseJson = await fetch(`${BASE_URL}/search_by_date?tags=story&page=${pageNumber}&hitsPerPage=${HITS_PER_PAGE}`);
        const response = await responseJson.json();
        return response;
    }
);

/* Articles Slide, actions and reducers */
const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        // Star / un-star an article
        starArticle: (state, action) => {
            const { articleId } = action.payload;
            const articleIndex = state.articles.findIndex(article => article.objectID === articleId);
            let articleTemp = state.articles;
            articleTemp[articleIndex].starred = articleTemp[articleIndex].starred ? false : true;
        },
        // User clicked "show more" -- load a new page
        updatePageNumber: (state, action) => {
            const { pageNumber } = action.payload;
            state.page = pageNumber
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchArticles.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.status = 'succeeded'

                // Add any fetched articles to the array
                if(state.articles.length < (state.page + 1) * HITS_PER_PAGE) {
                    state.articles = state.articles.concat(action.payload.hits.map(article => { return {...article, starred: false}}))
                }
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const { starArticle, updatePageNumber } = articlesSlice.actions

export default articlesSlice.reducer

export const selectArticles = state => {
    return state.articles.articles.slice(state.articles.page * HITS_PER_PAGE, (state.articles.page + 1) * HITS_PER_PAGE);
}

export const selectStarredArticles = state => {
    console.log(state.articles)
    return state.articles.articles.filter(article => article.starred === true);
}

