import React from "react";

import Sidebar from '../SideBar Section/Sidebar'
import Body from '../Body Section/Body'

function ReceivingPurchasePage() {
  return (
    <>
      <div className='dashboard flex'>
      <div className='dashboardContainer flex'>
        <Sidebar />
        <Body />
      </div>
    </div>
    </>
  )
}
export default ReceivingPurchasePage;