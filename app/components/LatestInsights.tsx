import Image from "next/image";

const posts = [
  {
    category: "GUIDE",
    categoryColor: "text-blue-600",
    title: "Top 10 Tips for Writing a Winning Personal Statement",
    desc: "Crafting a compelling essay is key to standing out. Here's how to tell your story effectively.",
    image: "/images/post1.png",
  },
  {
    category: "FINANCIAL AID",
    categoryColor: "text-green-600",
    title: "Navigating the FAFSA: A Step-by-Step Tutorial",
    desc: "Don't leave money on the table. We break down the financial aid process simply.",
    image: "/images/post2.png",
  },
  {
    category: "CAMPUS LIFE",
    categoryColor: "text-purple-600",
    title: "Choosing the Right Campus Culture for You",
    desc: "Big city or college town? Understand how environment impacts your college success.",
    image: "/images/post3.png",
  },
];

export default function LatestInsights() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Latest Insights</h2>
        <a
          href="#"
          className="text-blue-600 font-medium hover:underline"
        >
          View all posts
        </a>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={500}
              height={300}
              className="w-full h-52 object-cover"
            />

            <div className="p-6">
              <span
                className={`text-xs font-semibold uppercase tracking-wide ${post.categoryColor}`}
              >
                {post.category}
              </span>

              <h3 className="mt-3 text-lg font-semibold text-gray-900">
                {post.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                {post.desc}
              </p>

              <a
                href="#"
                className="inline-block mt-4 text-sm font-semibold text-gray-900 hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
