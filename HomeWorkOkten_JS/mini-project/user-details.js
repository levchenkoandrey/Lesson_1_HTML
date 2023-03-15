    const detailsBlock = document.getElementById('detailsBlock');
    const postsBlock = document.getElementById('postsBlock');
    function loadAndAppendUserDetails() {
        const user = getUser();
        createUserDetails(user);
        CreateButton('post of current user');
    }
    function getUser() {
        const urlDetails = new URL(location.href);
        const data = urlDetails.searchParams.get('data');
        return JSON.parse(data);

    }
    async function fetchJson(link) {
        return await fetch(link)
            .then(response => response.json());
    }

    function createUserDetails(user) {
        const {id,name,username,email,address:{street,suite,city,zipcode,geo},phone,website,company} = user;
        return detailsBlock.innerHTML = ` <h1>${id} : ${name}</h1>
                                   <h2>userName: ${username}</h2>
                                   <h2>email: ${email} </h2>
                                   <h2>address: ${street} ${suite}, ${city}, ${zipcode}</h2>
                                   <h2>geolocation: ${geo.lat} / ${geo.lng}</h2>
                                   <h2>phone: ${phone} </h2>
                                   <h2>website: ${website} </h2>
                                   <h2>company: ${company.name}</h2>
                                   <h3>catchPhrace: ${company.catchPhrase}</h3>
                                   <h3>bs: ${company.bs}</h3>`;
    }
    function CreateButton(text) {
        const btn = document.createElement('button');
        btn.setAttribute('id','btn');
        btn.classList.add('a','show_posts');
        btn.setAttribute('onclick', 'showPosts()');
        btn.innerText = text;
        detailsBlock.appendChild(btn);
    }
    function showPosts() {
        const btn = document.getElementById('btn');
        btn.disabled = true;
        const user = getUser();
        fetchJson(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
            .then(value => {
                postsBlock.append(...value.map(post=>createPost(post)));
            })
        detailsBlock.appendChild(postsBlock);
    }
    function createPost(post) {
        const postBlock = document.createElement('div');
        postBlock.classList.add('userBlock', 'position');
        const title = document.createElement('div');
        const link = document.createElement('a');
        link.classList.add('a');
        link.href = 'post-details.html?postData=' + JSON.stringify(post);
        link.setAttribute('target', '_blank');
        link.innerText = 'detail...';
        title.innerText = post.title.charAt(0).toUpperCase() + post.title.slice(1);
        postBlock.append(title,link);
        return postBlock;
    }
    loadAndAppendUserDetails();