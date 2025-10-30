import React from 'react';
import Link from 'next/link';
import { Calendar, MessageCircleMore, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { getBlogPostBySlug, blogPosts } from '@/lib/blogData';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }) {
  const blogPost = getBlogPostBySlug(params.slug);

  if (!blogPost) {
    notFound();
  }

  // Get related posts (exclude current post)
  const relatedPosts = blogPosts
    .filter(post => post.id !== blogPost.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-[300px] md:h-[400px] bg-cover bg-center" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.733), rgba(0, 0, 0, 0.733)), url(/images/img4.jpg)'
        }}
      >
        <div className="absolute p-4 md:p-12 inset-0 flex items-center">
          <div className="container mx-auto">
            <div className="text-left text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Blog Post</h1>
              <span className="flex items-center gap-2 font-semibold text-xl md:text-2xl">
                <Link href="/" className="text-[#d57315] hover:underline">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <Link href="/#blog" className="text-[#d57315] hover:underline">
                  Blog
                </Link>
                <span className="mx-2">/</span>
                <p className="text-white">
                  Post
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Article */}
          <article className="lg:col-span-2">
            {/* Featured Image */}
            <img 
              src={blogPost.image} 
              alt={blogPost.title} 
              className="w-full h-[400px] object-cover mb-8"
            />

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-[#d57315]" />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} className="text-[#d57315]" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag size={16} className="text-[#d57315]" />
                <span>{blogPost.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircleMore size={16} className="text-[#d57315]" />
                <span>0 Comments</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {blogPost.title}
            </h1>

            {/* Content */}
            <>
              <style dangerouslySetInnerHTML={{__html: `
                .blog-content-area h2 {
                  font-size: 1.875rem !important;
                  font-weight: 700 !important;
                  margin-top: 2rem !important;
                  margin-bottom: 1rem !important;
                  color: #1f2937 !important;
                  line-height: 1.3 !important;
                }
                .blog-content-area p {
                  margin-bottom: 1.25rem !important;
                  font-size: 1.125rem !important;
                  line-height: 1.8 !important;
                  color: #4b5563 !important;
                }
                .blog-content-area ul {
                  list-style-type: disc !important;
                  margin-left: 2rem !important;
                  margin-bottom: 1.5rem !important;
                }
                .blog-content-area li {
                  margin-bottom: 0.5rem !important;
                  font-size: 1.125rem !important;
                  line-height: 1.8 !important;
                  color: #4b5563 !important;
                }
              `}} />
              <div 
                className="blog-content-area mb-8"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
            </>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-8 pb-8 border-b">
              <span className="font-semibold text-gray-800">Tags:</span>
              {blogPost.tags.map((tag, index) => (
                <span
                  key={index}
                  // href={`/blog?tag=${tag.toLowerCase()}`}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-[#d57315] hover:text-white transition-colors text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Share Section */}
            <div className="flex items-center gap-4 mb-12">
              <span className="font-semibold text-gray-800 flex items-center gap-2">
                <Share2 size={20} className="text-[#d57315]" />
                Share:
              </span>
              <div className="flex gap-3">
                <button className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  <Facebook size={20} />
                </button>
                <button className="p-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition-colors">
                  <Twitter size={20} />
                </button>
                <button className="p-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors">
                  <Linkedin size={20} />
                </button>
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-gray-50 p-6">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                  <User size={40} className="text-gray-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    About {blogPost.author}
                  </h3>
                  <p className="text-gray-600">
                    Olakunle Olabisi is a seasoned agricultural expert with over 15 years of experience in sustainable farming, poultry management, and agribusiness development. His career has been dedicated to transforming agricultural systems through innovation, ethical practices, and farmer empowerment.
                    A passionate advocate for modern, eco-friendly farming, Olakunle has worked with both smallholder farmers and commercial producers to improve productivity while preserving environmental balance. His expertise spans livestock nutrition, biosecurity management, and farm automation, helping farmers achieve consistent growth and profitability.
                    Beyond his technical skill, Olakunle is deeply committed to education and community impact. He regularly leads workshops, training programs, and mentorship initiatives aimed at helping the next generation of farmers adopt smarter and more sustainable practices.
                    Driven by a vision to make agriculture more profitable, humane, and future-ready, Olakunle continues to champion advancements that bridge the gap between traditional farming and modern agricultural innovation.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Search */}
            <div className="bg-white border border-gray-200 p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search posts..."
                  className="w-full px-4 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d57315]"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#d57315]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white border border-gray-200 p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-2">
                {['Farming Practices', 'Recipes', 'Sustainability', 'News & Updates', 'Animal Welfare'].map((category, index) => (
                  <li key={index}>
                    <Link
                      href={`/blog?category=${category.toLowerCase()}`}
                      className="flex items-center justify-between text-gray-700 hover:text-[#d57315] transition-colors py-2"
                    >
                      <span>{category}</span>
                      <span className="text-sm text-gray-500">(5)</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Posts */}
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Posts</h3>
              <div className="space-y-4">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="flex gap-3 group"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 group-hover:text-[#d57315] transition-colors mb-1 line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
