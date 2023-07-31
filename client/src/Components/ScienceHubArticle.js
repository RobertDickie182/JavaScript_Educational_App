import { useParams } from "react-router";

const ScienceHubArticle = ({articles}) => {

const {id} = useParams();
const articlesBody = articles.find(article => article._id === id);


return (

    <>
        {articlesBody.title} <br/> 
        <p>{articlesBody.body}</p>

    </>
)

}

export default ScienceHubArticle;