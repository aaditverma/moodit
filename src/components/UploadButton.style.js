// components/CreateButton.js
import React, { useRef } from "react";
import styled from "styled-components";

const UploadButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px; /* Adjust the width as needed */
  height: 40px;
  background-color: #0B1623; /* Set the background color */
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1em;
  margin: 10px; /* Add some margin to create space */
  transition: background-color 0.3s ease-in-out;

  &:hover {
    border: 2px solid #fff; /* Add a solid white border on hover */
  }

  input[type="file"] {
    display: none;
  }
`;

const CreateButton = ({ onUpload }) => {
  const fileInputRef = useRef(null);

  const handleCreate = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <UploadButton>
      Create
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileInputChange}
        accept="image/*"
      />
    </UploadButton>
  );
};

export default CreateButton;
