import axios from "axios";

// define the structure of object this is in TS
interface Post {
  userId: number;
  title: string;
  body: string;
}

// api to fetch the data
const url = "https://jsonplaceholder.typicode.com/posts/1";

// the get return the promise while axios is writtens.
axios.get(url).then((res) => {
  const post = res.data as Post;

  const userId = post.userId;
  const title = post.title;
  const body = post.body;

  printPost(userId, title, body);
});

// first remember ths we cant compilte the ts code directlty thats why we convert that that code in into the plane js then execute it

const printPost = (userId: number, title: string, body: string) => {
  console.log(`
        User ID is ${userId}
        Title of post: ${title}
        Post Content: ${body}
    `);
};
