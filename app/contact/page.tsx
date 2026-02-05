"use client";

import { useState } from "react";
import Link from "next/link";

const donationAmounts = [
  { amount: 25, label: "$25" },
  { amount: 50, label: "$50" },
  { amount: 100, label: "$100" },
  { amount: 250, label: "$250" },
  { amount: 500, label: "$500" },
  { amount: 1000, label: "$1,000" },
];

const programs = [
  { id: "general", name: "General Support", description: "Support Launchpad's overall mission and programs" },
  { id: "career", name: "Career Exploration", description: "Help students discover tech career paths" },
  { id: "readiness", name: "Job Readiness", description: "Fund resume building and interview preparation" },
  { id: "experience", name: "Real-World Experience", description: "Support hands-on projects and industry connections" },
];

export default function ContactPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("general");
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    category: "Individual" as "Individual" | "Corporate" | "Foundation",
  });
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowMessage(true);
    // In a real app, this would process the payment
    console.log("Donation submitted:", {
      amount: selectedAmount || customAmount,
      program: selectedProgram,
      donorInfo,
      isAnonymous,
      message,
    });
  };

  const finalAmount = selectedAmount || parseFloat(customAmount) || 0;

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
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Launchpad</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Donor Connection Platform</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
              <Link href="/donors" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Donors</Link>
              <Link href="/admin" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Admin</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Message */}
        {showMessage ? (
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 text-center border border-gray-100 dark:border-gray-700">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">✓</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Thank You for Your Donation!</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Your generous contribution of <span className="font-bold text-green-600 dark:text-green-400">${finalAmount.toLocaleString()}</span> will help Launchpad build accelerated pathways for high school students to reach high-paying, future-ready careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all"
              >
                Return to Home
              </Link>
              <button
                onClick={() => setShowMessage(false)}
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              >
                Make Another Donation
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Your support helps Launchpad build accelerated pathways, connecting high school students to high-paying, future-ready careers.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Donation Amount */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Select Donation Amount</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  {donationAmounts.map((option) => (
                    <button
                      key={option.amount}
                      type="button"
                      onClick={() => handleAmountSelect(option.amount)}
                      className={`py-4 px-6 rounded-xl font-semibold text-lg transition-all ${
                        selectedAmount === option.amount
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 text-lg">$</span>
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-lg"
                    min="1"
                  />
                </div>
              </div>

              {/* Program Selection */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Choose a Program to Support</h2>
                <div className="space-y-3">
                  {programs.map((program) => (
                    <label
                      key={program.id}
                      className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                        selectedProgram === program.id
                          ? "bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-500"
                          : "bg-gray-50 dark:bg-gray-700/50 border-2 border-transparent hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      <input
                        type="radio"
                        name="program"
                        value={program.id}
                        checked={selectedProgram === program.id}
                        onChange={(e) => setSelectedProgram(e.target.value)}
                        className="mt-1 w-5 h-5 text-blue-600 focus:ring-blue-500"
                      />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">{program.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{program.description}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Donor Information */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Donor Information</h2>
                
                <div className="flex items-center gap-3 mb-6">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="w-5 h-5 text-blue-600 focus:ring-blue-500 rounded"
                  />
                  <label htmlFor="anonymous" className="text-gray-700 dark:text-gray-300">
                    Make this donation anonymous
                  </label>
                </div>

                {!isAnonymous && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={donorInfo.name}
                        onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={donorInfo.email}
                        onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={donorInfo.phone}
                        onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Donor Category</label>
                      <select
                        value={donorInfo.category}
                        onChange={(e) => setDonorInfo({ ...donorInfo, category: e.target.value as "Individual" | "Corporate" | "Foundation" })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      >
                        <option value="Individual">Individual</option>
                        <option value="Corporate">Corporate</option>
                        <option value="Foundation">Foundation</option>
                      </select>
                    </div>

                    {donorInfo.category !== "Individual" && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company/Organization Name</label>
                        <input
                          type="text"
                          value={donorInfo.company}
                          onChange={(e) => setDonorInfo({ ...donorInfo, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          placeholder="Enter company or organization name"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Personal Message */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Personal Message (Optional)</h2>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  placeholder="Share why you're supporting Launchpad..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={!finalAmount || (!isAnonymous && !donorInfo.name)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Donate ${finalAmount.toLocaleString()}
                </button>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  By donating, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </form>
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Launchpad. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
