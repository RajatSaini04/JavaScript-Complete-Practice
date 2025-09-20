const users = [
    {
        name: "Aarav Mehta",
        pic: "https://images.unsplash.com/photo-1757906447358-f2b2cb23d5d8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "A creative storyteller who loves photography and coffee-fueled nights."
    },
    {
        name: "Sophia Johnson",
        pic: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Tech enthusiast exploring AI, startups, and design innovation."
    },
    {
        name: "Daniel Kim",
        pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Fitness lover and travel junkie, always chasing sunsets."
    },
    {
        name: "Elena Garcia",
        pic: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Minimalist thinker, passionate about books and urban architecture."
    },
    {
        name: "Maya Patel",
        pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Dreamer and doer, blending art with technology for social impact."
    },
    {
        name: "James Carter",
        pic: "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Music producer who believes every beat tells a story."
    },
    {
        name: "Max Wane",
        pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Avatar director and visual effects artist with a passion for sci-fi worlds."
    }
];


// sare user show karan

function showusers(arr) {
    arr.forEach(user => {
        // create parent card
        let card = document.createElement("div");
        card.classList.add("card");

        // image
        let img = document.createElement("img");
        img.src = user.pic;
        img.alt = "";
        img.classList.add("bg-img");

        // blurred layer
        let blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage = `url(${user.pic})`;
        blurredLayer.classList.add("blurred-layer");

        // content container
        let content = document.createElement("div");
        content.classList.add("content");

        // h3
        let h3 = document.createElement("h3");
        h3.textContent = user.name;

        // paragraph
        let p = document.createElement("p");
        p.textContent = user.bio;

        // assemble
        content.appendChild(h3);
        content.appendChild(p);

        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        // finally add to body (or any container)
        document.querySelector('.cards').appendChild(card)
    });
}

showusers((users))

// filter karna har bar input karne pr
let userinput = document.querySelector('input')

userinput.addEventListener('input', () => {
    let newusers = users.filter(user => {
        return user.name.toLowerCase().startsWith(userinput.value.toLowerCase().trim())
    })
    document.querySelector('.cards').innerHTML = ""

    // agar jo array bana hai wo empty hai to no user found show karna
    if (newusers.length === 0) {
        document.querySelector('.cards').innerHTML = "<h2>No User Found</h2>"
    } else {
        showusers(newusers)
    }
})

// show karna filtered user
