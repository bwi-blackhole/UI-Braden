class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;

    this.itemElement = document.querySelector(
      `.member[data-tab='${this.data}']`
    );

    this.tabItem = new TabItem(this.itemElement);
    element.addEventListener("click", () => {
      this.select();
    });
  }

  select() {
    const links = document.querySelectorAll(".tab-name");
    Array.from(links).forEach(element => {
      element.classList.remove("name-selected");
    });
    this.element.classList.add("name-selected");
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll(".member");
    Array.from(items).forEach(item => {
      item.classList.remove("member-selected");
    });
    this.element.classList.add("member-selected");
  }
}

links = document.querySelectorAll(".tab-name").forEach(tab => new TabLink(tab));
