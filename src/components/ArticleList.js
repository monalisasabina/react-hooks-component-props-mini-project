import Article from "./Article"

function ArticleList({posts}){

    let gettingArticles = posts.map((post) => (
        <Article 
             key={post.id}
             title={post.title}
             date={post.date}
             preview={post.preview}
             minutes={post.minutes}
        
        />
    ))


    return(
       <main>{gettingArticles}</main>
    )


}
export default ArticleList