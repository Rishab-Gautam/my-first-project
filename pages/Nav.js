import React from 'react'
import { Tabs } from 'antd';
import Link from 'next/link'
import Certificate from './Certificate';
import Placement from './Placement';


export default function Nav() {
  return (
    
    

   
    




     <div className="card-container" style={{width:'92%', top:'0px',display:'flex',margin:'0px' ,backgroundColor:'#F6F6F6	',padding:'25px',color:'#666666',top:'0px',fontFamily:'sans-serif',font:'18px proximanova-regular',color:'black',top:'0',top:'0px',zIndex:'999',marginLeft:'45px'}}>
     <div style={{width:'13%', marginLeft:'20px'}}><Link href="/Home"><a>Home</a></Link></div>

      <div style={{width:'13%',marginLeft:'20px'}}><Link href="/Certificate"><a>Certificate</a></Link></div>
    
      
      
     <div style={{ width:'13%',color:'black',marginLeft:'20px'}}><Link href="/Placement"><a>Placement</a></Link></div> 
      <div style={{width:'13%',marginLeft:'20px'}}><Link href="/Syllabus"><a>Syllabus</a></Link></div>
      
 <div style={{width:'13%',marginLeft:'20px'}} >  <Link href="/Project"><a>Project</a></Link></div>
 
 <div style={{width:'13%',marginLeft:'20px'}} >  <Link href="/Teacher"><a>Teacher</a></Link></div>
 <div style={{width:'13%',marginLeft:'20px'}} >  <Link href="/Review"><a>Review</a></Link></div>
 {/* <div style={{width:'15%'}} >  <Link href="/Signup"><a>Signup</a></Link></div> */}

 



  </div>
  

    
  )
}
