// STEP 1: Get existing posts from localStorage
let posts = JSON.parse(localStorage.getItem("posts")) || [];

// STEP 2: Select button
const addPostBtn = document.getElementById("addPostBtn");

// STEP 3: Add click event
addPostBtn.addEventListener("click", function () {

    // Get input values
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    // Validation
    if (title === "" || content === "") {
        alert("Please enter both title and content");
        return;
    }

    // Create post object
    const post = {
        title: title,
        content: content
    };

    // Add post to array
    posts.push(post);

    // Save updated posts to localStorage
    localStorage.setItem("posts", JSON.stringify(posts));

    // Clear inputs
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    displayPosts();

});
// STEP 4: Function to display posts
function displayPosts() {

    const postsContainer = document.getElementById("posts");

    // Clear previous content
    postsContainer.innerHTML = "";

    // Loop through posts array
    posts.forEach(function (post, index) {

        const postDiv = document.createElement("div");
        postDiv.classList.add("post");

        postDiv.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.content}</p>
    <button onclick="deletePost(${index})">Delete</button>
`;


        postsContainer.appendChild(postDiv);
    });
}

// Call function when page loads
displayPosts();
// STEP 5: Delete post
function deletePost(index) {

    // Remove post from array
    posts.splice(index, 1);

    // Update localStorage
    localStorage.setItem("posts", JSON.stringify(posts));

    // Refresh UI
    displayPosts();
}

