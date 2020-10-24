import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';


function App() {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center", flex:1}}>
      <div style={{height:600,width:'70%', backgroundColor:'#e5ddd5', display:"flex", flexDirection:"column"}} >
        <AppBar position="sticky"  style={{backgroundColor:'#3dd164'}}>
          <Typography variant="h3" >
            Chat do huff
          </Typography>        
        </AppBar>
        
        <div style={{display:"flex", flex:1, alignItems:"center", flexDirection:"column", overflow:"scroll"}}>
        <p>dsknfsdkljf</p>
        <p>fdskoif</p>
        <p>dsknfsdkljf</p>
        <p>fdskoif</p>  <p>dsknfsdkljf</p>
        <p>fdskoif</p>  <p>dsknfsdkljf</p>
        <p>fdskoif</p>  <p>dsknfsdkljf</p>
        <p>fdskoif</p>  <p>dsknfsdkljf</p>
        <p>fdskoif</p>  <p>dsknfsdkljf</p>
        <p>fdskoif</p>  <p>dsknfsdkljf</p>
        <p>fdskoif</p>  <p>dsknfsdkljf</p>
        <p>fdskoif</p>  <p>dsknfsdkljf</p>
        <p>fdskoif</p>  <p>dsknfsdkljf</p>
        <p>fdskoif</p>  <p>dsknfsdkljf</p>
        <p>fdskoif</p>  <p>dsknfsdkljf</p>
        <p>fdskoif</p>
        </div>
        
        
        <div style={{display:"flex",alignSelf:"end" ,width:"100%"}}>
          <TextField  style={{width:"100%"}} variant="outlined" /> 
          <IconButton color="primary" >
            <SendIcon style={{color:'#3dd164'}}/>
          </IconButton>

        </div>
      </div>
    </div>
  );
}

export default App;
