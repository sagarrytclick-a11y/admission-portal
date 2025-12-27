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
        <h2 className="text-3xl font-bold text-gray-900">
          Latest Insights
        </h2>
        <a href="#" className="text-blue-600 font-medium hover:underline">
          View all
        </a>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* LEFT: Blog List */}
        <div className="lg:col-span-2 space-y-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-sm transition"
            >
              <span
                className={`text-xs font-semibold uppercase tracking-wide ${post.categoryColor}`}
              >
                {post.category}
              </span>

              <h3 className="mt-2 text-xl font-semibold text-gray-900">
                {post.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {post.desc}
              </p>

              <a
                href="#"
                className="inline-block mt-3 text-sm font-semibold text-blue-600 hover:underline"
              >
                Read article →
              </a>
            </div>
          ))}

          {/* Load More */}
          <div className="pt-4">
            <button className="px-6 py-3 text-sm font-semibold text-white bg-[#3182ce] hover:bg-blue-700 rounded-lg transition">
              Load More Blogs
            </button>
          </div>
        </div>

        {/* RIGHT: Sidebar */}
        <aside className="space-y-6">
          
          {/* Popular Topics */}
          <div className="bg-white border border-gray-100 rounded-xl p-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Popular Topics
            </h4>

            <div className="flex flex-wrap gap-2">
              {[
                "Admissions",
                "Entrance Exams",
                "Scholarships",
                "Campus Life",
                "Placements",
              ].map((topic) => (
                <span
                  key={topic}
                  className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Helpful Links */}
          <div className="bg-white border border-gray-100 rounded-xl p-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Helpful Resources
            </h4>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600">
                  College Admission Process
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Entrance Exam Calendar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Compare Colleges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Scholarship Guide
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

