const menuItems = [
    {
      category: "Americano Series",
      items: [
        { name: "Iced Americano", price: 21000, image: "img1.jpg" },
        { name: "Hot Americano", price: 21000, image: "x.jpg" },
      ],
    },
    {
      category: "Coffee",
      items: [
        { name: "Iced Cafe Milk Latte", price: 23000, image: "img3.jpg" },
        { name: "Iced Americano", price: 21000, image: "img4.jpg" },
        { name: "Iced Classic Latte", price: 25000, image: "img5.jpg" },
        { name: "Hot Cappuccino", price: 27000, image: "img6.jpg" },
      ],
    },
    {
      category: "Non Coffee",
      items: [
        { name: "Iced Dark Chocolate", price: 25000, image: "img7.jpg" },
        { name: "Hot Dark Chocolate", price: 25000, image: "img8.jpg" },
      ],
    },
  ];
  
  function displayMenu() {
    const menuContainer = document.getElementById("menu-container");
  
    menuItems.forEach((category) => {
      const categoryTitle = document.createElement("h2");
      categoryTitle.textContent = category.category;
      categoryTitle.style.color = "#fff";
      menuContainer.appendChild(categoryTitle);
  
      category.items.forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "menu-item";
  
        itemDiv.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>Rp ${item.price.toLocaleString()}</p>
        `;
  
        menuContainer.appendChild(itemDiv);
      });
    });
  }
  
  document.addEventListener("DOMContentLoaded", displayMenu);
  

  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if ((email === "firman@gmail.com" && password === "11")|| (email === "novan@gmail.com" && password === "111")|| (email === "afa@gmail.com" && password === "111")) {
      // Animasi sebelum pindah halaman
      document.querySelector(".login-box").style.transform = "scale(0.95)";
      setTimeout(() => {
        window.location.href = "contoh.html";
      }, 300);
    } else {
      alert("Email atau password salah!");
  
    }
  });
  