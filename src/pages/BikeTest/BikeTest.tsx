import React from "react";
import testQuestions from "../../staticData/testQuestions.json";
import { Button, Form } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  [key: string]: string;
}

interface Props {
  changeTestResult: (arg: string) => void;
}

const BikeTest: React.FC<Props> = ({ changeTestResult }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const calculateTheMostFrequentNumber = (arr: (string | number)[]) => {
    const frequencyMap: Record<string | number, number> = {};
    for (const item of arr) {
      frequencyMap[item] = (frequencyMap[item] || 0) + 1;
    }
    const values = Object.values(frequencyMap);
    const maxValue = Math.max(...values);

    const largestKeys = Object.keys(frequencyMap).filter(
      (key) => frequencyMap[key] === maxValue
    );
    return largestKeys;
  };
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const values = Object.values(data);
    const mostFrequentAnswers = calculateTheMostFrequentNumber(values);
    let testResult = "";
    if (mostFrequentAnswers.length > 1) {
      testResult = "2"; // The default second bike type
    } else {
      testResult = mostFrequentAnswers[0];
    }
    changeTestResult(testResult);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                      type="radio"
                      id={answer.id}
                      value={answer.bikeType}
                      {...register(`group-${item.id}`, {
                        required: "Please answer this question.",
                      })}
                    />
                  </div>
                );
              })}
              {errors[`group-${item.id}`] && (
                <div className="error">
                  {errors[`group-${item.id}`]?.message}
                </div>
              )}
            </div>
          );
        })}
        <div className="text-center">
          <Button type="submit" className="mt-3">
            Check the results
          </Button>
        </div>
      </form>
    </>
  );
};

export default BikeTest;
