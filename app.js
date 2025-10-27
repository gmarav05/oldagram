const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const nameEl = document.getElementById("name-el");
const usernameEl = document.getElementById("user-name-el");
const locationEl = document.getElementById("location-el");
const avatarEl = document.getElementById("avatar-el");
const postEl = document.getElementById("post-el");
const commentEl = document.getElementById("comment-el");
const likesEl = document.getElementById("likes-el");

 let count = 0;

setInterval(() => {
   
    if (count === 3) {
        count = 0;
    }
    render();
    count++;
   
    

}, 3000);

  function render() {
        nameEl.textContent = posts[count].name;
        avatarEl.src = posts[count].avatar;
        postEl.src = posts[count].post;
        usernameEl.textContent = posts[count].username;
        locationEl.textContent = posts[count].location;
        commentEl.textContent = posts[count].comment;
        likesEl.textContent = posts[count].likes;    
    }    