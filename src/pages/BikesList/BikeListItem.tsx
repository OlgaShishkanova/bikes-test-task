import React from "react";
import { Image } from "react-bootstrap";
import { BikeItemType } from "../../types";
import { Link } from "react-router-dom";
import { formatPrice } from "../../helpers";

interface Props {
  item: BikeItemType;
}

const BikeListItem: React.FC<Props> = ({ item }) => {
  const price = formatPrice(item.price, "de-DE", "EUR");
  return (
    <Link
      to={`/bike/${item.id}`}
      className="text-decoration-none text-secondary d-block"
    >
      <div className="bikes-list__item" key={item.id}>
        <Image src={item.img} />
        <div className="fw-bold my-1">{item.name}</div>
        <div>Price: {price}</div>
      </div>
    </Link>
  );
};
export default BikeListItem;
