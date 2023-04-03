import { Button, Stack } from "@mui/material";

// import SendIcon from '@mui/icons-material/SendIcon';
import SendIcon from '@mui/icons-material/Send';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import IconButton from '@mui/icons-material';
const MuiButton = () => {
  return (  
    <div>
      <Stack spacing={3}>
        
        <Stack spacing={2} direction="row">
          <Button variant="text" href="https://google.com">
            Text
          </Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>

        <Stack direction='row' spacing={2}>
            <Button variant='contained' color='primary'> Primary </Button>
            <Button variant='contained' color='secondary'> secondary </Button>
            <Button variant='contained' color='error'> error </Button>
            <Button variant='contained' color='success'> success </Button>
            <Button variant='contained' color='info'> info </Button>
            <Button variant='contained' color='warning'> warning </Button>
        </Stack>

        <Stack direction='row' spacing={2} mt='2'>
            <Button variant='outlined' color='primary'> outlined Primary </Button>
            <Button variant='outlined' color='secondary'> outlined secondary </Button>
            <Button variant='outlined' color='error'> outlined error </Button>
            <Button variant='outlined' color='success'> outlined success </Button>
            <Button variant='outlined' color='info'> outlined info </Button>
            <Button variant='outlined' color='warning'> outlined warning </Button>
        </Stack>

        <Stack direction='row' spacing={2} mt='2'>
            <Button variant='text' color='primary'> text Primary </Button>
            <Button variant='text' color='secondary'> text secondary </Button>
            <Button variant='text' color='error'> text error </Button>
            <Button variant='text' color='success'> text success </Button>
            <Button variant='text' color='info'> text info </Button>
            <Button variant='text' color='warning'> text warning </Button>
        </Stack>
    
      <Stack direction='row' spacing={2} display='block'> 
        <Button size="large" color='primary' variant='contained'>Large</Button>
        <Button size='medium' color='primary' variant='contained'>Medium</Button>
        <Button size="small" color='primary' variant='contained'>small</Button>
      </Stack>

      <h4>With Icons</h4>

      <Stack direction='row' spacing={2}>
        {/* <Button variant="outlined" SendOutlinedIcon={<SendOutlinedIcon />}>Send</Button> */}
        <Button variant="contained" endIcon={<SendIcon />}>
          Send after
        </Button>

        <Button variant="contained" startIcon={<SendOutlinedIcon />}>
        Send before
      </Button>

      </Stack>

      </Stack>
    </div>
  );
};

export default MuiButton;
