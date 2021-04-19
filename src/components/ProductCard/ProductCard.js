import "./ProductCard.css";
const ProductCard = (props) => {
  return (
    <div className="product-card fade">
      <div className="product-card-img" style={{backgroundImage: `url(${props.product.imgSrc})`}}></div>
      <div className="container">
        <div className="name-category">
          <b>{props.product.name}</b>
        <div>{props.product.category}</div></div>
        <div>
          {props.product.price}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
