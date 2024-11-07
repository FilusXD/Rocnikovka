export const getAllProducts = async() => {
    const req = await fetch("http://localhost:3000/products", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "GET"
    });
    const data = await req.json();
    return{
        status: req.status,
        payload: data.payload,
        message: data.message
    }
}
export const getProductById = async(id) => {
    const req = await fetch(`http://localhost:3000/products/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "GET"
    });
    const data = await req.json();
    return{
        status: req.status,
        payload: data.payload,
        message: data.message
    }
}
export const createProduct = async(formData) => {
    const req = await fetch("http://localhost:3000/products", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(formData)
    });
    const data = await req.json();
    return{
        status: req.status,
        payload: data.payload,
        message: data.message
    }
}
export const updateProduct = async(id, formData) => {
    const req = await fetch(`http://localhost:3000/products/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify(formData)
    });
    const data = await req.json();
    return{
        status: req.status,
        payload: data.payload,
        message: data.message
    }
}
export const deleteProduct = async(id) => {
    const req = await fetch(`http://localhost:3000/products/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "DELETE",
        
    });
    const data = await req.json();
    return{
        status: req.status,
        payload: data.payload,
        message: data.message
    }
}
