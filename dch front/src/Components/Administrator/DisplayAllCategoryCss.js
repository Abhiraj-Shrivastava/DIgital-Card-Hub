
import { makeStyles } from '@mui/styles';
import { color, letterSpacing } from "@mui/system";

 const useStyles=makeStyles({

   root:{ 
       display:"flex",
       justifyContent:'center',
       alignItems:'center'
},
subdiv:{
    padding:5,
    marginTop:30,
    background:'#fff',
    borderRadius:10,
   
    width:800
},
heading:{
  width:'450',
  padding:5,
  fontSize:26,
  fontWeight:'bold',
  letterSpacing:1
},
editRoot:{ 
  display:"flex",
  justifyContent:'center',
  alignItems:'center'
},
editSubdiv:{
padding:5,
marginTop:30,
borderRadius:10,
margin:20
},
messageStyle:{
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  fontSize:24,
  fontWeight:'bold',
  color:'#3ae374'
},
centerStyle:{
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
  
}    


  });
  export {useStyles}