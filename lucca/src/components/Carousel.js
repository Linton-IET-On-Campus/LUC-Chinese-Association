import React, {Component} from 'react'

import Image from './CarouselItem.js';
import arrow_left from '../assets/img/arrow_left.png';
import arrow_next from '../assets/img/arrow_next.png';

class Carousel extends Component{
    constructor(props){
        super(props)

        this.state ={
             current_image:1,
             current_img_width_percentage:0,
        }
    }
    componentWillMount(){
      const img_width_percentage=window.innerwidth<styles.media.min_width?100:(styles.media.max_img_size/window.screen.availWidth)*120;

      this.setState({current_img_width_percentage:img_width_percentage});
    }

    componentDidMount(){
      window.addEventListener(`load`,()=>{
        this.view_port.style.width=`${this.state.current_img_width_percentage}vw`;
        const img_width_pixels=this.image_container.children[0].getBoundingClientRect().width;

        let first_image_clone=this.image_container.children[0].cloneNode(true);
        let last_image_clone=this.image_container.children[this.image_container.children.length -1].cloneNode(true);
        
        this.image_container.insertBefore(last_image_clone, this.image_container.children[0]);
        this.image_container.append(first_image_clone);

        this.image_container.style.transitionDuration="0.0s";
        this.image_container.style.transform=`translate(-${img_width_pixels}px)`;
      
      //set the button style
      this.button_container.width=window.innerwidth<styles.media.min_width?
          `${this.state.current_img_width_percentage-10}vw`:
          `${this.state.current_img_width_percentage+40}vw`;

      //set image slider style
        window.addEventListener('resize',()=>{
          const img_width_percentage=window.innerwidth<styles.media.min_width?100:(styles.media.max_img_size/window.screen.availWidth)*120;

          for(let i=0;i<this.image_container.children.length; i++){
            this.image_container.children[i].style.width=`${img_width_percentage}vw`;
          }

          this.view_port.style.width=`${img_width_percentage}vw`;
          
          const img_width_pixels=this.image_container.children[0].getBoundingClientRect().width;
          this.image_container.style.transitionDuration="0.0s";
          this.image_container.style.transform=`translate(-${this.state.current_image * img_width_pixels}px)`;

          //set the button style
          this.button_container.width=window.innerwidth<styles.media.min_width?
          `${img_width_percentage-10}vw`:
          `${img_width_percentage+40}vw`;
         });
        })
    } 

    handle_next=()=>{
       if(this.state.current_image<this.image_container.children.length-1){
        let new_current_image =this.state.current_image+1; 
        const img_width_pixels=this.image_container.children[0].getBoundingClientRect().width;

        this.setState({current_image:new_current_image}, () =>{
             this.image_container.style.transitionDuration="0.5s";
             this.image_container.style.transform=`translate(-${ img_width_pixels* this.state.current_image}px)`;

             if(this.state.current_image === this.image_container.children.length -1){
               setTimeout(()=>{
                
                this.image_container.style.transitionDuration="0.0s";
                this.image_container.style.transform=`translate(-${img_width_pixels}px)`;

                this.setState({current_image:1})
               },502);
               
             }
        });

      } else {
        return;
      }
    }

    handle_previous=()=>{
      if(this.state.current_image>0){
        let new_current_image =this.state.current_image-1;
        const img_width_pixels=this.image_container.children[0].getBoundingClientRect().width;

        this.setState({current_image:new_current_image}, () =>{
             this.image_container.style.transitionDuration="0.5s";
             this.image_container.style.transform=`translate(-${img_width_pixels * this.state.current_image}px)`;

             if(this.state.current_image === 0){
               setTimeout(()=>{
                
                this.image_container.style.transitionDuration="0.0s";
                this.image_container.style.transform=`translate(-${img_width_pixels * (this.image_container.children.length-2)}px)`;

                this.setState({current_image:this.image_container.children.length-2})
               },502);
               
             }
        });

      } else {
        return;
      }
    }

    render(){
        return(
            <div>
                  <div ref={ref_id=>this.button_container=ref_id} style={styles.button_container}>

                    <img src={arrow_left} alt='prev' ref={ref_id=>this.button_previous=ref_id} style={styles.button} onClick={this.handle_previous}/>
                    <img src={arrow_next} alt='next' ref={ref_id=>this.button_next=ref_id} style={styles.button} onClick={this.handle_next}/>   
                  </div>
              
                <div ref={ref_id=> this.view_port=ref_id}className="view-port" style={styles.view_port}>
                   <div ref={ref_id => this.image_container = ref_id}className="image-container" style={styles.image_container}>
                     <Image card_number="https://wallpaperaccess.com/full/2019016.jpg" resize_width={this.state.current_img_width_percentage}/>
                     <Image card_number="https://picserio.com/data/out/29/gundam-00-wallpaper_2532255.jpg" resize_width={this.state.current_img_width_percentage}/>
                     <Image card_number="https://i.pinimg.com/originals/46/20/69/4620695217d148ca0c5a22ec56372b19.jpg" resize_width={this.state.current_img_width_percentage}/>
                     <Image card_number="https://wallpapercave.com/wp/wp6264924.jpg" resize_width={this.state.current_img_width_percentage}/>
                   </div> 
                </div>
            </div>
        )
    }
}

const styles={
    view_port:{
      position:'relative',
      width:'1000px',
      top:'200px',
      margin:'12% auto 10% 40%',
      transform:'translate(-50%, -50%)',
      height:'450px',
      overflow:'hidden',
      display:'flex',
      flexDirection:'column',
    },
    image_container:{
      display:'flex',
      flexDirection:'row',
      width:'fit-content',
    },
    media:{
      max_img_size:900,
      min_width:400,
    },
    button:{
      width:80,
      height:130,
      
    },
    button_container:{
      position:'relative',
      top:'260px',
      left:'40%',
      transform:'translate(-50%,-50%)',
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignIterm:'center',
      zIndex:300,
    }


}

export default Carousel;