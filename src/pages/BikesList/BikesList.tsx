import React, { useEffect, useState } from "react";
import { Form, Image } from "react-bootstrap";
import bikesData from "../../staticData/bikesData.json";
import {
  useSearchParams,
  createSearchParams,
  useNavigate,
  useLocation,
} from "react-router-dom";

const BikesList = () => {
  const [searchParams] = useSearchParams();
  const bikeType = searchParams.get("bikeType");
  const navigate = useNavigate();
  const location = useLocation();
  const onSelect = (value: string) => {
    navigate({
      pathname: location.pathname,
      search: createSearchParams({
        bikeType: value,
      }).toString(),
    });
  };
  const filteredData = bikesData.data?.filter((i) => i.bikeType === bikeType);
  const finalData = filteredData.length > 0 ? filteredData : bikesData.data;
  return (
    <>
      <div>Filters: </div>
      <Form.Select
        aria-label="Select Bike Type"
        value={bikeType || ""}
        onChange={(e) => onSelect(e.currentTarget.value)}
      >
        <option value="">Bike Type</option>
        <option value="1">City Bike</option>
        <option value="2">Hybrid Bike</option>
        <option value="3">Off-Road Bike</option>
      </Form.Select>
      <div className="bikes-list">
        {finalData.map((item, key) => {
          const price = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(item.price);
          return (
            <div className="bikes-list__item" key={item.id}>
              <Image src={item.img} />
              <div className="fw-bold my-1">{item.name}</div>
              <div>Price: {price}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default BikesList;
