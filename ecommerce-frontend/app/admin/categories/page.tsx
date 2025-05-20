'use client'

import React, {useEffect, useState} from 'react'
import { fetchCategories, createCategory, updateCategory, deleteCategory } from '@/app/services/api'

export default function Category(){
  const [categories, setCategories] = useState<any[]>([]);
  const [name, setName] = useState<String>('');
  const [description, setDescription] = useState<String>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editCategoryId, setEditCategoryId] 
      = useState<number | null>(null);

  useEffect( () => {
    fetchCategories().then((res) => setCategories(res.data))
    .catch((err) => console.error(
        'Lỗi khi tải danh sách nhóm sản phẩm', err));
  }, []);
  
  // Xử lý khi nhấn vào nút thêm nhóm sản phẩm
  const handleCreateCategory = () => {

  }

  //Xử lý khi nhấn vào nút cập nhật nhóm sản phẩm
  const handleUpdateCategory = () => {

  }

  //Xử lý khi nhấn vào nút xóa nhóm sản phẩm
  const handleDeleteCategory = (id: number) => {

  }

  //Xử lý khi nhấn nút Sửa
  const handleEditCategory = (category : any) => {
    
  }


  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>QUẢN LÝ NHÓM SẢN PHẨM</h1>

      {/* Form thêm, sửa nhóm sản phẩm */}
      <div className='mb-4'>
        <input
          type='text'
          className='border p-2 mr-2'
          onChange={(e) => setName(e.target.value)}
          placeholder='Tên nhóm sản phẩm'
        />
        <input
          type='text'
          className='border p-2 mr-2'
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Mô tả nhóm sản phẩm'
        />
        { isEditing ? (
          <button onClick={handleUpdateCategory} 
              className='bg-yellow-500 text-white px-4 py-2'>
            Cập nhật
          </button>
        ):(
          <button onClick={handleCreateCategory} 
              className='bg-yellow-500 text-white px-4 py-2'>
            Thêm nhóm sản phẩm
          </button>
        )
        }
      </div>

      {/* Danh sách nhóm sản phẩm */}
      <div className='mt-4'>
        <h2 className='font-semibold'>Danh sách nhóm sản phẩm</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.id} 
              className='flex justify-beween items-center border-b py-2'>
                <div>
                  <span>{category.name}</span>
                  <p className='text-sm text-gray-600'>
                    {category.description}
                  </p>
                </div>
                <div>
                  <button onClick={() => handleEditCategory(category)}
                      className='text-yellow-500 mr-4'>
                    Sửa
                  </button>
                  <button onClick={() => handleDeleteCategory(category.id)}
                      className='text-red-500 mr-4'>
                    Xóa
                  </button>
                </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )



}