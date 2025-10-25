import React, { useState } from "react";

export default function PlanCards() {
  const plans = [
    {
      id: "A",
      name: "PLAN #A",
      daysPerWeek: "2 days per week",
      classCount: "2 days class",
      classType: "One-to-One",
      duration: "40 minutes",
      period: "According to student's ability",
      gender: "Both Male/Female",
      languages: "Bangla / English",
    },
    {
      id: "B",
      name: "PLAN #B",
      daysPerWeek: "3 days per week",
      classCount: "3 days class",
      classType: "One-to-One",
      duration: "40 minutes",
      period: "According to student's ability",
      gender: "Both Male/Female",
      languages: "Bangla / English",
    },
    {
      id: "C",
      name: "PLAN #C",
      daysPerWeek: "4 days per week",
      classCount: "4 days class",
      classType: "One-to-One",
      duration: "40 minutes",
      period: "According to student's ability",
      gender: "Both Male/Female",
      languages: "Bangla / English",
    },
    {
      id: "D",
      name: "PLAN #D",
      daysPerWeek: "5 days per week",
      classCount: "5 days class",
      classType: "One-to-One",
      duration: "40 minutes",
      period: "According to student's ability",
      gender: "Both Male/Female",
      languages: "Bangla / English",
    },
  ];

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  function openRegister(plan) {
    setSelected(plan);
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
    setSelected(null);
    setForm({ name: "", email: "", phone: "" });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: replace with API call
    alert(`Registered for ${selected?.name} (${selected?.daysPerWeek})
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}`);
    closeModal();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">Available Plans</h2>
       <p className="text-sm text-gray-500 text-center text-white mb-8">Perfect for learners who want focused, one-to-one guidance.</p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col justify-between hover:scale-105 transform transition"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full">{p.daysPerWeek}</span>
                <span className="text-xs text-gray-500">{p.languages}</span>
              </div>

              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>

              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>
                  <strong>Class Count:</strong> {p.classCount}
                </li>
                <li>
                  <strong>Class Type:</strong> {p.classType}
                </li>
                <li>
                  <strong>Class Duration:</strong> {p.duration}
                </li>
                <li>
                  <strong>Course Period:</strong> {p.period}
                </li>
                <li>
                  <strong>Gender:</strong> {p.gender}
                </li>
              </ul>

             
            </div>

            <div className="p-4 bg-gray-50">
              <button
                onClick={() => openRegister(p)}
                className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-shadow shadow"
              >
                Register
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {open && selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/50" onClick={closeModal}></div>

          <div className="relative max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Register: {selected.name} — {selected.daysPerWeek}</h4>
              <p className="text-sm text-gray-600 mb-4">Fill the details below and we will contact you to confirm schedule.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                    className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-green-500 p-2"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                    className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-green-500 p-2"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone (optional)</label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                    className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-green-500 p-2"
                    placeholder="017XXXXXXXX"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button type="submit" className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium">Submit</button>
                  <button type="button" onClick={closeModal} className="text-sm text-gray-500 hover:underline">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
