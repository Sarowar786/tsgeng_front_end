"use client";

import { z } from "zod";
// import logo from "../../../../public/images/logonav.png";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { useResetPasswordMutation } from "@/redux/api/authApi";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const registerSchema = z
  .object({
    password: z
      .string()
      .min(1, "Password is required")
      .max(10, "Password must be at least 10 characters"),
    confirm: z
      .string()
      .min(1, "Confirm password is required")
      .max(10, "Password must be at least 10 characters"),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

export default function ResetPassPage() {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const [resetPassword] = useResetPasswordMutation();

  const reset_token = useSearchParams().get("token");
  console.log(reset_token, "reset token")

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      password: "",
      confirm: "",
    },
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      const payload = {
        password: data.password,
        confirm: data.confirm,
        reset_token: reset_token,
      };

      const res = await resetPassword(payload).unwrap();
      console.log(res)
      toast.success("Password updated successfully");

      router.push("/login");
    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      {/* Card */}
      <div className="w-full max-w-[645px] border border-gray-200 rounded-2xl px-10 py-10">

        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          
          <h1 className="text-[30px] font-semibold text-brand-primary mt-4">
            Create New Password
          </h1>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-5"
        >
          {/* Password */}
          <div className="relative w-full max-w-[581px]">
            <label className="text-sm text-gray-700">Password</label>

            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className={`mt-1 w-full h-[48px] 
              ${
                errors.password
                  ? "border-red-500"
                  : "border-gray-200 focus:border-primary"
              }`}
              {...register("password")}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[43px] text-primary"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>

            {errors.password && (
              <p className="mt-1 text-xs text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="relative w-full">
            <label className="text-sm text-gray-700">Confirm Password</label>

            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className={`mt-1 w-full h-[48px] 
              ${
                errors.confirm
                  ? "border-red-500"
                  : "border-gray-200 focus:border-primary"
              }`}
              {...register("confirm")}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[43px] text-primary"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>

            {errors.confirm && (
              <p className="mt-1 text-xs text-red-600">
                {errors.confirm.message}
              </p>
            )}
          </div>

          {/* Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-[48px]"
          >
            {isSubmitting ? "Continue..." : "Continue"}
          </Button>
        </form>
      </div>
    </div>
  );
}