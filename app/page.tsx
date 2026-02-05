"use client";

import { useState } from "react";
import Link from "next/link";

// Sample donor data
const sampleDonors = [
  {
    id: 1,
    name: "Sarah Johnson",
    amount: 5000,
    date: "2024-01-15",
    message: "Proud to support Launchpad Philadelphia's mission to empower our community.",
    category: "Individual",
    avatar: "SJ"
  },
  {
    id: 2,
    name: "TechCorp Solutions",
    amount: 25000,
    date: "2024-01-10",
    message: "Investing in the future of Philadelphia's tech ecosystem.",
    category: "Corporate",
    avatar: "TC"
  },
  {
    id: 3,
    name: "Michael Chen",
    amount: 1500,
    date: "2024-01-08",
    message: "Every contribution counts towards building a better community.",
    category: "Individual",
    avatar: "MC"
  },
  {
    id: 4,
    name: "Philadelphia Foundation",
    amount: 50000,
    date: "2024-01-05",
    message: "Committed to strengthening local organizations that make a difference.",
    category: "Foundation",
    avatar: "PF"
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    amount: 3000,
    date: "2024-01-03",
    message: "Launchpad Philadelphia is creating real opportunities for our youth.",
    category: "Individual",
    avatar: "ER"
  },
  {
    id: 6,
    name: "GreenLeaf Industries",
    amount: 10000,
    date: "2023-12-28",
    message: "Supporting sustainable community development initiatives.",
    category: "Corporate",
    avatar: "GL"
  },
  {
    id: 7,
    name: "David Thompson",
    amount: 750,
    date: "2023-12-20",
    message: "Happy to give back to the organization that helped me grow.",
    category: "Individual",
    avatar: "DT"
  },
  {
    id: 8,
    name: "Community First Bank",
    amount: 35000,
    date: "2023-12-15",
    message: "Building stronger communities through partnership and support.",
    category: "Corporate",
    avatar: "CF"
  }
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("recent");

  const categories = ["All", "Individual", "Corporate", "Foundation"];

  const filteredDonors = sampleDonors
    .filter((donor) => {
      const matchesSearch = donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           donor.message.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || donor.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "recent") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortBy === "amount-high") {
        return b.amount - a.amount;
      } else if (sortBy === "amount-low") {
        return a.amount - b.amount;
      }
      return 0;
    });

  const totalDonations = sampleDonors.reduce((sum, donor) => sum + donor.amount, 0);
  const totalDonors = sampleDonors.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">LP</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Launchpad Philadelphia</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Donor Connection Platform</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#donors" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Donors</a>
              <a href="#impact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Impact</a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              <a
                href="https://launchpadphilly.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Launchpad.org
              </a>
              <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Contact
              </Link>
              <Link href="/login" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Login
              </Link>
              <Link href="/signup" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Sign Up
              </Link>
              <Link
                href="/donate"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all"
              >
                Donate Now
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">Where Your Future Takes Off</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Connecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Donors</span> with Impact
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Celebrate the generosity of our community and see how every contribution makes a difference at Launchpad. We encourage you to relentlessly pursue your passion by exploring career possibilities within the tech industry.
          </p>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="text-4xl font-bold text-blue-600 mb-2">${totalDonations.toLocaleString()}</div>
              <div className="text-gray-600 dark:text-gray-400">Total Donations</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="text-4xl font-bold text-purple-600 mb-2">{totalDonors}</div>
              <div className="text-gray-600 dark:text-gray-400">Active Donors</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-400">Impact Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Donors Section */}
      <section id="donors" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Generous Donors</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Meet the individuals and organizations who make our mission possible
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-8 border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search donors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              >
                <option value="recent">Most Recent</option>
                <option value="amount-high">Highest Amount</option>
                <option value="amount-low">Lowest Amount</option>
              </select>
            </div>
          </div>

          {/* Donors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDonors.map((donor) => (
              <div
                key={donor.id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {donor.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 dark:text-white truncate">{donor.name}</h4>
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 mt-1">
                      {donor.category}
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    ${donor.amount.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(donor.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  &ldquo;{donor.message}&rdquo;
                </p>

                <Link href={`/donors/${donor.id}`} className="w-full mt-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors block text-center">
                  View Profile →
                </Link>
              </div>
            ))}
          </div>

          {filteredDonors.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-gray-600 dark:text-gray-400 text-lg">No donors found matching your criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Your Impact</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              See how donations are transforming lives in Philadelphia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
              <div className="text-4xl mb-3">🎓</div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Students Supported</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
              <div className="text-4xl mb-3">💼</div>
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-purple-100">Jobs Created</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
              <div className="text-4xl mb-3">🏠</div>
              <div className="text-3xl font-bold mb-2">75+</div>
              <div className="text-green-100">Families Helped</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
              <div className="text-4xl mb-3">🌟</div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-orange-100">Programs Launched</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Launchpad</h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">Where Your Future Takes Off</p>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 mb-8 text-white">
            <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
            <p className="text-lg leading-relaxed">
              Launchpad&apos;s <em>mission</em> is to build accelerated pathways, connecting high school students to high-paying, future-ready careers.
            </p>
          </div>

          {/* What We Do */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What We Do</h4>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              At Launchpad, we encourage you to relentlessly pursue your passion by exploring career possibilities within the tech industry. From video games and computer technology—to the arts, entertainment, and sports—tech can be the fuel your passion needs to take off and launch your career.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              We guide students through career exploration, resume development, mock interviews, and real-world problem-solving. We approach this work with a strengths-based, culturally responsive lens; helping students not just get their first job, but cultivate confidence, agency, and long-term resilience.
            </p>

            {/* Key Programs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎓</span>
                </div>
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Career Exploration</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">Discover tech career paths that match your passions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💼</span>
                </div>
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Job Readiness</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">Resume building, mock interviews, and skill development</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Real-World Experience</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">Hands-on projects and industry connections</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://launchpadphilly.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all"
              >
                Visit Launchpad Philly
              </a>
              <Link
                href="/donate"
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              >
                Become a Donor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">LP</span>
                </div>
                <span className="font-bold text-lg">Launchpad Philadelphia</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering communities through connection and support.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#donors" className="hover:text-white transition-colors">Donors</a></li>
                <li><a href="#impact" className="hover:text-white transition-colors">Impact</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Get Involved</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/donate" className="hover:text-white transition-colors">Donate</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Volunteer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partner</a></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/launchpadphilly/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  title="Facebook"
                >
                  <span>f</span>
                </a>
                <a
                  href="https://x.com/LaunchpadPhilly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  title="X (Twitter)"
                >
                  <span>𝕏</span>
                </a>
                <a
                  href="https://www.instagram.com/launchpadphilly/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                  title="Instagram"
                >
                  <span>📷</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/launchpadphilly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  title="LinkedIn"
                >
                  <span>in</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Launchpad Philadelphia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
