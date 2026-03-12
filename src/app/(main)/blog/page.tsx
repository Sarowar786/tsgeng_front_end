"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Clock, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
const bannerImage = "/images/bannerImage.jpg";
const article1 = "/images/articalsImage1.jpg";
const article2 = "/images/articalsImage2.jpg";
const article3 = "/images/articalsImage3.jpg";

const categories = [
  "All",
  "Fleet Technology",
  "EV Fleets",
  "Maintenance",
  "Purchasing",
  "Finance",
];

const latestArticles = [
  {
    id: 1,
    category: "Fleet Technology",
    title: "How AI is Revolutionizing Fleet Quote Generation in 2025",
    excerpt:
      "Discover how artificial intelligence is cutting quote generation time by 90% and improving accuracy for commercial fleet dealerships across the country.",
    date: "Feb 15, 2025",
    readTime: "5 min read",
    image: article1,
  },
  {
    id: 2,
    category: "EV Fleets",
    title:
      "The Complete Guide to Transitioning Your Fleet to Electric Vehicles",
    excerpt:
      "From upfront costs to charging infrastructure, this comprehensive guide covers everything fleet managers need to know about going electric.",
    date: "Feb 10, 2025",
    readTime: "8 min read",
    image: article2,
  },
  {
    id: 3,
    category: "Maintenance",
    title: "5 Fleet Maintenance Strategies That Save Thousands Per Year",
    excerpt:
      "Proactive maintenance planning is the single biggest factor in long-term fleet cost reduction. Here are the top strategies used by top fleets.",
    date: "Jan 28, 2025",
    readTime: "6 min read",
    image: article3,
  },
  {
    id: 4,
    category: "Fleet Technology",
    title: "Fleet Vehicle Upfitting: What You Need to Know Before You Buy",
    excerpt:
      "Discover how artificial intelligence is cutting quote generation time by 90% and improving accuracy for commercial fleet dealerships across the country.",
    date: "Feb 15, 2025",
    readTime: "5 min read",
    image: article1,
  },
  {
    id: 5,
    category: "EV Fleets",
    title: "The ROI of Telematics: Data-Driven Fleet Management in 2025",
    excerpt:
      "From upfront costs to charging infrastructure, this comprehensive guide covers everything fleet managers need to know about going electric.",
    date: "Feb 10, 2025",
    readTime: "8 min read",
    image: article2,
  },
  {
    id: 6,
    category: "Maintenance",
    title: "Fleet Financing vs. Leasing: Which is Right for Your Business?",
    excerpt:
      "Proactive maintenance planning is the single biggest factor in long-term fleet cost reduction. Here are the top strategies used by top fleets.",
    date: "Jan 28, 2025",
    readTime: "6 min read",
    image: article3,
  },
];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Hero Section */}
      <section className="bg-herobg py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              FleetQuoteAI Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4">
              Fleet Industry Insights
            </h1>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Expert articles on fleet management, vehicle upfitting, EV
              transitions, and modern quoting strategies.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <span className="absolute inset-y-0 left-4 flex items-center text-slate-400">
                <Search size={20} />
              </span>
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full bg-slate-800/50 border border-slate-700 text-white pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all backdrop-blur-sm"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex space-x-2 md:justify-center whitespace-nowrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Featured Article */}
        <div className="mb-20">
          <h2 className="text-primary font-semibold text-sm uppercase tracking-wider mb-6">
            Featured Article
          </h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-shadow duration-500"
          >
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <Image
                src={bannerImage}
                alt="Featured Article"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center space-x-4 text-sm mb-4">
                <span className="text-primary font-bold flex items-center gap-1 uppercase tracking-tighter italic">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                  Fleet Technology
                </span>
                <span className="text-slate-400 flex items-center gap-1 font-medium">
                  <Clock size={14} className="opacity-70" /> 5 min read
                </span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-extrabold text-[#111827] mb-6 group-hover:text-primary transition-colors leading-[1.1]">
                How AI is Revolutionizing Fleet Quote Generation in 2025
              </h3>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed font-medium">
                Discover how artificial intelligence is cutting quote generation
                time by 90% and improving accuracy for commercial fleet
                dealerships across the country.
              </p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                <span className="text-slate-400 text-sm font-medium">
                  Feb 16, 2025 · By Jason M.
                </span>
                <Link
                  href="#"
                  className="flex items-center text-primary font-extrabold group/link hover:gap-2 transition-all text-base"
                >
                  Read Article{" "}
                  <ChevronRight
                    size={20}
                    className="ml-1 transition-transform group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Latest Articles Section */}
        <div className="mb-12">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase mb-2 inline-block transition-all hover:bg-primary/20">
                Latest Articles
              </span>
              <h2 className="text-3xl font-bold text-slate-900">
                Fleet Industry Insights
              </h2>
            </div>
            <Link
              href="#"
              className="text-primary font-semibold flex items-center hover:translate-x-1 transition-transform"
            >
              View All Posts <ChevronRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 flex flex-col grow">
                  <div className="mb-2">
                    <span className="bg-primary/15 backdrop-blur-md text-primary text-[11px] font-extrabold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t pt-4">
                    <span className="text-slate-400 text-xs">
                      {article.date} · {article.readTime}
                    </span>
                    <Link
                      href="#"
                      className="flex items-center text-primary text-sm font-bold hover:gap-1 transition-all"
                    >
                      Read more <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
