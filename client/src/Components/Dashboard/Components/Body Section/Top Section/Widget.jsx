import './top.css'
import React from 'react'


import { BsArrowRightShort } from 'react-icons/bs'
import { BsQuestionCircle } from 'react-icons/bs'
import img2 from '../../../Assets/image (2).png'
import video from '../../../Assets/palm.mp4'

export default function Widget() {
    return (
        <div className="cardSection flex">

            <div className="rightCard flex">
                <h1>Create and sell extraordinary products</h1>
                <p>The world's fast growing industry today are natural made products!</p>

                <div className="buttons flex">
                    <button className='btn'>Explore More</button>
                    <button className='btn transparent'>Top Sellers</button>
                </div>

                <div className="videoDiv">
                    <video src={video} autoPlay loop muted></video>
                </div>
            </div>

            <div className="leftCard flex">
                <div className="main flex">

                    <div className="textDiv">
                        <h1>My Stat</h1>

                        <div className="flex">
                            <span>
                                Today <br /> <small>4 Orders</small>
                            </span>
                            <span>
                                This Month <br /> <small>175 Orders</small>
                            </span>
                        </div>

                        <span className="flex link">
                            Go to my orders <BsArrowRightShort className="icon" />
                        </span>

                    </div>

                    <div className="imgDiv">
                        <img src={img2} alt="Image Name" />
                    </div>


                </div>

                <div className="sideBarCard">
                    <BsQuestionCircle className="icon" />
                    <div className="cardContent">
                        <div className="circle1"></div>
                        <div className="circle2"></div>

                        <h3>Help Center</h3>
                        <p>Having trouble in Planti, please contact us from for more questions.</p>

                        <button className='btn'>Go to help center</button>
                    </div>
                </div>
            </div>
        </div>
    )
}