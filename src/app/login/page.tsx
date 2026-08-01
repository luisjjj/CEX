"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Lock, Eye, EyeSlash } from "@phosphor-icons/react";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const client = createClient();
    if (!client) {
      setError("Configuration error. Please try again later.");
      setIsLoading(false);
      return;
    }

    const { error: authError } = await client.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError(authError.message);
      setIsLoading(false);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-[#0a0d11] flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-[420px]">
          <Link href="/" className="flex items-center justify-center mb-8">
            <img src="/images/logo.svg" alt="cextradevip" className="h-8 w-auto" />
          </Link>

          <div className="bg-[#1a1f2e] rounded-2xl p-8 border border-white/10">
            <h1 className="text-2xl font-bold text-white text-center mb-2">Log In</h1>
            <p className="text-sm text-gray-400 text-center mb-8">
              After login you can Trade.
            </p>

            {error && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-sm text-red-400 text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300">
                    <User size={18} />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-11 pr-4 py-3 bg-[#0f1318] border border-white/15 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FFDE02]/50 focus:ring-1 focus:ring-[#FFDE02]/20 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300">
                    <Lock size={18} />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-11 pr-12 py-3 bg-[#0f1318] border border-white/15 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FFDE02]/50 focus:ring-1 focus:ring-[#FFDE02]/20 transition-all duration-200"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeSlash size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                style={{ backgroundColor: "#FFDE02", color: "#000000" }}
                className="w-full py-3 font-semibold rounded-lg hover:opacity-90 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-2 text-[15px]"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                    Signing in...
                  </span>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>
          </div>

          <div className="mt-6 text-center space-y-3">
            <p className="text-sm text-gray-400">
              Not a member?{" "}
              <Link href="/signup" className="text-[#FFDE02] hover:text-[#D1B500] font-medium transition-colors">
                Signup Now
              </Link>
            </p>
            <Link href="/helpline" className="inline-block text-sm text-gray-400 hover:text-white transition-colors">
              Our Helpline
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
