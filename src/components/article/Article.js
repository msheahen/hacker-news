import React from 'react';
import styles from './Article.module.css';
import {StarButton} from "../starButton/StarButton";

export function Article(props) {

    const { article } = props;

    function relativeTime(timestamp) {
        const now = Math.floor(new Date().getTime() / 1000)

        const msPerMinute = 60;
        const msPerHour = msPerMinute * 60;
        const msPerDay = msPerHour * 24;
        const msPerMonth = msPerDay * 30;
        const msPerYear = msPerDay * 365;

        const elapsed = now - timestamp;

        if (elapsed < msPerMinute) {
            const s = Math.round(elapsed/1000)
            return `${s} second${s !== 1 ? 's' : ''} ago`;
        }

        else if (elapsed < msPerHour) {
            const min = Math.round(elapsed/msPerMinute)
            return `${min} minute${min !== 1 ? 's' : ''} ago`;
        }

        else if (elapsed < msPerDay ) {
            const h = Math.round(elapsed/msPerHour);
            return `${h} hour${h !== 1 ? 's' : ''} ago`;
        }

        else if (elapsed < msPerMonth) {
            const d = Math.round(elapsed/msPerDay);
            return `approximately ${d} day${d !== 1 ? 's' : ''} ago`;
        }

        else if (elapsed < msPerYear) {
            const m = Math.round(elapsed/msPerMonth)
            return `approximately ${m} month${m !== 1 ? 's' : ''} ago`;
        }

        else {
            return `${Math.round(elapsed/msPerYear )}' years ago`;
        }
    }

    function articleDomain(url){
        let domain = new URL(url);
        let domainParts = domain.hostname.split('.');

        return `${domainParts[domainParts.length - 2]}.${domainParts[domainParts.length - 1]}`
    }

    return (
        <div>
            <div className={styles.titleRow}>
                <h2>{article.title}</h2>
                <div className={styles.source}>
                    {article.url ? (
                        <>({articleDomain(article.url)})</>
                        ) :
                        null
                    }
                </div>
            </div>
            <div className={styles.articleDetails}>
                <span className={styles.detailText}>{article.points}pts by {article.author} {relativeTime(article.created_at_i)} | {article.num_comments} comments | </span><StarButton article={article}/>
            </div>
        </div>
    );
}
