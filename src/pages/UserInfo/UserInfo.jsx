import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'
import { FormControlLabel, Radio, RadioGroup, FormControl } from '@mui/material';
import { useRadioGroup } from '@mui/material/RadioGroup';
import { useState } from 'react'
import { useForm } from "react-hook-form";

const styles = {
  avatar: {
    flex: '50%',
  },
  adminText: {
    flex: '70%',
  },
}

export default function UserInfo() {
  const [date, setDate] = useState()

  return (
    <div>
      <Header />
      <div className='grid grid-cols-5'>
        <Sidebar />
        <form className='col-span-4 ml-20 mr-40 mt-5'>
          <h2 className='font-bold text-2xl border-b-[1.5px] border-gray-200 py-8'>Thông tin tài khoản</h2>
          <div className='border-b-[1px] border-gray-200 py-4'>
            <h3 className='mb-4'>THÔNG TIN CÁ NHÂN</h3>

            <div className=''>
              <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png" alt="admin-avatar" className='w-40 h-40 my-2' style={styles.avatar} />
            </div>
            <div className='grid gap-4 grid-cols-2'>
              <div className='flex flex-col py-2'>
                  <label>Mã số nhân viên</label>
                  <input type="text" className='border p-2 rounded' placeholder='BO3589556214' />
              </div>
              <div className='flex flex-col py-2'>
                  <label>Họ tên</label>
                  <input type="text" className='border p-2 rounded' placeholder='Nguyễn Văn A' />
              </div>
            </div>

            <div className='grid gap-14 grid-cols-5'>
              <div className='col-span-2 flex flex-col py-2'>
                  <label>Ngày sinh</label>
                  <input type="date" className='border p-2 rounded' onChange={e=>setDate(e.target.value)} />
              </div>

              <div className='col-span-3 flex flex-col py-2'>
                <label >Giới tính</label>
                <RadioGroup
                  className='p-2 gap-10'
                  row
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="male" control={<Radio />} label="Nam" />
                  <FormControlLabel value="female" control={<Radio />} label="Nữ" />
                  <FormControlLabel value="other" control={<Radio />} label="Khác" />
                </RadioGroup>
              </div>
            </div>



            <div className='flex flex-col py-2'>
                <label>Địa chỉ</label>
                <input type="text" className='border p-2' placeholder='2231 Kidd Avenue, AK, Kipnuk,99614, United State' />
            </div>

          </div>

          <div className='border-b-[1px] border-gray-200 py-4'>  
            <h3 className='mb-4'>SỐ ĐIỆN THOẠI VÀ EMAIL</h3>

            <div className='flex flex-col py-2'>
                <label>Số điện thoại</label>
                <div className='grid gap-4 grid-cols-6'>
                  <input disabled type="text" className='col-span-3 border p-2 rounded' value="0123456789" />
                  <button className='col-span-1 border p-2 rounded hover:bg-gray-600 hover:text-white'>Cập nhật</button>
                </div>
            </div>

            <div className='flex flex-col py-2'>
                <label>Email</label>
                <div className='grid gap-4 grid-cols-6'>
                  <input disabled type="text" className='col-span-3 border p-2 rounded' value="email@gmail.com" />
                  <button className='col-span-1 border p-2 rounded hover:bg-gray-600 hover:text-white'>Cập nhật</button>
                </div>
            </div>
          </div>

          <div className='border-b-[1px] border-gray-200 pt-4 pb-6'>  
            <h3 className='mb-4'>PASSWORD</h3>
            <div className='grid gap-4 grid-cols-5'>
              <button className='col-span-1 border p-2 rounded hover:bg-gray-600 hover:text-white'>Đổi mật khẩu</button>
            </div>
          </div>

          <div className='grid gap-4 grid-cols-5'>
              <div className='col-span-2'></div>
              <button className='col-span-1 border p-2 rounded my-8 bg-gray-600 hover:bg-white text-white hover:text-gray-600 hover:border-gray-600'>Lưu thay đổi</button>
          </div>
        
        </form>
      </div>      
      <Footer />
    </div>
  )
}