/**
 * A component representing a cartoon card.
 *  id - The key of the cartoon card.
 *  image - The image source of the cartoon card.
 *  name - The name of the cartoon card.
 */

const CartoonCard = ({ id, image, name }) => {
  return (
    <div className="card-main-box" key={id}>
      <div className="card-box">
        <img src={image} alt={name} className="card-image" />
        <h2 mt={2} className="card-text">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default CartoonCard;
