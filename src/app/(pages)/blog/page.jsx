import Link from "next/link";
import { Calendar, Tag as TagIcon } from "lucide-react";
import { blogPosts, getAllCategories, getAllTags } from "@/lib/blogData";
import BlogHero from "@/components/pages/blog/BlogHero";

export const metadata = {
  title: "Blog",
  description: "Insights and updates from Ark Poultry Farm.",
};

export default async function BlogPage({ searchParams }) {
  const { category, tag } = await searchParams;
  const categories = getAllCategories();
  const tags = getAllTags();

  const filteredPosts = blogPosts.filter((post) => {
    if (category && post.category !== category) return false;
    if (tag && !post.tags.includes(tag)) return false;
    return true;
  });

  return (
    <div className="bg-white">
      <BlogHero />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Posts */}
            <div className="lg:col-span-2">
              {(category || tag) && (
                <div className="mb-8 flex flex-wrap items-center gap-3 pb-6 border-b">
                  <span className="text-gray-600">
                    Showing posts
                    {category && (
                      <>
                        {" "}in category <strong className="text-gray-800">{category}</strong>
                      </>
                    )}
                    {tag && (
                      <>
                        {" "}tagged <strong className="text-gray-800">{tag}</strong>
                      </>
                    )}
                  </span>
                  <Link
                    href="/blog"
                    className="text-[#d57315] font-medium hover:underline text-sm"
                  >
                    Clear filter
                  </Link>
                </div>
              )}

              {filteredPosts.length === 0 ? (
                <p className="text-gray-600">No posts found.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow border-b-5 border-[#d57315]"
                    >
                      <Link href={`/blog/${post.slug}`} className="block">
                        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                      </Link>
                      <div className="p-6">
                        <div className="flex items-center flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {post.date}
                          </span>
                          <Link
                            href={`/blog?category=${encodeURIComponent(post.category)}`}
                            className="flex items-center gap-1 hover:text-[#d57315] transition-colors"
                          >
                            <TagIcon size={14} />
                            {post.category}
                          </Link>
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-3">
                          <Link href={`/blog/${post.slug}`} className="hover:text-[#d57315] transition-colors">
                            {post.title}
                          </Link>
                        </h4>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-[#d57315] font-medium"
                        >
                          Read More
                          <svg
                            className="ml-2 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              <div className="bg-white border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <Link
                        href={`/blog?category=${encodeURIComponent(cat)}`}
                        className={`flex items-center justify-between py-2 transition-colors ${
                          category === cat ? "text-[#d57315] font-semibold" : "text-gray-700 hover:text-[#d57315]"
                        }`}
                      >
                        <span>{cat}</span>
                        <span className="text-sm text-gray-500">
                          ({blogPosts.filter((p) => p.category === cat).length})
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <Link
                      key={t}
                      href={`/blog?tag=${encodeURIComponent(t)}`}
                      className={`px-3 py-1 rounded text-sm transition-colors ${
                        tag === t ? "bg-[#d57315] text-white" : "bg-gray-100 text-gray-700 hover:bg-[#d57315] hover:text-white"
                      }`}
                    >
                      {t}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
