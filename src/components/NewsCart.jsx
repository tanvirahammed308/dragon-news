import { Link } from "react-router-dom";

const NewsCart = ({item}) => {
  const {author,details,_id,image_url}=item; 
  return (
    <div className="md:col-span-2">
          <div className="card card-compact  bg-base-100 shadow-xl">
            <figure>
              <img
                src={image_url}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{author.name}</h2>
              {
                details.length >200 ? <p>{details.slice(0,200)}<Link className="text-blue-500" to={`/newsdetails/${_id}`}>read more</Link></p> : <p>{details}</p>
              }
              
              
            </div>
          </div>
        </div>
  )
}

export default NewsCart