import React from 'react';
import Link from 'next/link';
import HomeSectionTitle from "@/components/ui/HomeSectionTitle";
import { Calendar } from 'lucide-react';
import { getLatestPosts } from '@/lib/blogData';

const BlogSection = () => {
  const latestPosts = getLatestPosts(3);

  return (
    <section className="py-20 bg-gray-50" id="blog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-lg font-bold text-[#d57315] mb-2">LATEST NEWS</h2>
          <HomeSectionTitle
            title="Insights and Updates from Our Poultry Farm"
            titleColor="gray-800"
            bgColor="[#d57315]"
            center={true}
          />
          <p className="max-w-2xl mx-auto text-gray-600">
            Stay updated with the latest trends, insights, and updates from the farm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow border-b-5 border-[#d57315]"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              </Link>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
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

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block px-8 py-3 bg-[#d57315] text-white font-medium hover:bg-[#b35d12] transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;