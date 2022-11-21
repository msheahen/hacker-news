import {ArticleList} from "../../components/articleList/ArticleList";
import {Layout} from "../../components/layout/Layout";



export function LatestArticles(){

    return (
        <Layout>
            <ArticleList type={'latest'}/>
        </Layout>
    )
}
