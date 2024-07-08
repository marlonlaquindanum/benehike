if(!customElements.get("multi-column-swiper")) {
  class MultiColumnSwiper extends HTMLElement {
    constructor() {
      super();
      this.swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          960: {
            slidesPerView: 2,
          }
        }
      });
    }
  }

  customElements.define('multi-column-swiper', MultiColumnSwiper);
}