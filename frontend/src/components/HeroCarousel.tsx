import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const HeroCarousel = () => {
    render(){
        return (
            <div className="border-2 h-screen">
                <Carousel showThumbs={false} autoPlay infiniteLoop interval={2000} showArrows={false} showStatus={false}>
                    
                    <div>
                        <img src="../assets/pc.png" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="../assets/kraken.jpg" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="../assets/rtx4080.jpg" />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src="../assets/ryzen9.jpg" />
                        <p className="legend">Legend 4</p>
                    </div>
                </Carousel>
            </div>
        )
    }
    
  }
  
  export default HeroCarousel