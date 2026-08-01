"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Envelope, Phone, MapPin, Clock, PaperPlane } from "@phosphor-icons/react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-brand-bg py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-dark text-sm font-medium rounded-full mb-4">
                Contact
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Have a question? Our support team is available 24/7 to help you.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-6">Send Us a Message</h2>
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 p-8 rounded-xl text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <PaperPlane size={28} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                    <p className="text-green-700">Thank you for contacting us. We will respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                      >
                        <option value="">Select a subject</option>
                        <option value="account">Account Inquiry</option>
                        <option value="deposit">Deposit / Withdrawal</option>
                        <option value="platform">Platform Support</option>
                        <option value="compliance">Compliance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-yellow resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-brand-yellow text-brand-dark font-semibold rounded-lg hover:bg-brand-yellow/90 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-brand-dark mb-6">Get in Touch</h2>
                {[
                  { icon: <Envelope size={22} className="text-brand-dark" />, title: "Email", info: "support@cextradevip.com", desc: "We respond within 24 hours" },
                  { icon: <Phone size={22} className="text-brand-dark" />, title: "Phone", info: "+1 (800) 123-4567", desc: "Available 24/7" },
                  { icon: <MapPin size={22} className="text-brand-dark" />, title: "Office", info: "The Bentley, #16 Cor A Street", desc: "Princess Margaret Drive, Belize City, Belize" },
                  { icon: <Clock size={22} className="text-brand-dark" />, title: "Support Hours", info: "24/7", desc: "Live chat, email, and phone" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-brand-bg rounded-xl">
                    <div className="w-12 h-12 bg-brand-yellow/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-dark mb-1">{item.title}</h3>
                      <p className="text-brand-dark font-medium">{item.info}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
