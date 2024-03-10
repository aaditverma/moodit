import styled from "styled-components";

export const UploadButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px; /* Adjust the width as needed */
  height: 40px;
  background-color: ;
  color: #fff;
  border-radius: 4px;
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
