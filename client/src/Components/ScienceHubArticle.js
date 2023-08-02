import { useParams } from "react-router";

const ScienceHubArticle = ({articles}) => {

const {id} = useParams();
const articlesBody = articles.find(article => article._id === id);


return (

    <>
    <h1 className="showarticletitle">{articlesBody.title}</h1> 
    
    <p className="showarticlebody">{articlesBody.body}</p>

</>
)

}

export default ScienceHubArticle;