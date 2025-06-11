import axios from 'axios';

const API = axios.create({
  baseURL: "http://localhost:5091/api"
})

//API lấy danh sách nhóm sản phẩm
export const fetchCategories = () => API.get('/categories');

//API tạo mới nhóm sản phẩm
export const createCategory = (
  data: {name: String, description: String}) => API.post(
    '/categories', data);

//API sửa nhóm sản phẩm
export const updateCategory = (id: number, 
  data : {name: String, description: String}) => API.put(
    `/categories/${id}`, data);

//API xóa nhóm sản phẩm
export const deleteCategory = (id: number) => API.delete(
  `/categories/${id}`);




// PRODUCT API
export const fetchProducts = () => API.get("/products", {
  headers: {
    'Content-Type': 'application/json',  // Đảm bảo gửi header hợp lệ
  },});
export const createProduct = (data: any) =>
                  API.post("/products", data);
export const updateProduct = (id: number, data: any) => 
                  API.put(`/products/${id}`, data);
export const deleteProduct = (id: number) => 
                  API.delete(`/products/${id}`);


// Upload image
export const uploadImage = (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  return API.post('/files/upload', formData, {
    headers: { "Content-Type": "multipart/form-data" }
  });
};

//Xử lý đăng nhập
export const login = (username: string, password: string) => {
  return API.post("/auth/login", {username, password});
}

//Xử lý giỏ hàng
//Thêm sản phẩm vào giỏ
export const addToCart = (data: {productId: number, quantity: number}) => {
  return API.post("/cart/add", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
}

//Lấy danh sách sản phẩm trong giỏ
export const fetchCart = () => {
  return API.get("/cart/get", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
}

//Cập nhật số lượng sản phẩm trong giỏ
export const updateCartItem = (productId: number, quantity: number) => {
  return API.put('/cart/update-quantity', {productId: productId, quantity}, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
}

export default API;