import { Item } from "../Item/Item";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { Count } from "../count/Count";


export const ItemDetail =({detail})=>{  

    const {addItem}=useCartContext();

    const handleAdd=(quantity)=>{
        addItem({...detail, quantity});


    }

return (
    <Item {...detail}>
       {/* <button onClick={()=>addItem(detail)}>Enviar al carrito</button>*/}

        <Count btnText={"Agregar al carrito"} onConfirm={handleAdd}/>    
    </Item>
)


}