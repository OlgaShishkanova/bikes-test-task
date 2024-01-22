import React from "react";
import { Image } from "react-bootstrap";
import { BikeItemType } from "../../types";
import bikesData from "../../staticData/bikesData.json";
import { formatPrice } from "../../helpers";
import { useParams } from "react-router-dom";

const BikeItem = () => {
  const { id } = useParams();
  const item: BikeItemType = bikesData.data.find(
    (i) => i.id === id
  ) as BikeItemType;
  const price = formatPrice(item.price);
  return (
    <div className="bike-item">
      <div className="bike-item__img">
        <Image src={item.img} />
      </div>
      <h3 className="">{item.name}</h3>
      <div>{item.desc}</div>
      <div className="mt-2">
        <h5>Configuration</h5>
        <div>Color: {item.configuration.color}</div>
        <div>Frame: {item.configuration.frame}</div>
        <div>Brakes: {item.configuration.brakes}</div>
        <div>Saddle: {item.configuration.saddle}</div>
      </div>
      <div className="mt-2">
        <h5>Price: {price}</h5>
      </div>
    </div>
  );
};
export default BikeItem;
