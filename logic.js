const getPost = () => {
  let fetchPosts = fetch("https://jsonplaceholder.typicode.com/comments");
  let userName = "";
  fetchPosts.then((response) => {
    response.json().then((mydata) => {
      //  debugger
      for (let i = 0; i < mydata.length; i++) {
        let post = mydata[i];
        // userName = userName + post.name;
        userName =
          userName +
          `
 <div class="card-body" id="allposts" >
    <h5 class="card-title"> ${post.name} </h5>
    <p class="card-text">${post.body} </p>
     <hr>
  </div>`;
      }
      document.querySelector("#allposts").innerHTML = userName;
    });
  });
};
