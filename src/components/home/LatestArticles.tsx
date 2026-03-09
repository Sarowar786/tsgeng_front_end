"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Article = {
  title: string;
  category: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
};

const articles: Article[] = [
  {
    title: "How AI is Revolutionizing Fleet Quote Generation in 2025",
    category: "Fleet Technology",
    description:
      "Discover how artificial intelligence is cutting quote generation time by 90% and improving accuracy for commercial fleet dealerships across the country.",
    image: "/images/articalsImage1.jpg",
    date: "Feb 18, 2025",
    readTime: "5 min read",
  },
  {
    title:
      "The Complete Guide to Transitioning Your Fleet to Electric Vehicles",
    category: "EV Fleets",
    description:
      "From upfront costs to charging infrastructure, this comprehensive guide covers everything fleet managers need to know about going electric.",
    image: "/images/articalsImage2.jpg",
    date: "Feb 10, 2025",
    readTime: "8 min read",
  },
  {
    title: "5 Fleet Maintenance Strategies That Save Thousands Per Year",
    category: "Maintenance",
    description:
      "Proactive maintenance planning is the single biggest factor in long-term fleet cost reduction. Here are the top strategies used by top fleets.",
    image: "/images/articalsImage3.jpg",
    date: "Jan 28, 2025",
    readTime: "6 min read",
  },
];

export default function LatestArticles() {
  return (
    <section className="py-24 bg-[#F4F6FB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-14">
          <div>
            <span className="inline-block text-sm bg-pink-100 text-primary px-4 py-1 rounded-full mb-3">
              Latest Articles
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Fleet Industry Insights
            </h2>
          </div>

          <Link
            href="/blog"
            className="hidden md:flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View All Posts
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <span className="text-xs bg-pink-100 text-primary px-3 py-1 rounded-full">
                  {article.category}
                </span>

                {/* Title */}
                <h3 className="mt-3 font-semibold text-[16px] text-slate-800 leading-snug">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  {article.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-6 text-xs text-gray-500">
                  <span>
                    {article.date} • {article.readTime}
                  </span>

                  <Link
                    href="#"
                    className="text-primary flex items-center gap-1 hover:underline"
                  >
                    Read more
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
