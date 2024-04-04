import { useParams } from "react-router-dom";
import Navbar from "./shared/Navbar";

const NewsDetails = () => {
  const { id,total_view } = useParams();
  return (
    <div>
      <Navbar />
      NewsDetails
      <h3>{id}</h3>
      <p>{total_view}</p>
    </div>
  );
};

export default NewsDetails;
