import React from "react";
import { Link } from "react-router-dom";

const ArticleList = ({articles}) => {
    const listItems = articles.map((article) => {
        return <Link to={`/articles/${article._id}`}  key={article._id}>{article.title}<br/></Link>
    })
    return(
        
       <>
      
        <input className="filterbar" type='text'/>
        <ul className="list">{listItems}</ul>
        
        </>
        
        
    )
}

export default ArticleList;