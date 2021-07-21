import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { fetchDrugInteractions } from "../../redux/drug-interactions-slice";
import TextArea from "../../ui-library/text-area";
import Title from "../../ui-library/title";
import Caption from "../../ui-library/caption";

const DrugInteractions = ({ results }) => {
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
      />

      <div>
        <Title title="Enter Interactions" />
        {results.map(({ r }) => (
          <div>
            <Caption caption={r.caption} />
            <div>{r.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

DrugInteractions.defaultProps = {
  results: [],
};

DrugInteractions.propTypes = {
  results: PropTypes.instanceOf(Object),
};

export default DrugInteractions;
