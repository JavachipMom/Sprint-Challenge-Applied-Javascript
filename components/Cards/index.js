// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

window.addEventListener("load", () => {
    console.log("The page has been loaded successfully!!");

    const cardContainer = document.querySelector(".cards-container");

    axios.get("https://lambda-times-backend.herokuapp.com/articles")

    .then(response => {
        // console.log(response);
        const articlesArray = response.data.articles
        console.log(articlesArray)
        const articlesKeys = Object.values(articlesArray)
        console.log(Object.values(articlesKeys))

        articlesKeys.forEach(keyData => {
            keyData.forEach(stuff => {
                cardContainer.appendChild(lambdaCards(stuff))
                })
            
        })    


    })
    .catch(error => {
        console.log("The data was not returned properly", error);
    })
})

const lambdaCards = (article) => {
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgBox = document.createElement("div");
    const img = document.createElement("img");
    const byWho = document.createElement("span");

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgBox);
    imgBox.appendChild(img);
    author.appendChild(byWho);

    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgBox.classList.add("img-container");


    headline.textContent = article.headline;
    img.src = article.authorPhoto;
    byWho.textContent = article.authorName;

    return card;
}

cardContainer();
