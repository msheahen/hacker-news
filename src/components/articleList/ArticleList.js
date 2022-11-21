import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ArticleList.module.css';
import {Article} from '../article/Article'
import {
    fetchArticles,
    updatePageNumber,
    selectArticles,
    selectStarredArticles
} from "./articleListSlice";
import { Bars } from "react-loading-icons";

export function ArticleList({type}) {

    const dispatch = useDispatch();
    const pageNumber = useSelector(state => state.articles.page)
    const articles = useSelector(type === 'latest' ? selectArticles : selectStarredArticles);
    const error = useSelector(state => state.articles.error)
    const articlesStatus = useSelector(state => state.articles.status)

    // fetch our articles initially
    useEffect(() => {
        if (articlesStatus === 'idle') {
            dispatch(fetchArticles(pageNumber))
        }
    }, [dispatch])

    // When we update the page number, fetch more articles
    useEffect(() => {
         dispatch(fetchArticles(pageNumber))
    }, [pageNumber])

    const showMore = () => {
        // show more articles
        dispatch(updatePageNumber({pageNumber: pageNumber + 1}))
    }

    // Navigate to source in a new tab
    const openArticle = (url) => {
        window.open(url, "_blank");
    }

    return (
        <div className={styles.articleResults}>
            {articlesStatus === 'loading' ? (
                <div className={styles.loadingContainer}>
                    <Bars fill="#FE7139" height={"3em"} />
                    <div>Loading...</div>
                </div>
            ): (
                <>
                {articlesStatus === 'error' ? (
                    <div className={styles.errorContainer}>Error: {error}</div>
                ) : (
                    <div className={styles.articleList}>
                        <ol >
                            {articles.map((article, i) => (
                                <li key={article.objectID} onClick={() => openArticle(article.url)}>
                                    {type === 'latest' ? (<div className={styles.articleNumber}>{(pageNumber * 12) + i + 1}. </div>) : null}
                                    <Article article={article} />
                                </li>
                            ))}
                        </ol>
                        {articles?.length === 0 && type === 'starred' ? (
                            <div styles={styles.textCentered}>You have not saved any stories yet.</div>
                        ) : null}
                        {type === 'latest' ? (
                           <button className={styles.showMoreButton} onClick={showMore}>Show More</button>
                        ) : null}
                    </div>
                )}
                </>
            )}
        </div>
    );
}
