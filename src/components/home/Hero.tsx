import React from 'react';
import { ArrowRight, Brain, Activity, Heart, Shield, Microscope, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            AI-Powered Healthcare for Everyone
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Transform your healthcare experience with advanced AI. Get accurate diagnoses, personalized treatment plans, and 24/7 support from our intelligent healthcare platform.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button variant="default" size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Get started
            </Button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 bg-white/80 backdrop-blur-sm rounded-xl">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-emerald-600">Advanced Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for better health
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {[
              {
                icon: Brain,
                title: "AI Diagnosis",
                description: "Advanced algorithms analyze symptoms and medical history for accurate disease detection."
              },
              {
                icon: Shield,
                title: "Preventive Care",
                description: "Personalized health recommendations to prevent diseases before they occur."
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description: "Round-the-clock access to AI-powered health assistance and emergency guidance."
              },
              {
                icon: Microscope,
                title: "Lab Analysis",
                description: "Intelligent interpretation of lab results with detailed explanations."
              },
              {
                icon: Activity,
                title: "Health Tracking",
                description: "Continuous monitoring of vital signs and health metrics for better outcomes."
              },
              {
                icon: Heart,
                title: "Mental Wellness",
                description: "Comprehensive mental health support with AI-guided therapy and resources."
              }
            ].map((feature) => (
              <div key={feature.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-emerald-600" aria-hidden="true" />
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-emerald-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by thousands of users worldwide
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-cols-3">
          {[
            {
              title: "Life-Changing Technology",
              content: "The AI diagnosis feature helped detect my condition early. I'm grateful for this platform.",
              author: "Sarah Johnson",
              role: "Patient"
            },
            {
              title: "Exceptional Support",
              content: "24/7 access to health guidance gives me peace of mind. It's like having a doctor in your pocket.",
              author: "Dr. Michael Chen",
              role: "Healthcare Professional"
            },
            {
              title: "Revolutionary Healthcare",
              content: "The personalized treatment recommendations have significantly improved my health outcomes.",
              author: "Emma Thompson",
              role: "Chronic Care Patient"
            }
          ].map((testimonial) => (
            <div key={testimonial.author} className="rounded-2xl bg-white/80 backdrop-blur-sm ring-1 ring-gray-200 p-6">
              <div className="flex gap-x-3">
                <Star className="h-6 w-6 flex-none text-emerald-600" />
                <Star className="h-6 w-6 flex-none text-emerald-600" />
                <Star className="h-6 w-6 flex-none text-emerald-600" />
                <Star className="h-6 w-6 flex-none text-emerald-600" />
                <Star className="h-6 w-6 flex-none text-emerald-600" />
              </div>
              <h3 className="mt-3 font-semibold text-gray-900">{testimonial.title}</h3>
              <p className="mt-2 text-gray-600">{testimonial.content}</p>
              <div className="mt-4 border-t border-gray-200 pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-emerald-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}