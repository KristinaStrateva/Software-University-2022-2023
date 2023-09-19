function attachEvents() {
    const loadButtonElement = document.getElementById('btnLoadPosts');
    const viewButtonElement = document.getElementById('btnViewPost');
    const selectElement = document.getElementById('posts');
    const h1PostTitleElement = document.getElementById('post-title');
    const postParagraphElement = document.getElementById('post-body');
    const commentsUlElement = document.getElementById('post-comments');
    // const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    // const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments'

    loadButtonElement.addEventListener('click', onLoad);
    viewButtonElement.addEventListener('click', onView);

    function onLoad() {
        fetch('http://localhost:3030/jsonstore/blog/posts')
            .then(res => res.json())
            .then(data => {
                const postsArr = Object.values(data);

                postsArr.forEach(post => {
                    const id = post.id;
                    const title = post.title;

                    const newOptionElement = document.createElement('option');
                    newOptionElement.value = id;
                    newOptionElement.textContent = title.toUpperCase();

                    selectElement.appendChild(newOptionElement);
                });
            })
            // .catch(err => console.log('posts Error'));

            selectElement.innerHTML = '';
    }
    
    function onView() {
        const currPostId = selectElement.value;

        commentsUlElement.innerHTML = '';

        fetch('http://localhost:3030/jsonstore/blog/posts')
            .then(res => res.json())
            .then(data => {
                const currPost = Object.values(data).find(post => post.id === currPostId);

                h1PostTitleElement.textContent = currPost.title.toUpperCase();
                postParagraphElement.textContent = currPost.body;
            });

        fetch('http://localhost:3030/jsonstore/blog/comments')
            .then(res => res.json())
            .then(data => {
                const commentsArr = Object.values(data);

                commentsArr.forEach(comment => {
                    if (comment.postId === currPostId) {
                        const newLiElement = document.createElement('li');
                        newLiElement.id = comment.id;
                        newLiElement.textContent = comment.text;

                        commentsUlElement.appendChild(newLiElement);
                    }
                });
            })
            // .catch(err => console.log('comments Error'));

    }
}

attachEvents();