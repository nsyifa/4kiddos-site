import Rating from "@mui/material/Rating";
import { batman } from "../../../public/img";
import "../../styles/productcard.css";
const ProductCard = ({ product }) => {
  return (
    <div className="product-card-container">
      <img className="product-image" src={batman} />
      {/* <div className="title-wrapper">
        
      </div> */}
      <h2 className="product-title">{product.name}</h2>
      <div className="price-rating-wrapper">
        <h2 className="product-price">{"$" + product.price}</h2>
        <Rating
          name="read-only"
          value={product.rating}
          precision={0.1}
          size="small"
          readOnly
        />
      </div>
    </div>
  );
};

export default ProductCard;
