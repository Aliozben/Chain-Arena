import {type} from "os";
import React, {SetStateAction} from "react";
import "../../css/common/TextInput.css";

interface Props {
  placeHolder: string;
  inputType?: string;
  onChange?: React.Dispatch<SetStateAction<string>>;
}

export const TextInput = ({placeHolder, inputType, onChange}: Props) => {
  return (
    <div className="border">
      <div className="input_container">
        <div className="input_div">
          <input
            type={inputType ? inputType : "text"}
            name="name"
            autoComplete="off"
            required
            onChange={e => {
              if (onChange) onChange(e.target.value);
            }}
          />
          <label htmlFor="name" className="label_text">
            <span className="content_name">{placeHolder}</span>
          </label>
        </div>
      </div>
    </div>
  );
};
