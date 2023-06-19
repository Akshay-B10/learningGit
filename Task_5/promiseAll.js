const posts = [];
var srNo = 1;

function logPost() {
    console.log(posts);
}

async function createAndUpdatePost() {
    const createPost = await new Promise((res, rej) => {
        setTimeout(() => {
            posts.push({ title: `Post ${window.srNo}` });
            window.srNo++;
            res();
        }, 2000);
    });

    const updatePost = await new Promise((res, rej) => {
        setTimeout(() => {
            posts[posts.length - 1].lastActivity = new Date().getTime();
            res();
        }, 1000);
    });
    console.log(posts[posts.length - 1]);
}

async function delPost() {
    try{
        const deletePost = await new Promise((res, rej) => {
            setTimeout(() => {
                if (posts.length > 0) {
                    posts.pop();
                    res();
                } else {
                    rej("Error: Could not delete post")
                }
            }, 1000)
        });
        logPost();
    } catch(err) {
        console.log(err)
    }
}

async function abc() {
    await createAndUpdatePost();
    await createAndUpdatePost();
    await delPost();
    await delPost();
    await delPost();
}
abc();