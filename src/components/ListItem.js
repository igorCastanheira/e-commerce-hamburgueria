import React from "react"
import { Link } from "react-router-dom";
function ListItem(props){
    return(
    <li>< Link to={props.reference} id="lista" >
             {props.text}
        </Link></li>
    )
    };export default ListItem;