fetch('https://randomuser.me/api/?results=3')
    .then(rawdata => rawdata.json())
    .then((data) => {
        console.log(data.results);

        data.results.forEach((user) => {
            // Parent container
            const card = document.createElement("div");
            card.className = "max-w-sm w-full bg-white rounded-2xl shadow-lg p-6 text-center";

            // User Image
            const img = document.createElement("img");
            img.className = "w-24 h-24 mx-auto rounded-full shadow-md";
            img.src = user.picture.large;
            img.alt = "User Pic";

            // User Name
            const name = document.createElement("h2");
            name.className = "mt-4 text-xl font-semibold text-gray-800";
            name.textContent = user.name.first + ' ' + user.name.last;

            // User Role
            const role = document.createElement("p");
            role.className = "text-gray-500 text-sm";
            role.textContent = user.location.country;

            // Button wrapper
            const btnWrapper = document.createElement("div");
            btnWrapper.className = "mt-4 flex justify-center gap-3";

            // Follow Button
            const followBtn = document.createElement("button");
            followBtn.className = "px-4 py-2 bg-blue-500 text-white text-sm rounded-lg shadow hover:bg-blue-600";
            followBtn.textContent = "Follow";

            // Message Button
            const msgBtn = document.createElement("button");
            msgBtn.className = "px-4 py-2 border border-gray-300 text-sm rounded-lg shadow hover:bg-gray-100";
            msgBtn.textContent = "Message";

            // Append buttons
            btnWrapper.appendChild(followBtn);
            btnWrapper.appendChild(msgBtn);

            // Append all elements to card
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(role);
            card.appendChild(btnWrapper);

            // Append card to #app
            document.querySelector('.usercards').appendChild(card);
        });
    })
    .catch((err) => {
        console.log(err);
    })