import axios from "axios"

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
})

export const getProducts = async () => {
    // const resp = await axiosInstance.get("/market-products-toy")
    const resp = await axiosInstance.get("/products")
    return resp.data.products
}

export const postProduct = async body => {
    const formData = new FormData ()
    Object.entries(body).forEach(([Key, value]) => {
        formData.append(Key, value)
    })
    // const resp = await axiosInstance.post("/market-products-toy", body)
    const resp = await axiosInstance.post("/products", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
    return resp.data.products
}

export const postContact = async body => {
    const resp = await axiosInstance.post("/contact", body)
    return resp.data
}