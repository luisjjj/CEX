"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Envelope, Lock, Key, CreditCard, Eye, EyeSlash } from "@phosphor-icons/react";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    withdrawPin: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    const client = createClient();
    if (!client) {
      setError("Configuration error. Please try again later.");
      setIsLoading(false);
      return;
    }

    const { data, error: authError } = await client.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          full_name: formData.fullName,
          username: formData.username,
        },
      },
    });

    if (authError) {
      setError(authError.message);
      setIsLoading(false);
      return;
    }

    if (data.user) {
      const { error: profileError } = await client
        .from("profiles")
        .update({ withdraw_pin: formData.withdrawPin })
        .eq("id", data.user.id);

      if (profileError) {
        console.error("Profile update error:", profileError);
      }
    }

    if (data.session) {
      router.push("/dashboard");
      router.refresh();
      return;
    }

    setSuccess("Check your email for a verification link!");
    setIsLoading(false);
  };

  const fields = [
    { name: "fullName", label: "Full Name", type: "text", icon: CreditCard, placeholder: "Enter your full name" },
    { name: "username", label: "Username", type: "text", icon: User, placeholder: "Choose a username" },
    { name: "email", label: "Email Address", type: "email", icon: Envelope, placeholder: "Enter your email" },
    { name: "password", label: "Password", type: showPassword ? "text" : "password", icon: Lock, placeholder: "Create a password", isPassword: true },
    { name: "withdrawPin", label: "Withdraw Pin", type: "number", icon: Key, placeholder: "Set a withdraw pin" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0d11] flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-[420px]">
          <Link href="/" className="flex items-center justify-center mb-8">
            <img src="/images/logo.svg" alt="cextradevip" className="h-8 w-auto" />
          </Link>

          <div className="bg-[#1a1f2e] rounded-2xl p-8 border border-white/10">
            <h1 className="text-2xl font-bold text-white text-center mb-2">Sign Up</h1>
            <p className="text-sm text-gray-400 text-center mb-8 leading-relaxed">
              Hey there! Ready to join the party? We just need a few details from you to get started.
            </p>

            {error && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-sm text-red-400 text-center">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-sm text-green-400 text-center">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {fields.map((field) => {
                const Icon = field.icon;
                return (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="block text-sm font-medium text-gray-300 mb-1.5">
                      {field.label}
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300">
                        <Icon size={18} />
                      </div>
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        value={formData[field.name as keyof typeof formData] || ""}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="w-full pl-11 pr-4 py-3 bg-[#0f1318] border border-white/15 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FFDE02]/50 focus:ring-1 focus:ring-[#FFDE02]/20 transition-all duration-200"
                        required
                      />
                      {field.isPassword && (
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white transition-colors"
                        >
                          {showPassword ? <EyeSlash size={18} /> : <Eye size={18} />}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}

              <button
                type="submit"
                disabled={isLoading}
                style={{ backgroundColor: "#FFDE02", color: "#000000" }}
                className="w-full py-3 font-semibold rounded-lg hover:opacity-90 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-2 text-[15px]"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                    Creating account...
                  </span>
                ) : (
                  "Sign Up"
                )}
              </button>
            </form>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <Link href="/login" className="text-[#FFDE02] hover:text-[#D1B500] font-medium transition-colors">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
