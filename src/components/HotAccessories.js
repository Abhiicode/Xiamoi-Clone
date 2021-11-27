import React from 'react'
import HotItemCard from "./HotItemCard.js" 
import "../styles/HotAccessories.css"
const HotAccessories = ({music, musicCover,smartDevice, smartDeviceCover,home,homeCover,
lifestyle,lifestyleCover,mobileAccessories,mobileAccessoriesCover}) => {
    return (
        <div className="HotAccessories">
            <div>
                <img src={musicCover || smartDeviceCover || homeCover ||
                lifestyleCover||mobileAccessoriesCover} alt="Cover"/>
            </div>

            <div>
                {music && music.map((item,index)=>(
                    <HotItemCard key ={item.image} name={item.name} image ={item.image} 
                    index={index} price ={item.price}/>
                ))}

                {smartDevice && smartDevice.map((item,index)=>(
                    <HotItemCard key ={item.image} name={item.name} image ={item.image} 
                    index={index} price ={item.price}/>
                ))}

                {home && home.map((item,index)=>(
                    <HotItemCard key ={item.image} name={item.name} image ={item.image} 
                    index={index} price ={item.price}/>
                ))}

                {lifestyle && lifestyle.map((item,index)=>(
                    <HotItemCard key ={item.image} name={item.name} image ={item.image} 
                    index={index} price ={item.price}/>
                ))}

                {mobileAccessories && mobileAccessories.map((item,index)=>(
                    <HotItemCard key ={item.image} name={item.name} image ={item.image} 
                    index={index} price ={item.price}/>
                ))}
                <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />

            </div>

        </div>
    )
}

export default HotAccessories
