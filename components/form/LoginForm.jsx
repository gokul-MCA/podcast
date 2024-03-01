"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (res.ok) {
        const form = e.target;
        const { token } = await res.json();
        // Calculate expiration time (30 minutes from now)
        const expiration = new Date();
        expiration.setTime(expiration.getTime() + 30 * 60 * 1000); // 30 minutes in milliseconds

        // Format expiration time as UTC string
        const expires = expiration.toUTCString();

        document.cookie = `accessToken=${token}; path=/; expires=${expires}; Secure; SameSite=Strict`;
        form.reset();
        router.push("/admin/dashboard");
        setLoading(false);
      } else {
        setError("Invalid credentials");
        setLoading(false);
      }
    } catch (error) {
      console.log("Error logging In:", error);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex h-screen  flex-col items-center justify-center">
      <h1 className="title m-5">Login</h1>
      <div className="rounded-3xl border border-border p-10 shadow-md">
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col justify-center gap-2"
        >
          <Label>UserName</Label>
          <Input type="text" name="username" required onChange={handleChange} />
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            required
            onChange={handleChange}
          />
          {error && (
            <div className=" text-right text-sm text-destructive">{error}*</div>
          )}
          <Link
            href="/admin/register"
            className="text-right text-xs text-primary"
          >
            Create new account ?
          </Link>

          <Button type="submit" disabled={loading}>
            {loading ? "Authenticating..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
}