import StarOutlineIcon from '../../assets/icons/star-outline.svg';
import StarOutlineLightIcon from '../../assets/icons/star-outline-light.svg';
import StarIcon from '../../assets/icons/star.svg';
import styles from './StarButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {starArticle} from "../articleList/articleListSlice";

export function StarButton(props){

    const darkMode = useSelector((state) => state.darkMode.darkMode);
    const { article } = props;
    const { starred } = article;
    const dispatch = useDispatch()

    const handleStarClick = (e) => {
        e.preventDefault();
        e.stopPropagation();

        dispatch(starArticle({articleId: article.objectID}))
    }

    // Star button with icon based on status / dark mode
    return (
        <button className={styles.starButton} onClick={(e) => handleStarClick(e)}>
            {starred ? (
                <>
                    <img src={StarIcon} alt={'star icon'}/>
                    <span className={styles.saveText}>saved</span>
                </>
            ) : (
                <>
                    {darkMode ? (
                        <img src={StarOutlineLightIcon} alt={'star outline icon'}/>
                    ): (
                        <img src={StarOutlineIcon} alt={'star outline icon'}/>
                    )}
                    <span className={styles.saveText}>save</span>
                </>
            )}
        </button>
    )
}
