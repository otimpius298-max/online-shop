const product_url = "/data/products.json"


export const fetchProducts = async() =>{
    try{
        const res = await fetch(product_url)
        if(!res.ok) throw new Error(`Response ${error.status}`)
        const data = await res.json()
        return data.products
    }catch(err){
        console.log("Response:", err.message)
        return []
    }
}