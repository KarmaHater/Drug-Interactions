import React, { useCallback } from "react";

import { useDispatch } from "react-redux";
import { fetchDrugInteractions } from "../../redux/drug-interactions-slice";
import TextArea from "../../ui-library/text-area";
import Title from "../../ui-library/title";

const validateInputCB = (input) => {
  /*
    Side Notes: 
      1. I don't think JS should ever be counting words. It is a dead give away that the design should be reworked a little.
      2. Doing these types of validations with JS will hurt performance. 
      3. I made it a little better by running this validation only on submit. 
      4. I added a error message to help the user a little but I honestly don't think it is enough.
      5. With this type of design it is hard for the user to see what line has the error and makes it impossible to debug. Especially if you can have 10,000 lines. 
  */
  const normalized = input
    .split("\n")
    .map((row) => row.split(" ").filter((word) => word !== ""));

  return !normalized.every((row) => row.length < 21);
};

const DrugInteractions = () => {
  const dispatch = useDispatch();
  const handleOnSubmitCB = useCallback(
    ({ value }) => dispatch(fetchDrugInteractions({ value })),
    [dispatch]
  );

  return (
    <div>
      <Title title="Enter Medications" />
      <TextArea
        buttonText="Check Interactions"
        handleOnSubmit={handleOnSubmitCB}
        hasError={validateInputCB}
        errorMessage="You have more them 20 drugs in one line. Please reduce the amount and press submit."
      />
    </div>
  );
};

export default DrugInteractions;
