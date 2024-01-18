import React, { useState } from "react";
import bikeType from "../../staticData/bikeTypeData.json";
import { BikeTypeData } from "../../types";
import { Button } from "react-bootstrap";

interface Props {
  changeTestResult: (arg: string) => void;
  testResult: string;
}

const BikeTestResult: React.FC<Props> = ({ changeTestResult, testResult }) => {
  const { title, description } = (bikeType.data as unknown as BikeTypeData)[
    testResult
  ];
  const showBikes = () => {
    console.log("BIKES");
  };
  return (
    <div>
      <h4>Result: {title}</h4>
      <div>{description}</div>
      <div>
        <Button
          className="mt-3"
          variant="secondary"
          onClick={() => {
            changeTestResult("");
          }}
        >
          Restart the test
        </Button>
        <Button className="mt-3" onClick={showBikes}>
          Show bikes
        </Button>
      </div>
    </div>
  );
};
export default BikeTestResult;
