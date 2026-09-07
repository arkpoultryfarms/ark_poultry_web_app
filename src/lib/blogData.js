import blogPostsData from "@/data/blogPosts.json";

export const blogPosts = blogPostsData;

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs() {
  return blogPosts.map((post) => post.slug);
}

export function getAllCategories() {
  return Array.from(new Set(blogPosts.map((post) => post.category)));
}

export function getAllTags() {
  return Array.from(new Set(blogPosts.flatMap((post) => post.tags)));
}

export function getPostsByCategory(category) {
  return blogPosts.filter((post) => post.category === category);
}

export function getPostsByTag(tag) {
  return blogPosts.filter((post) => post.tags.includes(tag));
}

export function getLatestPosts(count) {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
}

export const authorBios = {
  "Olakunle Olabisi":
    "Olakunle Olabisi is a seasoned agricultural expert with over 15 years of experience in sustainable farming, poultry management, and agribusiness development. His career has been dedicated to transforming agricultural systems through innovation, ethical practices, and farmer empowerment. A passionate advocate for modern, eco-friendly farming, Olakunle has worked with both smallholder farmers and commercial producers to improve productivity while preserving environmental balance. His expertise spans livestock nutrition, biosecurity management, and farm automation, helping farmers achieve consistent growth and profitability. Beyond his technical skill, Olakunle is deeply committed to education and community impact, regularly leading workshops, training programs, and mentorship initiatives aimed at helping the next generation of farmers adopt smarter and more sustainable practices.",
  "Roemary Olabisi":
    "Roemary Olabisi is a poultry welfare and nutrition specialist who focuses on the wellbeing of the flock and the quality of the food that reaches our customers' tables. With years of hands-on experience in farm-fresh food preparation and animal care, Roemary bridges the gap between how poultry is raised and how it's ultimately enjoyed. She is passionate about humane farming practices, community outreach, and helping people connect with where their food comes from through recipes, farm visits, and honest storytelling about daily life on the farm.",
};

export function getAuthorBio(author) {
  return (
    authorBios[author] ||
    `${author} is a member of the Ark Poultry Farm team, contributing hands-on expertise in sustainable poultry farming and agribusiness.`
  );
}
