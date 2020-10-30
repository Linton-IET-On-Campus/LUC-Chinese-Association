import React from 'react'

function CarouselItem(props){
    return(
        <div style={{
            ...styles.Image,
            width:`${props.resize_width}vw`
            }}>
            <img style={styles.image} src={props.card_number} alt="image"/>
        </div>
    )
}

const styles={
    Image:{
        height:'auto',
        boxSizing:'border-box',
    },
    
    image:{
        display:'flex',
        width:'100%',
        height:'100%',
        position:'relative',
        top:'40%',
        left:'50%',
        transform:'translate(-50%,-50%)'
    }
}

export default React.memo(CarouselItem);