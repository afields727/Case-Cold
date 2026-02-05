"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

// Sample donor data (in a real app, this would come from a database)
const donors = [
  {
    id: 1,
    name: "Sarah Johnson",
    amount: 5000,
    date: "2024-01-15",
    message: "Proud to support Launchpad Philadelphia's mission to empower our community.",
    category: "Individual",
    avatar: "SJ",
    email: "sarah.johnson@email.com",
    location: "Philadelphia, PA",
    donations: [
      { date: "2024-01-15", amount: 5000, program: "Youth Education" },
      { date: "2023-06-20", amount: 2500, program: "Job Training" },
      { date: "2022-12-10", amount: 1000, program: "Community Support" }
    ],
    totalDonated: 8500,
    joinedDate: "2022-01-01"
  },
  {
    id: 2,
    name: "TechCorp Solutions",
    amount: 25000,
    date: "2024-01-10",
    message: "Investing in the future of Philadelphia's tech ecosystem.",
    category: "Corporate",
    avatar: "TC",
    email: "partnerships@techcorp.com",
    location: "Philadelphia, PA",
    donations: [
      { date: "2024-01-10", amount: 25000, program: "Tech Education" },
      { date: "2023-08-15", amount: 15000, program: "Innovation Lab" }
    ],
    totalDonated: 40000,
    joinedDate: "2021-05-15"
  },
  {
    id: 3,
    name: "Michael Chen",
    amount: 1500,
    date: "2024-01-08",
    message: "Every contribution counts towards building a better community.",
    category: "Individual",
    avatar: "MC",
    email: "michael.chen@email.com",
    location: "Philadelphia, PA",
    donations: [
      { date: "2024-01-08", amount: 1500, program: "General Support" }
    ],
    totalDonated: 1500,
    joinedDate: "2024-01-01"
  },
  {
    id: 4,
    name: "Philadelphia Foundation",
    amount: 50000,
    date: "2024-01-05",
    message: "Committed to strengthening local organizations that make a difference.",
    category: "Foundation",
    avatar: "PF",
    email: "grants@phillyfoundation.org",
    location: "Philadelphia, PA",
    donations: [
      { date: "2024-01-05", amount: 50000, program: "Community Development" },
      { date: "2023-03-20", amount: 75000, program: "Infrastructure" }
    ],
    totalDonated: 125000,
    joinedDate: "2020-01-01"
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    amount: 3000,
    date: "2024-01-03",
    message: "Launchpad Philadelphia is creating real opportunities for our youth.",
    category: "Individual",
    avatar: "ER",
    email: "emily.rodriguez@email.com",
    location: "Philadelphia, PA",
    donations: [
      { date: "2024-01-03", amount: 3000, program: "Youth Programs" },
      { date: "2023-09-12", amount: 2000, program: "Education" }
    ],
    totalDonated: 5000,
    joinedDate: "2023-01-15"
  },
  {
    id: 6,
    name: "GreenLeaf Industries",
    amount: 10000,
    date: "2023-12-28",
    message: "Supporting sustainable community development initiatives.",
    category: "Corporate",
    avatar: "GL",
    email: "csr@greenleaf.com",
    location: "Philadelphia, PA",
    donations: [
      { date: "2023-12-28", amount: 10000, program: "Sustainability" }
    ],
    totalDonated: 10000,
    joinedDate: "2023-06-01"
  },
  {
    id: 7,
    name: "David Thompson",
    amount: 750,
    date: "2023-12-20",
    message: "Happy to give back to the organization that helped me grow.",
    category: "Individual",
    avatar: "DT",
    email: "david.thompson@email.com",
    location: "Philadelphia, PA",
    donations: [
      { date: "2023-12-20", amount: 750, program: "General Support" }
    ],
    totalDonated: 750,
    joinedDate: "2023-12-01"
  },
  {
    id: 8,
    name: "Community First Bank",
    amount: 35000,
    date: "2023-12-15",
    message: "Building stronger communities through partnership and support.",
    category: "Corporate",
    avatar: "CF",
    email: "community@cfbank.com",
    location: "Philadelphia, PA",
    donations: [
      { date: "2023-12-15", amount: 35000, program: "Financial Literacy" },
      { date: "2023-07-01", amount: 25000, program: "Small Business Support" }
    ],
    totalDonated: 60000,
    joinedDate: "2022-03-01"
  }
];

export default function DonorProfile() {
  const params = useParams();
  const donorId = parseInt(params.id as string);
  const donor = donors.find(d => d.id === donorId);

  if (!donor) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Donor Not Found</h1>
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">LP</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Launchpad Philadelphia</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Donor Connection Platform</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
              <Link href="/admin" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Admin</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Profile Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
            {/* Cover Image */}
            <div className="h-48 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
            
            {/* Profile Info */}
            <div className="px-8 pb-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 -mt-16 mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-4xl border-4 border-white dark:border-gray-800 shadow-lg">
                  {donor.avatar}
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{donor.name}</h1>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                    <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                      {donor.category}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      📍 {donor.location}
                    </span>
                  </div>
                </div>
                <div className="text-center sm:text-right">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">${donor.totalDonated.toLocaleString()}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Total Donated</div>
                </div>
              </div>

              {/* Message */}
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6 mb-8">
                <p className="text-gray-700 dark:text-gray-300 text-lg italic">
                  &ldquo;{donor.message}&rdquo;
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{donor.donations.length}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Donations</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {new Date(donor.joinedDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Member Since</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {donor.donations.length > 0 ? donor.donations[0].program : "N/A"}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Latest Program</div>
                </div>
              </div>

              {/* Donation History */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Donation History</h2>
                <div className="space-y-3">
                  {donor.donations.map((donation, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white">
                          💰
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">{donation.program}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {new Date(donation.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                          </div>
                        </div>
                      </div>
                      <div className="text-xl font-bold text-green-600 dark:text-green-400">
                        ${donation.amount.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <span>←</span>
                <span>Back to Donors</span>
              </Link>
              <Link
                href="/donate"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all"
              >
                Make a Donation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
