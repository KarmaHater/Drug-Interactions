import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

const TextArea = ({ buttonText, onSubmitCallback, rows, cols }) => {
  const [textAreaState, setTextAreaState] = useState({ value: "" });

  const handleChangeCB = useCallback(({ target }) => {
    console.log({ target });
    /// can state method here
    setTextAreaState({ value: target.value });
  }, []);

  const handleSubmitCB = useCallback(
    ({ target }) => {
      console.log("SUBMITTED FORM");
      onSubmitCallback({ target });
    },
    [onSubmitCallback]
  );

  return (
    <form>
      <textarea
        value={textAreaState.value}
        onChange={handleChangeCB}
        rows={rows}
        cols={cols}
      />
      <div>
        <input type="submit" value={buttonText} onClick={handleSubmitCB} />
      </div>
    </form>
  );
};

TextArea.defaultProps = {
  rows: "10",
  cols: "50",
};

TextArea.propTypes = {
  rows: PropTypes.string,
  cols: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
};

export default TextArea;
