"use client";

import { useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import {
  useVerifyOtpMutation,
} from "@/redux/api/authApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function VerifyOtpPage() {
  const router = useRouter();
  const params = useSearchParams();

  const email = params.get("email") || "";

  const [verifyOtp, { isLoading: verifying }] = useVerifyOtpMutation();
  // const [resendOtp] = useResendOtpMutation();

  const [otp, setOtp] = useState(["", "", "", "","",""]);

  const inputs = useRef<HTMLInputElement[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    const code = otp.join("");

    if (code.length !== 6) {
      toast.error("Please enter the 6 digit code");
      return;
    }

    try {
      const res = await verifyOtp({
        email,
        otp: code,
      }).unwrap();

      toast.success(res?.message || "Verified successfully");

      const resetToken = res?.data?.reset_token;
      console.log(resetToken, "reset token ")

      if (resetToken) {
        router.push(`/reset-password?token=${resetToken}`);
      }else{
        router.push('/login')
      }
    } catch (err: any) {
      toast.error(err?.data?.message || "Verification failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      {/* Card */}
      <div className="w-full max-w-[650px] h-[381px] bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-between">

        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-semibold text-brand-primary">
            Check your Email
          </h1>

          <p className="text-sm text-gray-500">
            We sent a four digit code to your email address
          </p>
        </div>

        {/* OTP Inputs */}
        <div className="flex gap-4">

          {otp.map((digit, index) => (
            <Input
              key={index}
              ref={(el) => {
                if (el) inputs.current[index] = el;
              }}
              type="text"
              value={digit}
              maxLength={1}
              onChange={(e) => handleChange(e.target.value, index)}
              className="w-[60px] h-[60px]"
            />
          ))}

        </div>

        {/* Submit */}
        <Button
          onClick={handleSubmit}
          disabled={verifying}
          className="w-full h-[48px] "
        >
          {verifying ? "Verifying..." : "Submit"}
        </Button>

        {/* Footer */}
        <p className="text-sm text-gray-400">
          Can't find the email? Check your spam folder.
        </p>

      </div>
    </div>
  );
}