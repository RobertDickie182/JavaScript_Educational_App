import React from "react";

const ArticleList = ({articles}) => {
    const listItems = articles.map((article, index) => {
        return <item value ={index} key={article.id}>{article.title} {article.body}</item>
    })
    return(
        <>{listItems}</>
    
    )
}

export default ArticleList;