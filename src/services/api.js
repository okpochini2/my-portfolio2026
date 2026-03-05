export async function fetchDashboardData() {
  const usersRes = await fetch("http://jsonplaceholder.typicode.com/users");
  const users = await usersRes.json();

  const postsRes = await fetch("http://jsonplaceholder.typicode.com/posts");
  const posts = await postsRes.json();

  const commentsRes = await fetch("http://jsonplaceholder.typicode.com/comments");
  const comments = await commentsRes.json();

  return {
    users: users.length,
    posts: posts.length,
    comments: comments.length
  };
}