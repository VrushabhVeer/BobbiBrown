let cartArr = JSON.parse(localStorage.getItem("cart")) || [];

function getData() {
  fetch("https://cult-am5d.onrender.com/mens")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      appendData(res);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
getData();

let container = document.querySelector("#container");

function appendData(data) {
  data.map(function (el, i) {
    let productDiv = document.createElement("div");
    productDiv.setAttribute("class", "productDiv");

    let image = document.createElement("img");
    image.setAttribute("src", el.image);

    let productName = document.createElement("p");
    productName.setAttribute("class", "productName");
    productName.innerText = el.title;

    let productDis = document.createElement("p");
    productDis.setAttribute("class", "productDis");
    productDis.innerText = el.category;

    let prize = document.createElement("p");
    prize.setAttribute("class", "prize");
    prize.innerText = "₹ " + el.price;

    let innerDiv1 = document.createElement("div");

    let innerDiv2 = document.createElement("div");

    innerDiv1.append(image);

    innerDiv2.append(productName, productDis, prize);

    productDiv.append(innerDiv1, innerDiv2);

    container.append(productDiv);
  });
}
