// // fetch .then() method
// function fetchTodos2(id){
//       // update code inside
//       fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//             .then(response => response.json())
//             .then(json => console.log(json))
// }

// // fetch async await method
// // "Recipe"/function created
// async function fetchTodos(id){
//       const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//       const json = await response.json()
//       console.log(json)
// }

// // Call/run the "recipe"/function
// fetchTodos(2)
// fetchTodos(5)
// fetchTodos(7)

// fetchTodos2(1)
// fetchTodos2(3)
// fetchTodos2(8)


async function fetchComments(postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    const comments = await response.json();
  
    const commentIndex = parseInt(prompt("Enter the comment index (0-4):"));
    const comment = comments[commentIndex];
  
    console.log(`Name: ${comment.name}\nEmail: ${comment.email}\nBody: ${comment.body}`);
  }
  
  fetchComments(1);