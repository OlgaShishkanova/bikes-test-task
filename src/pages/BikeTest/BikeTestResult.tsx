import React, { useState } from "react";
import bikeType from "../../staticData/bikeTypeData.json";
import { BikeTypeData } from "../../types";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Props {
  changeTestResult: (arg: string) => void;
  testResult: string;
}

const BikeTestResult: React.FC<Props> = ({ changeTestResult, testResult }) => {
  const { title, description } = (bikeType.data as unknown as BikeTypeData)[
    testResult
  ];
  return (
    <div>
      <h4>Result: {title}</h4>
      <div>{description}</div>
      <div className="d-flex justify-content-around">
        <Button
          className="mt-3"
          variant="secondary"
          onClick={() => {
            changeTestResult("");
          }}
        >
          Restart the test
        </Button>
        <Link
          to={`/bikes?bikeType=${testResult}`}
          className="btn btn-primary mt-3"
        >
          Show bikes
        </Link>
      </div>
    </div>
  );
};
export default BikeTestResult;
