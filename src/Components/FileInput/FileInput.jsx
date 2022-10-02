import React from "react";

// CSS
import "./fileInput.css";

const FileInput = () => {
  return (
    <div className="file-input-container">
      <label className="file-input_label" for="file-input">
        <div className="file-input_box">
			Browse Image
		</div>
      </label>
      <input
        type="file"
        id="file-input"
        autocomplete="off"
        className="file-input"
		accept=".jpg,.jpeg,.png"
        required
      />
    </div>
  );
};

export default FileInput;
