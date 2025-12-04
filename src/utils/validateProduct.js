export const validateProduct = (product,fileRequired=true) => {

const errors = {};

if (!product.name.trim()) {
    
    errors.name = "El nombre es obligatorio";}


if (!product.description.trim()) {
    
    errors.description = "La descripción es obligatoria";}  

    if (!product.category.trim()) {
        errors.category = "La categoría es obligatoria";}

    if (!product.price || product.price <= 0) {
        errors.price = "El precio debe ser un número mayor a cero";}

        if (fileRequired && !product.file) {
            errors.file = "La imagen es obligatoria";} 
            return errors;

        }