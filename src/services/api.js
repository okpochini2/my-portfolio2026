export async function fetchDashboardData() {
  try {
  const usersRes = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await usersRes.json();

  const postsRes = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await postsRes.json();

  const commentsRes = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await commentsRes.json();

  return {
    users: users.length,
    posts: posts.length,
    comments: comments.length
  };
 } catch (error) {
  console.log("Live API failed, using fallback JSON:", error);

  try {
    const fallbackRes = await fetch(`${ProcessingInstruction.env.PUBLIC_URL}/data.json`);
    const fallbackData = await fallbackRes.json();
    return fallbackData;
  } catch (fallbackError) {
    console.error("Fallback JSON failed too:", fallbackError);
    return {users: 0, posts: 0, comments: 0};
  }
 }
}