"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ResetIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== confirmPassword) {
      setError("Password Should Match");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (res.ok) {
        toast("Register Successfully");
        const form = e.target;
        form.reset();
        router.push("/admin");
        setLoading(false);
      } else {
        console.error("Registation Failed");
        if (res.status === 401) {
          setError("User Registration Rejected");
        }
        if (res.status === 409) {
          setError("User Already Exists");
        }
        setLoading(false);
      }
    } catch (error) {
      console.log("Error in registation", error);
      setLoading(false);
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex h-screen  flex-col items-center justify-center">
      <h1 className="title m-5">Register</h1>
      <div className="rounded-3xl border border-border p-10 shadow-md">
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col justify-center gap-2 "
        >
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            placeholder="name"
            required
            onChange={handleChange}
          />
          <Label>Username</Label>
          <Input
            type="text"
            name="username"
            placeholder="username"
            required
            onChange={handleChange}
          />
          <div className="flex flex-col gap-2 md:flex-row">
            <div>
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="password"
                required
                minLength="6"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label>Confirm password</Label>
              <Input
                type="text"
                placeholder="confirm password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          {error && (
            <div className=" text-right text-sm text-destructive">{error}*</div>
          )}
          <Link href="/admin" className="text-right text-xs text-primary">
            Already have Account?
          </Link>
          <div className="flex justify-between">
            <Button variant="outline" size="icon" type="reset">
              <ResetIcon />
            </Button>
            <Button type="submit" disabled={loading}>{loading ? "Verifying..." : "Register"}</Button>
          </div>
        </form>
      </div>
    </div>
  );
}