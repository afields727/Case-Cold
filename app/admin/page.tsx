"use client";

import { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

// Sample donor data
const initialDonors = [
  {
    id: 1,
    name: "Sarah Johnson",
    amount: 5000,
    date: "2024-01-15",
    message: "Proud to support Launchpad Philadelphia's mission to empower our community.",
    category: "Individual",
    avatar: "SJ",
    email: "sarah.johnson@email.com",
    status: "active"
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
    status: "active"
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
    status: "active"
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
    status: "active"
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
    status: "active"
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
    status: "active"
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
    status: "active"
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
    status: "active"
  }
];

export default function AdminDashboard() {
  const [donors, setDonors] = useState(initialDonors);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingDonor, setEditingDonor] = useState<typeof initialDonors[0] | null>(null);

  const categories = ["All", "Individual", "Corporate", "Foundation"];

  const filteredDonors = donors.filter((donor) => {
    const matchesSearch = donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         donor.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || donor.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalDonations = donors.reduce((sum, donor) => sum + donor.amount, 0);
  const totalDonors = donors.length;
  const activeDonors = donors.filter(d => d.status === "active").length;

  const handleDeleteDonor = (id: number) => {
    if (confirm("Are you sure you want to delete this donor?")) {
      setDonors(donors.filter(d => d.id !== id));
    }
  };

  const handleEditDonor = (donor: typeof initialDonors[0]) => {
    setEditingDonor(donor);
    setShowAddModal(true);
  };

  const handleSaveDonor = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to a database
    setShowAddModal(false);
    setEditingDonor(null);
  };

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">LP</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Launchpad Philadelphia</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Admin Dashboard</p>
              </div>
            </Link>
            <nav className="flex items-center gap-4">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                View Site
              </Link>
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Logout
              </button>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Donations</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">${totalDonations.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Donors</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{totalDonors}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Active Donors</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{activeDonors}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Avg. Donation</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${Math.round(totalDonations / totalDonors).toLocaleString()}
                </p>
              </div>
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <input
                type="text"
                placeholder="Search donors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <button
              onClick={() => {
                setEditingDonor(null);
                setShowAddModal(true);
              }}
              className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>+</span>
              <span>Add Donor</span>
            </button>
          </div>
        </div>

        {/* Donors Table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Donor</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredDonors.map((donor) => (
                  <tr key={donor.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {donor.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">{donor.name}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{donor.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                        {donor.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-green-600 dark:text-green-400">${donor.amount.toLocaleString()}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                      {new Date(donor.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                        donor.status === "active"
                          ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      }`}>
                        {donor.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/donors/${donor.id}`}
                          className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                          title="View Profile"
                        >
                          👁️
                        </Link>
                        <button
                          onClick={() => handleEditDonor(donor)}
                          className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                          title="Edit"
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => handleDeleteDonor(donor.id)}
                          className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                          title="Delete"
                        >
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredDonors.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-gray-600 dark:text-gray-400 text-lg">No donors found matching your criteria</p>
            </div>
          )}
        </div>
      </div>

      {/* Add/Edit Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {editingDonor ? "Edit Donor" : "Add New Donor"}
                </h2>
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setEditingDonor(null);
                  }}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSaveDonor} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    defaultValue={editingDonor?.name}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Enter donor name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue={editingDonor?.email}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Enter email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
                    <option value="Individual">Individual</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Foundation">Foundation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Amount</label>
                  <input
                    type="number"
                    defaultValue={editingDonor?.amount}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Enter donation amount"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea
                    defaultValue={editingDonor?.message}
                    rows={3}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                    placeholder="Enter donor message"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowAddModal(false);
                      setEditingDonor(null);
                    }}
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                  >
                    {editingDonor ? "Update" : "Add"} Donor
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
