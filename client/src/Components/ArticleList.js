import React from "react";
import { Link } from "react-router-dom";
import ArticleFilter from "./ArticleFilter";

const ArticleList = ({ filteredArticles, filter, setFilter }) => {


    
    const listItems = filteredArticles.map((article) => {
        return <Link className="articlecolor" to={`/articles/${article._id}`}  key={article._id}>{article.title}<br/></Link>
          
      })
  
  
      return(
        <>
         <div>    
              <ArticleFilter setFilterCallback={(filter, setFilter)}/>
              {filter && <p className="youfilter">You are searching for: {filter}</p>}
         </div>     
              
              <ul className="list">{listItems}</ul>
          
          </>
      )
}

export default ArticleList;