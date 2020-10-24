import React, { useEffect, useState, useCallback } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import socketIOClient from "socket.io-client";
import { getCodesFromText, encode, decode } from './huffman';

function App() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const socket = socketIOClient('http://localhost:8001/chat');
    
  useEffect(()=>{
    socket.on('receivedMessage', (message)=>{
      setMessages(prevState=> [...prevState, message]);
    });
  }, [])

  const handleChange = useCallback(()=>{
    const codes = getCodesFromText(text); 
    const encodedArray = encode(text, codes); 

    const obj = Object.fromEntries(codes);
    socket.emit('chatMessage', { encodedArray: JSON.stringify(encodedArray), codes: obj });
    setText('');
  },[text])

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center", flex:1}}>
      <div style={{height:600,width:'70%', backgroundColor:'#e5ddd5', display:"flex", flexDirection:"column"}} >
        <AppBar position="sticky"  style={{backgroundColor:'#3dd164'}}>
          <Typography variant="h3" >
            Chat do huff
          </Typography>        
        </AppBar>
        
        <div style={{display:"flex", flex:1, alignItems:"center", flexDirection:"column", overflow:"scroll"}}>
        {messages.map((message, index)=>{
          if(isVisible){
            const mapCode = new Map(Object.entries(message.codes));
            const textTemp = decode(JSON.parse(message.encodedArray), mapCode);
            return <p key={String(index)}>{textTemp}</p>
          }
          return <p key={String(index)}>{JSON.parse(message.encodedArray).join('')}</p>
        })}
        </div>
        
        <div style={{display:"flex",alignSelf:"end" ,width:"100%"}}>
          <TextField placeholder="Digite a mensagem"  style={{width:"90%"}} variant="outlined" value={text} onChange={(value)=> setText(value.target.value)}/> 
          <IconButton color="primary" style={{flex:1}} onClick={handleChange}>
            <SendIcon style={{color:'#3dd164'}}/>
          </IconButton>
        </div>
        <div style={{marginTop: 20, alignSelf: 'center'}}>
          <Button style={{background: !isVisible? '#3dd164': 'red', color: '#ffffff'}}  onClick={()=>setIsVisible(!isVisible)}>
            {isVisible ? 'Ocultar': 'Revelar segredo'}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
