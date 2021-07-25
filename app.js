const form = document.querySelector("form");
const productsContainer = document.querySelector("#list");
form.addEventListener("submit", function(e){
    e.preventDefault();
    const productInput = (form.elements.product);
    const qtyInput = (form.elements.qty);
    // console.log(qtyInput, productInput)
    addProduct(productInput.value, qtyInput.value)
    productInput.value = "";
    qtyInput.value = "";
 })

const addProduct = (product,qty) => {
    const newProduct = document.createElement('li')
    newProduct.append(`${qty} ${product}`)
    console.log(newProduct);
    productsContainer.append(newProduct)
    
}