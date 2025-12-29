import React from 'react'
import Sidebar from './sidebar'
import Feed from './feed' 
import Suggestion from './suggestion';
import Navbar from './navbar';

function App(){
  return (
    <div className='d-flex justify-content-between vh-100'> 
      <div className='w-20'><Sidebar /></div>
      <div className='w-50'><Feed /></div>
      <div className='w-30'><Suggestion /></div>
      <div className='navmenu'><Navbar /></div> 
    </div>
  );

}

export default App