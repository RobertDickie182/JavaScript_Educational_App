import React from "react";

const ArticleList = ({articles}) => {
    const listItems = articles.map((article, index) => {
        return <item value ={index} key={article.id}>{article.title}<br/></item>
    })
    return(

        <a href="" className="list">{listItems}</a>
    )
}

export default ArticleList;