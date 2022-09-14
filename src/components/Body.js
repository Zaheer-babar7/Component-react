import React from 'react'
import Cards from './Cards';
import { BsTools } from 'react-icons/bs';
import { SiFiles } from 'react-icons/si';
import { RiFileListFill } from 'react-icons/ri';
import { AiFillCamera } from 'react-icons/ai';
import pic1 from '../images/pic1.PNG'
import pic2 from '../images/pic2.PNG'
import pic3 from '../images/pic3.PNG'



const Body = () => {
  return (
    <div>
        <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        marginTop: '-60px'
       }}>
        <Cards title='Services' icon={<BsTools color='white' size={30} />}/>
        <Cards title='Shared files' icon={<SiFiles color='white' size={30} />}/>
        <Cards title='Managed files' icon={<RiFileListFill color='white' size={30} />}/>
        <Cards title='Videos, photos' icon={<AiFillCamera color='white' size={30} />}/>
       </div>
       <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '55px',
        marginTop: '35px'
       }}>
         <img width='270px' src={pic1} alt='pic'/>
         <img width='270px' src={pic2} alt='pic'/>
         <img width='465px' src={pic3} alt='pic'/>
       </div>
    </div>
  )
}

export default Body