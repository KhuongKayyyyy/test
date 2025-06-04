"use client";
import React from "react";
import { Eye, EyeOff, Lock, Sparkles } from "lucide-react";
import Image from "next/image";
import images from "../../../assets/img/signImages.jpg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
// import style from "./CustomInput.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// Mock image component since we can't import actual images

const EnhancedSignIn = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const signInSchema = z.object({
    studentID: z
      .string()
      .min(1, "Mã sinh viên không được để trống")
      .max(20, "Mã sinh viên không được quá 20 ký tự"),
    password: z
      .string()
      .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
      .max(50, "Mật khẩu không được quá 50 ký tự"),
  });
  const signInForm = useForm({
    defaultValues: {
      studentID: "",
      password: "",
    },
    resolver: zodResolver(signInSchema),
  });

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
    console.log("Google Sign In clicked");
  };

  console.log(
    signInForm.watch("studentID"),
    signInForm.watch("password"),
    "ss "
  );
  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex gap-10 items-center justify-center relative overflow-auto">
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 overflow-hidden relative">
          <div className="flex flex-col gap-10 lg:flex-row min-h-[700px] max-h-[90vh] overflow-y-auto relative z-10">
            <div className="lg:w-1/2 relative overflow-hidden">
              <Image
                src={images}
                width={800}
                height={700}
                alt="Sign In Image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side - Form */}
            <div className="lg:w-1/2 p-8 lg:p-12 bg-gradient-to-br from-white/95 via-gray-50/90 to-blue-50/85 backdrop-blur-xl">
              <div className="max-w-md mx-auto h-full flex flex-col gap-4 justify-center">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-3xl mb-6 shadow-xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    <Lock className="w-10 h-10 text-white relative z-10" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <h1 className="text-4xl h-[47px]  font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    Đăng Nhập
                  </h1>
                  <p className="text-gray-600 text-lg font-medium">
                    Chào mừng bạn quay trở lại
                  </p>
                </div>
                <form
                  onSubmit={signInForm.handleSubmit((data) => {
                    console.log("Form Data:", data);
                    // Handle sign-in logic here
                  })}
                  className="flex flex-col gap-5 "
                >
                  <Form {...signInForm}>
                    <FormField
                      control={signInForm.control}
                      name="studentID"
                      render={({ field }) => (
                        <FormItem className="space-y-1">
                          <FormLabel className="text-slate-700 font-semibold text-sm tracking-wide uppercase">
                            Mã Sinh Viên
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="text"
                              placeholder="Nhập mã sinh viên của bạn"
                              className={` p-5 w-full h-12 rounded-2xl placeholder:text-slate-400 border focus:outline-none focus:ring-1  ${
                                signInForm.formState.errors.studentID &&
                                "border-red-500 focus:ring-red-500"
                              }   `}
                            />
                          </FormControl>
                          <FormMessage className="text-red-500 text-sm mt-1" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={signInForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem className="space-y-1">
                          <FormLabel className="text-slate-700 font-semibold text-sm tracking-wide uppercase">
                            Mật Khẩu
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input
                                {...field}
                                type={showPassword ? "text" : "password"}
                                placeholder="Nhập mật khẩu của bạn"
                                className={`w-full px-5 pr-12 h-12 rounded-2xl placeholder:text-slate-400 
                                           border focus:outline-none focus:ring-1
                                           ${
                                             signInForm.formState.errors
                                               .password &&
                                             "border-red-500 focus:ring-red-500"
                                           }`}
                              />
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-slate-700 transition-colors"
                              >
                                {showPassword ? (
                                  <EyeOff className="h-5 w-5" />
                                ) : (
                                  <Eye className="h-5 w-5" />
                                )}
                              </button>
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-500 text-sm mt-1" />
                        </FormItem>
                      )}
                    />
                  </Form>
                  <div className="flex items-center justify-between">
                    <div></div>
                    <a
                      href="#"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Quên mật khẩu?
                    </a>
                  </div>
                  <div className="w-full flex items-center ">
                    <Button className="w-full p-5">Đăng Nhập</Button>
                  </div>
                </form>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">hoặc</span>
                  </div>
                </div>

                {/* Google Sign In Button */}
                <Button
                  type="button"
                  onClick={handleGoogleSignIn}
                  variant="outline"
                  className="w-full h-12 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 rounded-2xl"
                >
                  <div className="flex items-center justify-center gap-3">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span className="text-gray-700 font-medium">
                      Đăng nhập với Google
                    </span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </div>
  );
};
export default EnhancedSignIn;
