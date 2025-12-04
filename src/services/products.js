const BASE_URL='https://6931e8bd11a8738467d0f538.mockapi.io/products'


export const createProduct= async (product)=>{
    const res= await fetch (BASE_URL,{
        method:'POST',
        headers:{
            
            'Content-Type':'application/json'},
            body:JSON.stringify(product)
    });  


    if (!res.ok){
        throw new Error ('Error al crear el producto');
    }


    const result= await res.json();
    return result;

    
}