let mystr = `[
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?cheese pizza",
        "time": "30 min",
        "type": "VEG",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?roast chicken",
        "time": "45 min",
        "type": "NON-VEG",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Mozrilla Pizza",
        "imageSrc": "https://source.unsplash.com/random?mozrilla pizza",
        "time": "40 min",
        "type": "VEG",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "NON-VEG",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Sushi",
        "imageSrc": "https://source.unsplash.com/random?sushi",
        "time": "50 min",
        "type": "NON-VEG",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Red Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "VEG",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "VEGan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "VEG",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?fried Chicken",
        "time": "55 min",
        "type": "NON-VEG",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "VEG",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "NON-VEG",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Sandwich",
        "imageSrc": "https://source.unsplash.com/random?sandwich",
        "time": "40 min",
        "type": "VEG",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ",
        "imageSrc": "https://source.unsplash.com/random?bbq",
        "time": "70 min",
        "type": "NON-VEG",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "VEG",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fish Tacos",
        "time": "35 min",
        "type": "NON-VEG",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolate Cake",
        "time": "90 min",
        "type": "VEG",
        "isLiked": false,
        "rating": 4.9
    }
]`
const main_menu = JSON.parse(mystr);
const food_container = document.getElementById("food-sec");

function placeFoodItems(n) {
    for (let index = 0; index < main_menu.length; index++) {
        const element = main_menu[index];
        let template_food = `<div id="food-img"><img style="border-radius: 10px;" src="${element["imageSrc"]}" alt="xyz"></div>
<div style="font-size: 12px;" >${element["type"]}</div>
<div style="display: flex; justify-content: space-between;">
    <strong style="float : left;">${element["name"]}</strong> 
    <span style="float : right;">
        <span><img src="Resources/Frame 28.png" alt="rating"></span>
        <span>${element["rating"]}</span>
    </span>
</div>
<div style="display: flex; justify-content: space-between; margin-top:1rem; width: 100%;">
    <div style="color:#DC582A; font-weight:600;"> ${element["time"]} </div> 
    <div>
        <span style="margin-right: 10px; margin-top: 10px"><img src="Resources/Vector-1.png" alt="like"></span>
        <span><img src="Resources/Vector.png" alt="like"></span>
    </div>
</?div>`;


        if (element["rating"] >= n) {
            const food_card = document.createElement('div');
            food_card.className = "food-card";
            food_card.innerHTML = template_food;
            food_card.style.width = "20vw";
            food_card.style.textAlign = "center";
            food_card.style.marginBottom = "2rem";
            food_card.style.borderRadius = "10px";
            food_card.style.boxShadow = "2px 2px 5px rgba(96, 86, 91, 0.4)"
            food_card.style.padding = "0.5rem"
            food_container.style.marginInline = "5px";
            food_container.appendChild(food_card);

        }

    }
}
function placeFoodItems2(str) {
    for (let index = 0; index < main_menu.length; index++) {
        const element = main_menu[index];
        let template_food = `<div id="food-img"><img style="border-radius: 10px;" src="${element["imageSrc"]}" alt="xyz"></div>
<div style="font-size: 12px;" >${element["type"]}</div>
<div style="display: flex; justify-content: space-between;">
    <strong style="float : left;">${element["name"]}</strong> 
    <span style="float : right;">
        <span><img src="Resources/Frame 28.png" alt="rating"></span>
        <span>${element["rating"]}</span>
    </span>
</div>
<div style="display: flex; justify-content: space-between; margin-top:1rem; width: 100%;">
    <div style="color:#DC582A; font-weight:600;"> ${element["time"]} </div> 
    <div>
        <span style="margin-right: 10px; margin-top: 10px"><img src="Resources/Vector-1.png" alt="like"></span>
        <span><img src="Resources/Vector.png" alt="like"></span>
    </div>
</?div>`;


        if (element["type"] == str) {
            const food_card = document.createElement('div');
            food_card.className = "food-card";
            food_card.innerHTML = template_food;
            food_card.style.width = "20vw";
            food_card.style.textAlign = "center";
            food_card.style.marginBottom = "2rem";
            food_card.style.borderRadius = "10px";
            food_card.style.boxShadow = "2px 2px 5px rgba(96, 86, 91, 0.4)"
            food_card.style.padding = "0.5rem"
            food_container.style.marginInline = "5px";
            food_container.appendChild(food_card);

        }

    }
}
let n = 4;
placeFoodItems(n);

const nav_btn = document.getElementById("nav-btn");
const resp_navBar = document.getElementById("responsive_nav")
nav_btn.addEventListener("click", (e) => {
    resp_navBar.style.display = "block";
    const close = document.getElementById("resp-nav-close");
    close.addEventListener("click", () => {
        resp_navBar.style.display = "none";
    })
});

const food_options = Array.from(document.querySelectorAll(".sorting-cards"));
food_options.forEach((element) => {
    element.addEventListener("click", () => {
        let str = element.id;
        switch (str) {
            case "sorting-card-1":
                food_container.replaceChildren();
                placeFoodItems(0);
                break;
            case "sorting-card-2":
                food_container.replaceChildren();
                placeFoodItems2("VEG");
                break;
            case "sorting-card-3":
                food_container.replaceChildren();
                placeFoodItems2("NON-VEG");
                break;
        }
    });
});