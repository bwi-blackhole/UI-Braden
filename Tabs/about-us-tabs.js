const comp = [
  "Definetely makes babies smile",
  "Voted Most Likely to Keep Being Awesome",
  "One smart cookie",
  "An 11 on a scale of 1 to 10",
  "One of a kind",
  "Mind like a steel trap",
  "Can count to infinity",
  "Can unscramble eggs",
  "Can make apple juice with oranges",
  "Probably going to make the next BIG thing"
];

class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;

    this.itemElement = document.querySelector(
      `.member[data-tab='${this.data}']`
    );

    this.compElement = document.querySelector(
      `.compliment[data-tab='${this.data}']`
    );

    this.tabItem = new TabItem(this.itemElement);
    this.compElement = new CompItem(this.compElement);
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
    this.compElement.select();
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

class CompItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const comps = document.querySelectorAll(".compliment");
    const rand = comp[Math.floor(Math.random() * comp.length)];

    Array.from(comps).forEach(c => {
      c.classList.remove("comp-selected");
    });
    this.element.classList.add("comp-selected");
    this.element.textContent = rand;
  }
}

links = document.querySelectorAll(".tab-name").forEach(tab => new TabLink(tab));
