import Swiper from 'swiper';
// import Swiper styles
import './node_modules/swiper/swiper.min.css';

const configSwiper = {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  speed: 1400,
  autoplay: true,
}

const swiper = new Swiper('.swiper', configSwiper);
