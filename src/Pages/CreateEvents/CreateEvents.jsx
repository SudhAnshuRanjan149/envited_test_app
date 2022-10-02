// GLOBAL
import React from "react";
import { useNavigate } from "react-router-dom";

// LOCAL
import Input from "../../Components/input/Input.jsx";
import FileInput from "../../Components/FileInput/FileInput.jsx";

// MUI
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";

// CSS
import "./CreateEvents.css";

const CreateEvents = () => {
  const navigate = useNavigate();

  //   const [value, setValue] = React.useState(Date.now());

  //   const handleChange = (newValue) => {
  //     setValue(newValue);
  //   };

  return (
    <div>
      <div className="create_container">
        <div className="create_heading">Create your event</div>
        <div className="create_inputs">
          <Input name="Event name" placeholder="Event name" />
          <Input name="Host name" placeholder="Host name" />
          <Input name="Location" placeholder="Location" />

          <FileInput />
        </div>

        <div className="create_btns">
          <button className="btns">Save</button>
          <button className="btns" onClick={() => navigate("/event")}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateEvents;
