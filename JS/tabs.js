class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;

    this.itemElement = document.querySelector(
      `.feature-item[data-tab='${this.data}']`
    );

    this.tabItem = new TabItem(this.itemElement);
    element.addEventListener("click", () => {
      this.select();
    });
  }

  select() {
    const links = document.querySelectorAll(".feature-title");
    Array.from(links).forEach(element => {
      element.classList.remove("tab-selected");
    });
    this.element.classList.add("tab-selected");
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll(".feature-item");
    Array.from(items).forEach(item => {
      item.classList.remove("text-selected");
    });
    this.element.classList.add("text-selected");
  }
}

links = document
  .querySelectorAll(".feature-title")
  .forEach(tab => new TabLink(tab));
