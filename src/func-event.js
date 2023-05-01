import React from 'react'

export default function Button(){
    const onClickButtonOK =() =>{
        alert('OK')
    }
    const onClickButtonCancel =() =>{
        alert('Cancel')
    }
    let banner = '/image/large.jpg'
    let url = 'https://www.google.com/imgres?imgurl=https%3A%2F%2F1417094351.rsc.cdn77.org%2Farticles%2F3568%2F3567411%2Fthumbnail%2Flarge.gif%3F1&tbnid=7AvyC81MS1uZFM&vet=12ahUKEwiB35bAk9P-AhUHJrcAHTquAMsQMygCegUIARDEAQ..i&imgrefurl=https%3A%2F%2Fwww.readawrite.com%2Fa%2F391e08a55b78c786dbbbed34be1112c3&docid=kStdBR4p_rgtvM&w=800&h=800&q=%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%A3%E0%B8%B1%E0%B8%81&ved=2ahUKEwiB35bAk9P-AhUHJrcAHTquAMsQMygCegUIARDEAQ'
    const bannerClick =() => {
        window.open(url)
    }
    return(
        <div>
            <img src= {banner}  onClick={bannerClick} style={{cursor:'pointer',width:'10%'}}/>
            <button onClick={onClickButtonOK}>OK</button>
            <button onClick={onClickButtonCancel}>Cancel</button> 
        </div>
    )
}