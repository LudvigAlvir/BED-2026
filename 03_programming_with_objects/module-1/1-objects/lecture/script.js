/* const title = "My first post";
const content = `
    <p>Example content for a post<p>
    <img src="https://img.magnific.com/free-vector/book-floating-cartoon-vector-icon-illustration-education-object-icon-isolated-flat-vector_138676-13661.jpg?semt=ais_hybrid&w=740&q=80"/>
`;
const author = "Ludvig";
const createdAt = "2026-10-14";
 */

/*
likes
comments
const updatedAt = "2026-10-14";
*/

const firstPost = {
  title: "My first post",
  content: `
    <p>Example content for a post<p>
    <img src="https://img.magnific.com/free-vector/book-floating-cartoon-vector-icon-illustration-education-object-icon-isolated-flat-vector_138676-13661.jpg?semt=ais_hybrid&w=740&q=80"/>
`,
  author: "Ludvig",
  createdAt: "2026-10-14",
};
const secondPost = {
  title: "My second post",
  content: `
    <p>Example content for a post<p>
    <img src="https://img.magnific.com/free-vector/book-floating-cartoon-vector-icon-illustration-education-object-icon-isolated-flat-vector_138676-13661.jpg?semt=ais_hybrid&w=740&q=80"/>
`,
  author: "Ludvig",
  createdAt: "2026-10-15",
};
const thirdPost = {
  title: "Capybara",
  content: `
  <p>Capybara is a cool animal</p>
  <img src="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg"/>
  `,
  author: "Ludvig",
  createdAt: "2026-10-15",
};

function createPost(post) {
  const container = document.querySelector(".posts");
  container.innerHTML += `
<div class="post">
    <h2>${post.title}</h2>
    <div>${post.content}</div>
    <p>Written by: ${post.author}</p>
    <p>${post.createdAt}</p>
</div>
`;
}
const posts = [
  {
    title: "Starter post",
    content: "Starter content",
    author: "Ludvig",
    createdAt: "2025-10-10",
  },
];
posts.push(firstPost);
posts.push(secondPost);
posts.push(thirdPost);
console.log(posts); // normal log, that works on "everything"
console.table(posts); // when we have objects in arrays we can log them out as tables
console.error("Something went wrong"); // to display errors
console.warn("Something seems off"); // to warn about potential errors

posts.forEach((post) => {
  createPost(post);
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#input-title").value;
  const content = document.querySelector("#input-content").value;
  const post = {
    title: title,
    content: content,
    author: "",
    createdAt: "",
  };
  
  posts.unshift(post);

  const container = document.querySelector(".posts");
  container.innerHTML = ""; // empties the container so we only create each post in our array once

  posts.forEach((post) => {
    createPost(post);
  });
});
