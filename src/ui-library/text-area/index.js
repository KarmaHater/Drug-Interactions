import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

const TextArea = ({
  buttonText,
  handleOnSubmit,
  rows,
  cols,
  maxLength,
  hasError,
  errorMessage,
}) => {
  const [textAreaState, setTextAreaState] = useState({ value: "" });
  const [error, setError] = useState(false);

  const handleChangeCB = useCallback((event) => {
    setTextAreaState({ value: event.target.value });
  }, []);

  const handleOnSubmitCB = useCallback(
    (e) => {
      e.preventDefault();

      if (hasError(textAreaState.value)) {
        setError(true);
      } else {
        setError(false);
        handleOnSubmit({ value: textAreaState.value });
      }
    },
    [handleOnSubmit, textAreaState, hasError]
  );

  return (
    <div>
      {error && <div>{errorMessage}</div>}
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
    </div>
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
  errorMessage: PropTypes.string.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  hasError: PropTypes.func.isRequired,
};

export default TextArea;
