//id name
const searchButton = document.getElementById('search-button')
const inputField = document.getElementById('input-field')
searchButton.addEventListener('click', function () {
    const search = inputField.value
    inputField.value = ''
    const url = `https://openlibrary.org/search.json?q=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data))
})
//bopks search
const displayResult = books => {
    const api = books.docs.slice(0, 15)
    const displayDetails = document.getElementById('displayDetails')
    displayDetails.textContent = ''
    api.forEach(book => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
    <div class="card">
        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${book.author_name}</h5>
    <h5 class="card-title"> ${book.publisher}</h5>
    <h5 class="card-title">${book.publish_year}</h5>
    <p class="card-text">${book.title}</p>
    </div>
    </div>
`
        displayDetails.appendChild(div)
    })
// books result
    const showResult = books.numFound
    if (showResult === 0) {
        const displySearchResult = document.getElementById("show-result");

        displySearchResult.textContent = "";
        const div = document.createElement("div");
        div.classList.add("h2")
        div.innerHTML = `Result Not Found <h3>${showResult}</h3> `;
        displySearchResult.appendChild(div)
    } else {
        const displySearchResult = document.getElementById("show-result");

        displySearchResult.textContent = "";
        const div = document.createElement("div");
        div.classList.add("h2")
        div.innerHTML = `Ressult Found <h3>${showResult}</h3> `;
        displySearchResult.appendChild(div)
    };

}


