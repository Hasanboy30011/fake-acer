// Import Swiper styles
import 'react-alice-carousel/lib/alice-carousel.css'
import AliceCarousel from 'react-alice-carousel'
import { items } from './CarouselItem1'
const Carousel = () => {
  return <AliceCarousel items={items} autoPlay infinite mouseTracking />
}

export default Carousel
