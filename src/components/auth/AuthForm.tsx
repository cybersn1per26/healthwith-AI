import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { auth } from '@/lib/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

type FormData = {
  email: string;
  password: string;
};

export function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, data.email, data.password);
        toast.success('Successfully logged in!');
        navigate('/diagnosis');
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
        await sendEmailVerification(userCredential.user);
        toast.success('Registration successful! Please verify your email.');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success('Successfully signed in with Google!');
      navigate('/diagnosis');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleForgotPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset email sent!');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">
        {isLogin ? 'Login' : 'Register'}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            {...register('email', { required: true })}
            type="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.email && <span className="text-red-500">Email is required</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            {...register('password', { required: true })}
            type="password"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.password && <span className="text-red-500">Password is required</span>}
        </div>
        <Button type="submit" className="w-full">
          {isLogin ? 'Login' : 'Register'}
        </Button>
      </form>
      <Button
        variant="outline"
        onClick={handleGoogleSignIn}
        className="w-full mt-4"
      >
        Sign in with Google
      </Button>
      <div className="mt-4 text-center">
        <button
          type="button"
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-600 hover:text-blue-800"
        >
          {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
        </button>
      </div>
      {isLogin && (
        <button
          type="button"
          onClick={() => {
            const email = prompt('Enter your email address');
            if (email) handleForgotPassword(email);
          }}
          className="mt-2 text-sm text-blue-600 hover:text-blue-800 block text-center w-full"
        >
          Forgot Password?
        </button>
      )}
    </div>
  );
}