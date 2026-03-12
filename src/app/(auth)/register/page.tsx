"use client";
import Link from "next/link";
import { z } from "zod";
import rightImage from "../../../../public/images/bannerImage.jpg";
import Image from "next/image";
import logo from "../../../../public/images/logo.png";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { registerSchema } from "@/components/validation/validation";
import { useRegisterMutation } from "@/redux/api/authApi";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    // setError,
    // watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      full_name: "",
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const [registerUser] = useRegisterMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log("submited");
    const toastId = toast.loading("Registering...");
    try {
      const payload = {
        full_name: data.full_name,
        username: data.username,
        email: data.email.trim(),
        password: data.password,
        confirm_password: data.confirm_password,
      };
      console.log("payload", payload);

      const res = await registerUser(payload).unwrap();
      console.log("response ", res);

      if (res?.success) {
        const email = res?.data?.user_data?.email || data.email.trim();

        toast.success(res?.message || "Registered successfully!", {
          id: toastId,
        });

        // ✅ OTP verify page
        router.push(`/otp-verify?email=${encodeURIComponent(email)}`);
      } else {
        toast.error(res?.message || "Registration failed!", { id: toastId });
      }
    } catch (error: any) {
      console.log("REGISTER ERROR FULL =>", error);

      const msg =
        error?.data?.error?.email?.[0] ||
        error?.response?.data?.error?.email?.[0] ||
        error?.data?.message ||
        error?.message ||
        "Something went wrong . please try again ";

      toast.error(msg, { id: toastId });
    }
  };
  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      {/* Right: Form */}
      <div className="flex items-center justify-center px-6 py-12 bg-[#ffffff]">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <Link href={"/"} className="w-60 flex items-center justify-center">
              <Image src={logo} alt="logo" />
            </Link>
            <h1 className="mt-4 text-2xl font-semibold text-primary">
              Create Your Account
            </h1>
            <p className="mt-1 text-sm text-brand-primary">
              Join the community of prepared individuals
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
            <div>
              <label className="text-sm text-gray-700">Full Name</label>
              <Input
                type="text"
                placeholder="John doe"
                className={`mt-1 w-full h-[48px] 
                  ${errors.full_name ? "border-red-500" : "border-gray-200 focus:border-primary"}
                `}
                {...register("full_name")}
              />
              {errors.full_name && (
                <p className="mt-1 text-xs text-red-500">
                  {" "}
                  {errors.full_name.message}{" "}
                </p>
              )}
            </div>
            <div>
              <label className="text-sm text-gray-700">Email</label>
              <Input
                type="email"
                placeholder="johndoe@gmail.com"
                className={`mt-1 w-full h-[48px]
                  ${errors.email ? "border-red-500" : "border-gray-200 focus:border-primary"}
                `}
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-sm text-gray-700">Username</label>
              <Input
                type="text"
                placeholder="Enter your name"
                className={`mt-1 w-full h-[48px]
                  ${errors.username ? "border-red-500" : "border-gray-200 focus:border-primary"}
                `}
                {...register("username")}
              />
              {errors.username && (
                <p className="mt-1 text-xs text-red-500">
                  {" "}
                  {errors.username.message}{" "}
                </p>
              )}
            </div>
            <div className="relative">
              <label className="text-sm text-gray-700">Password</label>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className={`mt-1 w-full h-[48px] 
                  ${errors.password ? "border-red-500" : "border-gray-200 focus:border-primary"}
                `}
                {...register("password")}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-13 -translate-y-1/2 text-primary hover:text-black"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              {errors.password && (
                <p className="mt-1 text-xs text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="relative">
              <label className="text-sm text-gray-700">Confirm Password</label>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className={`mt-1 w-full h-[48px]
                  ${errors.password ? "border-red-500" : "border-gray-200 focus:border-primary"}
                `}
                {...register("confirm_password")}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-13 -translate-y-1/2 text-primary hover:text-black"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              {errors.confirm_password && (
                <p className="mt-1 text-xs text-red-600">
                  {errors.confirm_password.message}
                </p>
              )}
            </div>

            <div className="flex items-start gap-2 text-sm">
              <Input
                type="checkbox"
                id="terms"
                {...register("terms")}
                className="mt-1 w-4 h-4 accent-bgprimary cursor-pointer"
              />

              <label htmlFor="terms" className="text-gray-600 cursor-pointer">
                I agree to the{" "}
                <span className="text-primary cursor-pointer font-medium">
                  Terms fo Services
                </span>{" "}
                and{" "}
                <span className=" text-primary cursor-pointer font-medium">
                  Privacy Policy
                </span>
              </label>
            </div>
            {errors.terms && (
              <p className="text-xs text-red-500">{errors.terms.message}</p>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-[48px]"
            >
              {isSubmitting ? "Creating..." : "Create Account"}
            </Button>
            {/* Footer */}
            <p className="text-center text-sm text-primary mt-6">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* right image  */}
      <div className="relative hidden lg:block border-r border-r-amber-50">
        <Image
          src={rightImage}
          alt="Campus"
          fill
          className="object-content"
          priority
        />
        <div className="absolute inset-0 bg-[#530045]/40" />
        {/* optional overlay blur / tint */}
        <div className="absolute flex items-center text-center justify-center w-full h-full">
          <div className="w-full text-white space-y-3">
            <h2 className="text-[36px] font-bold leading-snug">
              Start Your Preparedness Journey
            </h2>

            <p className="text-[20px] font-normal text-gray-200">
              Access premium gear, expert knowledge,
              <br /> and a supportive community
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
