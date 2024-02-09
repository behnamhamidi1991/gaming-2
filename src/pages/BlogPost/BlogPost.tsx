import { productions } from "../../data";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  const newProduct = productions.find((item) => item.id === id);

  console.log(newProduct);

  return (
    <div>
      <h1>{newProduct?.title}</h1>
      <img src={newProduct?.image} alt="" />
    </div>
  );
};

export default BlogPost;
