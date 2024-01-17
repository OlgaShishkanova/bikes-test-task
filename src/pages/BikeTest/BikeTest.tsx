import React from "react";
import testQuestions from "../../staticData/testQuestions.json";
import { Form } from "react-bootstrap";

const BikeTest = () => {
  return (
    <div>
      {testQuestions.data?.map((item, key) => {
        return (
          <div key={item.id}>
            <div>
              {item.id}. {item.question}
            </div>
            {item.answers?.map((answer, i) => {
              return (
                <div>
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
    </div>
  );
};

export default BikeTest;
