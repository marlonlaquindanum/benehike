if(!customElements.get('product-details-tab')) {
  class ProductDetalsTab extends HTMLElement {
    constructor() {
      super();
      console.log("tag loaded==>");
      this.tabs = document.querySelector(".wrapper");
      this.tabButton = document.querySelectorAll(".tab-button");
      this.content = document.querySelectorAll(".content");
      this.tabs.addEventListener('click', this.handleTabEvent.bind(this));
    }

    handleTabEvent(e) {
      const id = e.target.dataset.id;
      console.log("target ID==>", id);
      if (id) {
        this.tabButton.forEach(btn => {
          btn.classList.remove("active");
        });

        e.target.classList.add("active");
        this.content.forEach(content => {
          content.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add('active');
      }
    }
  }

  customElements.define('product-details-tab', ProductDetalsTab);
}