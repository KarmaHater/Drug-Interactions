import React from "react";
import PropTypes from "prop-types";
import TextArea from "../../ui-library/text-area";
import Title from "../../ui-library/title";
import Caption from "../../ui-library/caption";

const DrugInteractions = ({ results }) => (
  <div>
    <Title title="Enter Medications" />
    <TextArea
      buttonText="Check Interactions"
      onSubmitCallback={() => {
        console.log("you are in the callback");
      }}
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

DrugInteractions.defaultProps = {
  results: [],
};

DrugInteractions.propTypes = {
  results: PropTypes.instanceOf(Object),
};

export default DrugInteractions;
