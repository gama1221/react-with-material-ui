import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const Forms = () => {
    const [num, setNum] = useState();

    const handleChange = (e) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
          setNum(e.target.value);
        }
      };
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="Test it"
            multiline
            onChange={(e) => handleChange(e)}
            value={num}        
          /> 
          <TextField
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="Test it"
            multiline
          />
          <TextField
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="Test it"
            multiline
          />
        </div>
      </Box>
    </div>
  );
};

export default Forms;
