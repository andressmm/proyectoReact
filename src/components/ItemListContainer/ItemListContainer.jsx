import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/products";

export const ItemListContainer=({titulo,productos})=>{
    const [products, setProducts]=useState([]);
       const {category}=useParams(); 
    
    
    
 
    useEffect(()=>{
        getProducts(category)
        .then((data)=>setProducts(data))
.catch((err)=>{console.log(err)});


    },[category]);   


    return(       
        
        <section>
            <h3>{titulo}</h3>
            <ItemList lista={products}/>
        </section>
    );


};