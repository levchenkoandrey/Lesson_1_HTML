    const postBlock = document.getElementById('postBlock');
    const commentsBlock = document.getElementById('commentsBlock');
    function loadAndAppendPostDetails() {
        const post = getPost();
        createPostDetails(post);
        CreateButton('Show comments');
    }
    function getPost() {
        const urlDetails = new URL(location.href);
        const data = urlDetails.searchParams.get('postData');
        return JSON.parse(data);
    }
    function createPostDetails(post) {
        const {userId,id,title,body} = post;
        return postBlock.innerHTML = `<h2>userID: ${userId}</h2>
                               <h2>ID: ${id}</h2>
                               <h1>${title.charAt(0).toUpperCase() + title.slice(1)}</h1>
                               <p>${body.charAt(0).toUpperCase() + body.slice(1)}</p>`
    }
    async function fetchJson(link) {
        return await fetch(link)
            .then(response => response.json())
    }
    function CreateButton(text) {
        const btn = document.createElement('button');
        btn.setAttribute('id', 'btn');
        btn.classList.add('a','show_posts');
        btn.setAttribute('onclick', 'showComments()')
        btn.innerText = text;
        postBlock.appendChild(btn);
    }
    function showComments() {
        const btn = document.getElementById('btn');
        btn.disabled = true;
        const post = getPost();
        fetchJson(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            .then(value => {
                commentsBlock.append(...value.map(comment=>createComment(comment)));
            })
        postBlock.appendChild(commentsBlock);
    }
    function createComment(comment) {
        const commentElement = document.createElement('div');
        commentElement.classList.add('userBlock', 'comment');
        commentElement.innerHTML = comment.body.charAt(0).toUpperCase() + comment.body.slice(1);
        return commentElement;
    }
    loadAndAppendPostDetails();

