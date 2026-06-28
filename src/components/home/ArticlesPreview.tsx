"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { articles } from "@/lib/data";
import { Badge } from "@/components/shared/Badge";

export function ArticlesPreview() {
  return (
    <section className="section-py bg-[#f4f4f5] dark:bg-[#111111]">
      <div className="section-container">
        <SectionHeading
          badge="Insights"
          title="Thinking About Business Automation"
          subtitle="Practical perspectives on AI, automation, and building smarter business systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {articles.slice(0, 3).map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="premium-card p-6 flex flex-col gap-4 relative hover:border-primary-border dark:hover:border-primary-border transition-colors"
            >
              <Badge variant="gray" className="w-fit">
                {article.topic}
              </Badge>
              <h3 className="font-semibold text-lg text-[#09090b] dark:text-white leading-tight">
                {article.title}
              </h3>
              <p className="text-sm text-[#71717a] line-clamp-3">
                {article.excerpt}
              </p>
              <div className="mt-auto pt-4 flex items-center justify-between border-t border-black/5 dark:border-white/5">
                <div className="flex items-center gap-2 text-xs text-[#a1a1aa] font-medium uppercase tracking-wider">
                  <span>{article.readTime} read</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
                <Link
                  href="/articles"
                  className="text-sm font-semibold emerald-text hover:text-primary dark:hover:text-primary-light transition-colors"
                >
                  Read Article →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-[#71717a]">
          Articles coming soon — follow me on LinkedIn for the latest insights.
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-[#09090b] dark:text-white font-semibold hover:text-[#059669] dark:hover:text-[#10b981] transition-colors"
          >
            View All Articles <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
