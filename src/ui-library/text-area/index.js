import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

const TextArea = ({ buttonText, handleOnSubmit, rows, cols, maxLength }) => {
  const [textAreaState, setTextAreaState] = useState({ value: "" });

  const handleChangeCB = useCallback((event) => {
    setTextAreaState({ value: event.target.value });
  }, []);

  const handleOnSubmitCB = useCallback(
    (e) => {
      e.preventDefault();
      handleOnSubmit({ value: textAreaState.value });
    },
    [handleOnSubmit, textAreaState]
  );

  return (
    <form>
      <textarea
        value={textAreaState.value}
        onChange={handleChangeCB}
        rows={rows}
        cols={cols}
        maxLength={maxLength}
      />
      <div>
        <input type="submit" value={buttonText} onClick={handleOnSubmitCB} />
      </div>
    </form>
  );
};

TextArea.defaultProps = {
  rows: "20",
  cols: "105",
  maxLength: "50000",
};

TextArea.propTypes = {
  rows: PropTypes.string,
  cols: PropTypes.string,
  maxLength: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
};

export default TextArea;
