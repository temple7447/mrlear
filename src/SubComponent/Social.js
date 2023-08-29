import React from 'react'
import { BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { AiOutlineWifi } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FaLinkedin } from 'react-icons/fa';


function Social() {
  return (
    <div className='d-flex justify-content-sm-between px-sm-5 align-items-sm-center py-2' style={{ backgroundColor: '#5950f6' }}>

      <div style={{ color: 'rgb(246,254,254)', }}>Have any question +2347011951761</div>
      <div className='d-flex justify-content-around gap-4 align-items-center ' style={{ fontSize: 20 }}>
        <BsFacebook />
        <AiOutlineWifi />
        <FcGoogle />
        <BsWhatsapp />
        <FaLinkedin />
      </div>

    </div>
  )
}

export default Social