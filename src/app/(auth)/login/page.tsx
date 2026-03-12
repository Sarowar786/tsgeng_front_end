"use client";

import Link from "next/link";
import Image from "next/image";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import rightImage from "../../../../public/images/bannerImage.jpg";
import logo from "../../../../public/images/logo.png";
import { useLoginMutation } from "@/redux/api/authApi";
import { useDispatch } from "react-redux";
import { setRefreshToken, setUser } from "@/redux/features/authSlice";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/components/validation/validation";
import { toast } from "sonner";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      terms: false,
    },
  });

  const [loginUser] = useLoginMutation();

  const dispatch = useDispatch();
  const router = useRouter();

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const onSubmit = async (data: FieldValues) => {
    const payload = {
      identifier: String(data.email).trim(),
      password: String(data.password),
      accepted_terms: data.terms,
    };

    try {

      const response = await loginUser(payload).unwrap();

      if (response.success && response?.data?.access) {

        dispatch(setUser({ token: response.data.access }));
        dispatch(setRefreshToken({ refresh_token: response.data.refresh }));

        toast.success("Login Successful", {
          style: {
            background: "#1AC19C",
            color: "#fff",
            border: "1px solid #F97316",
          },
        });

        router.push('/comingsoon');
      }

    } catch (err: any) {

      const backend = err?.data;

      let msg = "Something went wrong. Please try again.";

      if (backend) {

        if (backend?.error) {
          const firstKey = Object.keys(backend.error)[0];
          if (firstKey && backend.error[firstKey]?.length > 0) {
            msg = backend.error[firstKey][0];
          }
        }

        if (backend?.message) {
          msg = backend.message;
        }
      }

      toast.error(msg, {
        style: {
          background: "#FEF2F2",
          color: "#991B1B",
          border: "1px solid #FCA5A5",
        },
      });
    }
  };

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      {/* LEFT SIDE */}
      <div className="flex items-center justify-center px-6 py-12 bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <Link href="/" className="w-60 flex items-center justify-center">
              <Image src={logo} alt="logo" />
            </Link>

            <h1 className="mt-4 text-2xl font-semibold text-primary">
              Login to Your Account
            </h1>

            <p className="mt-1 text-sm text-brand-primary">
              Join the community of prepared individuals
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 space-y-4"
            noValidate
          >
            {/* EMAIL */}
            <div>
              <label className="text-[16px] font-medium text-brand-primary">
                Email Address
              </label>

              <Input
                type="email"
                placeholder="john@gmail.com"
                className={`mt-1 w-full h-[48px] 
                  ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-200 border focus:border-focus-primary"
                  }
                `}
                {...register("email")}
              />

              {errors.email && (
                <p className="mt-1 text-xs text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-[16px] font-medium text-brand-primary">
                Password
              </label>

              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className={`mt-1 w-full h-[48px] 
                    ${
                      errors.password
                        ? "border-red-500"
                        : "border-gray-200 focus:border-focus-primary"
                    }
                  `}
                  {...register("password")}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-black"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {errors.password && (
                <p className="mt-1 text-xs text-red-600">
                  {errors.password.message}
                </p>
              )}

              <div className="mt-2 flex justify-end">
                <Link
                  href="/forget-password"
                  className="text-sm font-normal text-primary hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* TERMS CHECKBOX */}
            <div className="flex flex-col gap-1">
              <div className="flex items-start gap-2 text-sm">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-4 h-4 accent-primary cursor-pointer"
                  {...register("terms")}
                />

                <label htmlFor="terms" className="text-gray-600 cursor-pointer">
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-primary font-medium hover:underline"
                  >
                    Terms of Services
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-primary font-medium hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {errors.terms && (
                <p className="text-xs text-red-600">
                  {errors.terms.message as string}
                </p>
              )}
            </div>

            {/* LOGIN BUTTON */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-[48px]"
            >
              {isSubmitting ? "Logging in..." : "Log in"}
            </Button>

            {/* FOOTER */}
            <p className="text-center text-sm text-primary mt-6">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-primary font-semibold hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative hidden lg:block border-r border-r-amber-50">
        <Image
          src={rightImage}
          alt="Campus"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-[#530045]/40" />

        <div className="absolute flex items-center text-center justify-center w-full h-full">
          <div className="w-full text-white space-y-3">
            <h2 className="text-[36px] font-bold leading-snug">
              Start Your Preparedness Journey
            </h2>

            <p className="text-[20px] font-normal text-gray-200">
              Access premium gear, expert knowledge, <br /> and a supportive
              community
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
