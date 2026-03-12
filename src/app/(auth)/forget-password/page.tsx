"use client";

import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import {
  useForgotPasswordMutation,
  useResendOtpMutation,
} from "@/redux/api/authApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ForgotFormValues = {
  email: string;
  otp?: string;
};

const emailOnlySchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty("Email is required")
    .email("Invalid email address"),
});

const emailOtpSchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty("Email is required")
    .email("Invalid email address"),
  otp: z
    .string()
    .trim()
    .nonempty("OTP is required")
    .min(4, "OTP is too short")
    .max(8, "OTP is too long"),
});

export default function ForgetPasswordPage() {
  const router = useRouter();

  const [step, setStep] = useState<"SEND" | "VERIFY">("SEND");

  const schema = useMemo(
    () => (step === "SEND" ? emailOnlySchema : emailOtpSchema),
    [step]
  );

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<ForgotFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      otp: "",
    },
    mode: "onTouched",
  });

  const [forgotPassword, { isLoading: isSending }] =
    useForgotPasswordMutation();

  const [verifyOtp, { isLoading: isVerifying }] =
    useResendOtpMutation();

  const onSubmit = async (data: ForgotFormValues) => {
    try {
      if (step === "SEND") {
        const res = await forgotPassword({ email: data.email }).unwrap();
        console.log(res)

        toast.success(res?.message || "Code sent!");

        setStep("VERIFY");
        return;
      }

      const res = await verifyOtp({
        email: data.email,
        otp: data.otp,
      }).unwrap();
      console.log(res)

      toast.success(res?.message || "Verified!");

      const resetToken = res?.data?.reset_token;

      if (resetToken) {
        router.push(`/reset-password?token=${encodeURIComponent(resetToken)}`);
      } else {
        router.push("/reset-password");
      }
    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  };

  const loading = isSubmitting || isSending || isVerifying;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      {/* Card */}
      <div className="w-full max-w-[650px] h-auto bg-white border border-gray-200 rounded-2xl p-8 flex flex-col gap-10">

        {/* Title */}
        <div className="text-center">
          <h1 className="text-[40px] font-semibold text-brand-primary">
            Forget Password?
          </h1>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
          noValidate
        >

          {/* Email */}
          <div>
            <label className="text-[16px] font-medium text-brand-primary">
              Email Address
            </label>

            <Input
              type="email"
              placeholder="Enter your email"
              className={`mt-1 w-full h-[48px] rounded-lg border px-4 text-sm outline-none transition
              ${
                errors.email
                  ? "border-red-500"
                  : "border-gray-200 focus:border-primary"
              }`}
              {...register("email")}
              disabled={step === "VERIFY"}
            />

            {errors.email && (
              <p className="mt-1 text-xs text-red-600">
                {String(errors.email.message)}
              </p>
            )}
          </div>

          {/* Remember password */}
          <p className="text-[16px] text-brand-primary">
            Remember this password?{" "}
            <Link
              href="/login"
              className="font-semibold text-primary hover:underline"
            >
              Sign in
            </Link>
          </p>

          {/* OTP Step */}
          {step === "VERIFY" && (
            <div>
              <label className="text-sm text-gray-700">
                OTP Code
              </label>

              <Input
                type="text"
                inputMode="numeric"
                placeholder="Enter OTP"
                className={`mt-1 w-full h-[48px] rounded-lg border px-4 text-sm outline-none transition
                ${
                  errors.otp
                    ? "border-red-500"
                    : "border-gray-200 focus:border-primary"
                }`}
                {...register("otp")}
              />

              {errors.otp && (
                <p className="mt-1 text-xs text-red-600">
                  {String(errors.otp.message)}
                </p>
              )}

              {/* Resend */}
              <Button
                type="button"
                className="mt-2 text-sm text-white font-semibold hover:underline"
                onClick={async () => {
                  try {
                    const email = getValues("email");
                    const res = await forgotPassword({ email }).unwrap();
                    toast.success(res?.message || "Code resent!");
                  } catch (err: any) {
                    toast.error(err?.data?.message || "Failed to resend");
                  }
                }}
              >
                Resend code
              </Button>
            </div>
          )}

          {/* Button */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full h-[48px]"
          >
            {step === "SEND"
              ? loading
                ? "Sending..."
                : "Send Code"
              : loading
              ? "Verifying..."
              : "Verify"}
          </Button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500">
            Have an account?{" "}
            <Link
              href="/register"
              className="text-primary font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}