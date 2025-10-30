import React from 'react';
import Link from 'next/link';
import HomeSectionTitle from "@/components/ui/HomeSectionTitle";
import { Calendar, MessageCircleMore } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    slug: 'future-sustainable-farming',
    title: 'The Benefits of Modern Poultry Farming',
    excerpt: 'Discover how free-range farming practices improve chicken health, egg quality, and environmental sustainability.',
    image: '/images/img2.jpg',
    date: 'May 15, 2023',
    author: '0 comments',
  },
  {
    id: 2,
    slug: 'smart-farming-technology',
    title: 'Seasonal Recipe: Farm Fresh Egg Frittata',
    excerpt: 'Try this delicious recipe using our farm-fresh eggs and seasonal vegetables for a nutritious breakfast option.',
    image: '/images/img6.jpg',
    date: 'June 2, 2023',
    author: '0 comments',
  },
  {
    id: 3,
    slug: 'organic-farming-benefits-challenges',
    title: 'Our New Organic Feed Production Facility',
    excerpt: 'We\'re excited to announce the opening of our new organic feed production facility to support our sustainable farming practices.',
    image: '/images/img7.jpg',
    date: 'July 10, 2023',
    author: '0 comments',
  },
];

const BlogSection = () => {
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
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow border-b-5 border-[#d57315]"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              </Link>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircleMore size={14} className="mr-1" />
                    <span>{post.author}</span>
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
      </div>
    </section>
  );
};

export default BlogSection;