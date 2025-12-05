
export const ProductFormUI=({
    product,
    errors,
    loading,
    onChange,
    onFileChange,
    onSubmit,
})=>{

return (<section>
    <form className='product-form' onSubmit={onSubmit}>
        <h2>Agregar Producto</h2>
        <div>
            <label>Nombre</label>
            <input type="text" name='name' value={product.name} onChange={onChange} required/>
     
        {errors.name && <p className="error">{errors.name}</p>}
        </div>


         <div>
            <label>Precio</label>
            <input type="number" name='price' value={product.price} onChange={onChange} required/>
        {errors.price && <p className="error">{errors.price}</p>}
       
        </div>

    
         <div>
            <label>Categoria</label>
            <input type="text" name='category' value={product.category} onChange={onChange} required/>
        {errors.category && <p className="error">{errors.category}</p>}
        </div>

    
         <div>
            <label>Descripcion</label>
            <textarea type="text" name='description' value={product.description} onChange={onChange} required>
                </textarea>
        {errors.description && <p className="error">{errors.description}</p>}
        </div>

    <div>
        <label htmlFor="image">Imagen:</label>
        <input type="file" accept="image/*" name="image" onChange={(e)=> onFileChange(e.target.files?.[0] ?? null)} required/>
     {errors.image && <p className="error">{errors.image}</p>}

    </div>

<button className='btn' type='submit' disabled={loading}>
    {loading ? "Cargando..." : "Guardar"}


</button>

    </form>

</section>)



}