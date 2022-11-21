import {ArticleList} from "../../components/articleList/ArticleList";
import {Layout} from "../../components/layout/Layout";


export function StarredArticles(){
    return (
        <Layout>
            <ArticleList type={'starred'}/>
        </Layout>
    )
}
