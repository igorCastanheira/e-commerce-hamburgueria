import React from "react";
import ListItem from "./ListItem";
function CategoriesList ({categories}){
   
    return categories.map((result) => <ListItem key={result.id} text={result.categorie} reference={result.categorie} /> ); 

};export default CategoriesList;