import React from 'react';
import {
 Navbar,
 NavbarBrand,
 NavLink,
 Button,
} from 'reactstrap';
import Uno from './Uno';
import Dos from './Dos';
import Tres from './Tres';


export default function Menu(props){
 let colorUno = 'secondary'
 let colorDos = 'secondary'
 let colorTres = 'secondary'
 let menu
 switch (props.menuItem){
     case 'UNO':
      menu = <Uno texto={props.texto} handleTextChange={props.handleTextChange} />
      colorUno = 'primary'
      break;
     case 'DOS':
      menu = <Dos texto={props.texto} handleTextChange={props.handleTextChange} />
      colorDos = 'primary'
      break;
     case 'TRES':
      menu = <Tres texto={props.texto} handleTextChange={props.handleTextChange} />
      colorTres = 'primary'
      break;
      default:
        break
   }
   return (
     <div>
       <Navbar>
         <NavbarBrand href="/">MYFPSCHOOL</NavbarBrand>
         <NavLink>
         <Button color={colorUno} onClick={()=>props.changeMenu("UNO")}>UNO</Button>{" "}
         <Button color={colorDos} onClick={()=>props.changeMenu("DOS")}>DOS</Button>{" "}
         <Button color={colorTres} onClick={()=>props.changeMenu("TRES")}>TRES</Button>
         </NavLink>
       </Navbar>
      {menu}
     </div>
   );
}
