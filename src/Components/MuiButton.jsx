import { Button, Stack } from "@mui/material";

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
    
      </Stack>
    </div>
  );
};

export default MuiButton;
