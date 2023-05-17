import React from "react"
function ListItem(props){
    return(
    <li><a href={props.reference} id="lista" >
             {props.text}
        </a></li>
    )
    };export default ListItem;