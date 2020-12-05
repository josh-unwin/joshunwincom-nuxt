import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: 'http://localhost:3001',
  key: 'ac78650f347849bd00371445e1',
  version: "v3"
});


export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
      include: 'tags'
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch(err => {
      console.error(err);
    });
}