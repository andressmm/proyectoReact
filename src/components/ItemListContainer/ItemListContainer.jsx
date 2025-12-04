import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom";

export const ItemListContainer=({titulo,productos})=>{
    const [products, setProducts]=useState([]);
       const {category}=useParams(); 
    
    
    
 
    useEffect(()=>{

        fetch('/data/productos.json').then((res)=>{
            if (!res.ok){
                throw new Error('Error al cargar los productos');
            }
            
            return res.json();
        }).then((data)=>{
          
        if (category) {
                        setProducts(data.filter((prod)=>prod.category===category));



                        
                    } else {

            setProducts(data);}
        }).catch((err)=>{console.log(err)});


    },[category]);   


    return(       
        
        <section>
            <h3>{titulo}</h3>
            <ItemList lista={products}/>
        </section>
    );


};