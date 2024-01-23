import { useState } from "react";
import BikeTest from "./BikeTest";
import BikeTestResult from "./BikeTestResult";

const BikeTestPage = () => {
  const [testResult, changeTestResult] = useState("");
  return (
    <div>
      <h3 className="text-center">What is your bike type?</h3>
      <div className="questions bg-body-tertiary">
        {testResult ? (
          <BikeTestResult
            changeTestResult={changeTestResult}
            testResult={testResult}
          />
        ) : (
          <BikeTest changeTestResult={changeTestResult} />
        )}
      </div>
    </div>
  );
};
export default BikeTestPage;
