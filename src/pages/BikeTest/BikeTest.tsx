import React from "react";
import testQuestions from "../../staticData/testQuestions.json";
import { Button, Form } from "react-bootstrap";

const BikeTest = () => {
  return (
    <>
      <h3 className="text-center">What is your bike type?</h3>
      <div className="questions bg-body-tertiary">
        {testQuestions.data?.map((item, key) => {
          return (
            <div key={item.id}>
              <div className="fw-bold my-1">
                {item.id}. {item.question}
              </div>
              {item.answers?.map((answer, i) => {
                return (
                  <div key={answer.id}>
                    <Form.Check
                      inline
                      label={answer.text}
                      name={`group-${item.id}`}
                      type="radio"
                      id={answer.id}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
        <div className="text-center">
          <Button className="mt-3">Check the results</Button>
        </div>
      </div>
    </>
  );
};

export default BikeTest;
