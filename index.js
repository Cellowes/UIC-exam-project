const elBlock = document.querySelector(".elBlock");

// function for creating post with image in it
let createPostAndImage = (pokemon, textDiv) => {
    const postDiv = document.createElement("div");
    postDiv.className = "flex flex-col bg-white w-[307px] border-2 border-black rounded-[20px]";

    const imgDiv = document.createElement("div");
    imgDiv.className = "flex items-center justify-center w-[303px] h-[255px] border-b-2 border-black rounded-t-[20px] bg-white";
    const postImg = document.createElement("img");
    postImg.setAttribute("src", pokemon.img);
    postImg.className = "w-[157px] h-[157px]";

    imgDiv.appendChild(postImg);
    postDiv.appendChild(imgDiv);
    postDiv.appendChild(textDiv);

    elBlock.append(postDiv);
};


// function for writing down text part of post
let creatingText = (pokemon) => {
    let textDiv = document.createElement("div");
    textDiv.className = "pt-[20px] pb-[37px] px-[30px] flex flex-col items-start";

    let titleDiv = document.createElement("div");
    titleDiv.className = "flex items-center justify-between w-full mb-[5px]";

    let textTitle = document.createElement("p");
    textTitle.textContent = pokemon.name;
    textTitle.className = "text-2xl font-roboto font-bold";

    let favouriteBtn = document.createElement("button");
    favouriteBtn.className = "fa-regular fa-heart text-3xl";

    favouriteBtn.addEventListener('click', () => {
        if (favouriteBtn.classList.contains("fa-regular")) {
            favouriteBtn.classList.remove("fa-regular");
            favouriteBtn.classList.add("fa-solid", "fa-heart", "text-red-600", "text-3xl", "likedElement");
            window.localStorage.setItem('likedElement', 'true')
        } else {
            favouriteBtn.classList.remove("fa-solid", "fa-heart", "text-red-600", "text-3xl", "likedElement");
            window.localStorage.removeItem('likedElement')
            favouriteBtn.classList.add("fa-regular", "fa-heart", "text-3xl");
        }
    });
    
    let textDescribtion = document.createElement("p");
    textDescribtion.textContent = pokemon.type;
    textDescribtion.className = "text-xl font-roboto font-medium mb-[25px]";

    let weightDiv = document.createElement("div");
    weightDiv.className = "flex gap-[30px] font-roboto font-bold text-2xl"
    let textWeight = document.createElement("p");
    let textAge = document.createElement("p");
    textWeight.textContent = pokemon.weight;
    textAge.textContent = pokemon.height;

    textDiv.append(titleDiv, textDescribtion, weightDiv);
    titleDiv.append(textTitle, favouriteBtn);
    weightDiv.append(textWeight, textAge);
    return textDiv;
};

//using for method for each post of pokemons.js
for (let pokemon of pokemons) {
    let textDiv = creatingText(pokemon);
    createPostAndImage(pokemon, textDiv);
}

// adding function for like button in header 
let elLikeBtn = document.querySelector(".likeBtn")
elLikeBtn.addEventListener('click', () => {
        if (elLikeBtn.classList.contains("fa-regular")) {
            elLikeBtn.classList.remove("fa-regular");
            elLikeBtn.classList.add("fa-solid", "fa-heart", "text-red-600");
        } else {
            elLikeBtn.classList.remove("fa-solid", "text-red-600");
            elLikeBtn.classList.add("fa-regular");
        }
    });



