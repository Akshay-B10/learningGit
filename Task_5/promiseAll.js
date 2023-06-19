const posts = [];
var srNo = 1;

function logPosts() {
    console.log(posts);
}

function updateLastUserActivity() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts[posts.length - 1].lastActivity = new Date().getTime();
            console.log(posts[posts.length - 1]);
            resolve();
        }, 1000);
    });
}

function createPost() {
    return new Promise((resolve, reject) => {
        // Math.floor((Math.random() * 10) + 1) -> use to get random integer from 1 to 10
        setTimeout(() => {
            // let postNo = Math.floor((Math.random() * 100) + 1);
            let postNo = window.srNo;
            window.srNo++;
            posts.push({title: `Post ${postNo}`});
            resolve(updateLastUserActivity);
        }, 2000);
    });
}

function delPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0)
            {
                posts.pop()
                resolve(logPosts);
            } else
            {
                reject("Error: Could not delete post");
            }
        }, 1000);
    });
}
/*
Promise.all([updateLastUserActivity, createPost]).then((func) => { func() })
.catch((err) => {
    console.log(err);
});
Promise.all([updateLastUserActivity, createPost]).then((func) => { func() })
.catch((err) => {
    console.log(err);
});
Promise.all([updateLastUserActivity, createPost]).then((func) => { func() })
.catch((err) => {
    console.log(err);
});
Promise.all([delPost]).then((func) => { func() })
.catch((err) => {
    console.log(err);
});
Promise.all([updateLastUserActivity, createPost]).then((func) => { func() })
.catch((err) => {
    console.log(err);
})
Promise.all([delPost]).then((func) => { func() })
.catch((err) => {
    console.log(err);
});
*/
createPost().then((func) => {
    func().then(() => {
        createPost().then((func) => {
            func().then(() => {
                createPost().then((func) => {
                    func().then(() => {
                        delPost().then((func) => {
                            func();
                            delPost().then((func) => {
                                func();
                            }).catch((err) => console.log(err))
                        }).catch((err) => console.log(err))
                    })
                })
            })
        })
    })
})