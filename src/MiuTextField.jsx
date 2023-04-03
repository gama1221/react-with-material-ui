import { TextField } from "@mui/material";
import { Stack } from "@mui/system";

const MiuTextField = () => {
    return ( 
        <div>
            <Stack spacing={4}>
                <Stack spacing={2} direction='row'>
                    <TextField label='Name' placeholder="Enter Name" variant="outlined" />
                    <TextField label='Name' placeholder="Enter Name" variant="filled" />
                    <TextField label='Name' placeholder="Enter Name" variant="standard"/>
                </Stack>                

                <Stack spacing={2} direction='row'>
                    <TextField label="Suname" size="small" color="primary" variant="outlined" placeholder='surname' />
                    <TextField label="Suname" size="small" color="secondary" variant="outlined" placeholder='surname' />
                    <TextField label="Suname" size="small" color="success" required variant="outlined" placeholder='surname' />
                    <TextField label="Suname" size="small" color="warning" variant="outlined" placeholder='surname' />
                    <TextField label="Suname" size="small" color="error" variant="outlined" placeholder='surname' />
                </Stack>

            </Stack>
            
        </div>
     );
}
 
export default MiuTextField;