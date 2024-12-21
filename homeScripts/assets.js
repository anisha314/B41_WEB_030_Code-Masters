
let data = [
    { image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/306448193237439.675758e3241a1.jpg", name: "HBO The Symphatizer Social Campaign", like: 186, imgSee: 699, uploaderName: "Yukai Du" },
    { image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/18d2ad213493793.674b522fd0331.png", name: "chill The Symphatizer Social Campaign", like: 58, imgSee: 299, uploaderName: "Multiple Owners" },
    { image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/1f6959204397491.66a87e32df999.jpg", name: "Benath The Symphatizer Social Campaign", like: 98, imgSee: 855, uploaderName: "Anna Klets" },
    { image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/c84a75214488051.67590a24e82a8.jpg", name: "start The Symphatizer Social Campaign", like: 200, imgSee: 999, uploaderName: "Alex" },
    { image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/5a0af5214672447.675c10503880a.jpg", name: "grays The Symphatizer Social Campaign", like: 500, imgSee: 565, uploaderName: "Obrazur Brands" },
    { image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/e4664e214894321.67609dd231401.jpg", name: "leo The Symphatizer Social Campaign", like: 855, imgSee: 785, uploaderName: "Yukai Du" },
    { image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/f429a5214798183.675eeb5dc895a.jpg", name: "romo The Symphatizer Social Campaign", like: 14, imgSee: 958, uploaderName: "Alex D" },
    { image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/fbc98e214257781.6754da3c8bc18.png", name: "get The Symphatizer Social Campaign", like: 50, imgSee: 708, uploaderName: "Anna Du" },
    { image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d04a26213862755.674ef18b3520b.jpg", name: "rao The Symphatizer Social Campaign", like: 90, imgSee: 888, uploaderName: "Obrazur Du" },
    { image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b0ace9214611933.675af0247d246.png", name: "sao The Symphatizer Social Campaign", like: 70, imgSee: 456, uploaderName: "Yukai Du" },
    { image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ad9e84149478993.630504adcf4d4.gif", name: "geta The Symphatizer Social Campaign", like: 65, imgSee: 654, uploaderName: "Obrazur Du" },
    { image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/006c27212954373.673de8f467688.jpg",name: "mate The Symphatizer Social Campaign", like: 186, imgSee: 699, uploaderName: "Yukai Du" },
    { image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/8399b8208681973.66f2d4fc98699.jpg", name: "res The Symphatizer Social Campaign", like: 15, imgSee: 852, uploaderName: "Obrazur Obrazur" },
    { image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/f0f4c1197643013.6633b57fbd077.jpg", name: "galny The Symphatizer Social Campaign", like: 41, imgSee: 258, uploaderName: "Yukai Du" },
    { image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/a1c390169506963.675e72696f548.png", name: "remo The Symphatizer Social Campaign", like: 186, imgSee: 789, uploaderName: "Anna Du" },
    { image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/1a1716213092041.675758df81435.jpg", name: "moemo The Symphatizer Social Campaign", like: 550, imgSee: 987, uploaderName: "Voyager Du" },
    { image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/5f91c9212804877.673bc94960719.gif", name: "HBO The Symphatizer Social Campaign", like: 754, imgSee: 123, uploaderName: "Obrazur Du" },
    { image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/7b7ed6194330795.65fa6e13b8f80.png", name: "tay The Symphatizer Social Campaign", like: 54, imgSee: 321, uploaderName: "Yukai Du" },
    { image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/e8218c197441621.6630aae1285b5.jpg", name: "andre The Symphatizer Social Campaign", like: 86, imgSee: 147, uploaderName: "Obrazur Du" },
    { image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/963db4213473143.67470ab95a806.jpg", name: "libsa The Symphatizer Social Campaign", like: 85, imgSee: 741, uploaderName: "Yukai Du" },
    { image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/9c815d214299523.6755efe4d5416.png", name: "shi The Symphatizer Social Campaign", like: 58, imgSee: 471, uploaderName: "Voyager Du" },
    { image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/3eb99f212760321.673b0feaae533.png", name: "koil The Symphatizer Social Campaign", like: 89, imgSee: 562, uploaderName: "Yukai Du" },
    { image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/fdc5e9206935059.66d5619e89e24.jpg", name: "groe The Symphatizer Social Campaign", like: 50, imgSee: 256, uploaderName: "Yukai Du" },
    { image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/c0a7a6174800791.64a85f9d1bdd6.jpg", name: "HBO The Symphatizer Social Campaign", like: 186, imgSee: 989, uploaderName: "Voyager Du" }
];

// Function to open the sidebar
function openSidebar() {
document.getElementById("mySidebar").style.width = "250px";
document.getElementById("mySidebar").style.transform = "translateX(0)";  // Use transform for smoother transition
}

// Function to close the sidebar
function closeSidebar() {
document.getElementById("mySidebar").style.width = "0";
document.getElementById("mySidebar").style.transform = "translateX(-100%)";  // Hides sidebar by moving it offscreen
}

// Function to populate the gallery with data
function populateGallery(items) {
    const container = document.getElementById("container");
    container.innerHTML = ""; // Clear existing content

    items.forEach(item => {
        const imageContainer = document.createElement("div");
        imageContainer.className = "image-container";

        const link = document.createElement("a");
        link.href = "../src/index.html"; // Replace this with your actual URL or dynamic value

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.name;
        link.appendChild(img);
        imageContainer.appendChild(link);
        const bottomLeft = document.createElement("div");
        bottomLeft.className = "bottom-left";

        const title = document.createElement("h4");
        title.textContent = item.name;

        const icons = document.createElement("div");
        icons.className = "icons";

        const likeIcon = document.createElement("i");
        likeIcon.className = "fa-solid fa-thumbs-up";
        const likeCount = document.createElement("span");
        likeCount.textContent = item.like;

        const viewIcon = document.createElement("i");
        viewIcon.className = "fas fa-eye";
        const viewCount = document.createElement("span");
        viewCount.textContent = item.imgSee;

        icons.appendChild(likeIcon);
        icons.appendChild(likeCount);
        icons.appendChild(viewIcon);
        icons.appendChild(viewCount);

        bottomLeft.appendChild(title);
        bottomLeft.appendChild(icons);

        const uploader = document.createElement("p");
        uploader.textContent = item.uploaderName;

        //imageContainer.appendChild(img);
        imageContainer.appendChild(bottomLeft);
        imageContainer.appendChild(uploader);

        container.appendChild(imageContainer);
    });
}

// Function to handle search
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredItems = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.uploaderName.toLowerCase().includes(searchTerm)
    );
    populateGallery(filteredItems);
}

// Function to handle sorting
function handleSort(event) {
    const sortBy = event.target.value;
    let sortedItems = [...data];

    if (sortBy === "most-viewed") {
        sortedItems.sort((a, b) => b.imgSee - a.imgSee);
    } else if (sortBy === "most-appreciated") {
        sortedItems.sort((a, b) => b.like - a.like);
    }
    // Add additional sorting cases for other values like "recommended", "most-discussed", etc.

    populateGallery(sortedItems);
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    populateGallery(data);

    const searchInput = document.querySelector(".search-input input");
    searchInput.addEventListener("input", handleSearch);

    const sortSelect = document.querySelector(".sort-select select");
    sortSelect.addEventListener("change", handleSort);
});
