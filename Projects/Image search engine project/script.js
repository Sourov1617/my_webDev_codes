const accessKey = "vgJzgiDivqXXIQdqopHB2lcZK4NZ6EhWTHugVH2qM8E";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResults = document.getElementById("search-results");
const showMoreButton = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value.trim();
    if (keyword === "") return; 

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${encodeURIComponent(keyword)}&per_page=12&client_id=${accessKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        console.log("API Response:", data); 

        if (page === 1) {
            searchResults.innerHTML = ""; 
        }

        if (data.results.length === 0) {
            alert("No more images found.");
            showMoreButton.style.display = "none"; 
            return;
        }

        data.results.forEach((result) => {
            const img = document.createElement("img");
            img.src = result.urls.small;
            img.alt = result.alt_description;

            const imageLink = document.createElement("a");
            imageLink.href = result.links.html;
            imageLink.target = "_blank";

            imageLink.appendChild(img);
            searchResults.appendChild(imageLink);
        });
 
        showMoreButton.style.display = "block";

    } catch (error) {
        console.error("Error fetching images:", error);
    }
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1; 
    searchImages();
});

showMoreButton.addEventListener("click", () => {
    page++; 
    searchImages();
});
