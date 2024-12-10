import React from 'react'
import './sidebar.css'

// Imported Images ==========>
import logo from '../../Assets/logopalm.png'

// imported Icons ===========>
import {IoMdSpeedometer} from 'react-icons/io'
import {MdDeliveryDining} from 'react-icons/md'
import {MdOutlineExplore} from 'react-icons/md'
import {BsTrophy} from 'react-icons/bs'
import {AiOutlinePieChart} from 'react-icons/ai'
import {BiTrendingUp} from 'react-icons/bi'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import {BsCreditCard2Front} from 'react-icons/bs'
import {BsQuestionCircle} from 'react-icons/bs'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sideBar grid'>

      <div className="logoDiv flex">
        <img src={logo} alt="Image Name" />
      </div>

      <div className="menuDiv">
        <h3 className="divTitle font-bold"> 
          QUICK MENU
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="/dashboard" className='menuLink flex'>
                <IoMdSpeedometer className="icon"/>
                <span className="smallText">
                  Dashboard
                </span>
            </a>
          </li>

          <li className="listItem">
            <Link to="/Stock" className='menuLink flex'>
                <MdDeliveryDining className="icon"/>
                <span className="smallText">
                  คลังสินค้า
                </span>
            </Link>
          </li>
          
          <li className="listItem">
           <Link to="/Suppier" className='menuLink flex'>
                <MdOutlineExplore className="icon"/>
                <span className="smallText">
                  suppliers
                </span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/Purchase" className='menuLink flex'>
                <BsTrophy className="icon"/>
                <span className="smallText">
                  แผนกจัดซื้อ
                </span>
            </Link>
          </li>

          
          <li className="listItem">
            <Link to="/UserManagement" className='menuLink flex'>
                <BsTrophy className="icon"/>
                <span className="smallText">
                  การจัดการผู้ใช้งาน
                </span>
            </Link>
          </li>
          
          <li className="listItem">
            <Link to="/Requisition" className='menuLink flex'>
                <BsTrophy className="icon"/>
                <span className="smallText">
                  ใบขอเบิกพัสดุ
                </span>
            </Link>
          </li>
          
          <li className="listItem">
            <a href="#" className='menuLink flex'>
                <BsTrophy className="icon"/>
                <span className="smallText">
                  สรุปรายการ
                </span>
            </a>
          </li>
          
          <li className="listItem">
            <Link to="/Receipt" className='menuLink flex'>
                <BsTrophy className="icon"/>
                <span className="smallText">
                  บันทึกใบขอซื้อ
                </span>
            </Link>
          </li>

        </ul>
      </div>
          


      <div className="settingsDiv">
        <h3 className="divTitle font-bold">
          SETTINGS
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="#" className='menuLink flex'>
                <AiOutlinePieChart className="icon"/>
                <span className="smallText">
                  Charts
                </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
                <BiTrendingUp className="icon"/>
                <span className="smallText">
                  Trends
                </span>
            </a>
          </li>
          
          <li className="listItem">
            <a href="#" className='menuLink flex'>
                <MdOutlinePermContactCalendar className="icon"/>
                <span className="smallText">
                  Contact
                </span>
            </a>
          </li>


          <li className="listItem logOutBtn">
            <a href="/" className='menuLink flex'>
                <BsFillArrowLeftCircleFill className="icon"/>
                <span className="smallText">
                  ออกจากระบบ
                </span>
            </a>
          </li>

        </ul>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className="icon"/>
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Help Center</h3>
          <p>Having trouble in Planti, please contact us from for more questions.</p>

          <button className='btn'>Go to help center</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar