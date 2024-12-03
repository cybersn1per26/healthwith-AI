import React from 'react';
import { Microscope, BookOpen, BarChart, Network, Globe, FlaskConical } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Research() {
  const researchAreas = [
    {
      title: "Clinical Studies",
      description: "Access to cutting-edge clinical trials and research studies in healthcare",
      icon: Microscope,
    },
    {
      title: "Medical Literature",
      description: "AI-powered analysis of the latest medical research and publications",
      icon: BookOpen,
    },
    {
      title: "Health Analytics",
      description: "Advanced analytics and insights from global health data",
      icon: BarChart,
    },
    {
      title: "Research Network",
      description: "Connection to a global network of healthcare researchers and institutions",
      icon: Network,
    },
    {
      title: "Global Health Trends",
      description: "Real-time analysis of worldwide health trends and patterns",
      icon: Globe,
    },
    {
      title: "Innovation Lab",
      description: "Explore breakthrough technologies in healthcare and medicine",
      icon: FlaskConical,
    }
  ];

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Healthcare Research & Innovation
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Stay at the forefront of medical advancement with our AI-powered research platform, 
            connecting you to the latest discoveries and innovations in healthcare.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {researchAreas.map((area) => (
              <div key={area.title} className="flex flex-col bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <area.icon className="h-5 w-5 flex-none text-emerald-600" aria-hidden="true" />
                  {area.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{area.description}</p>
                  <p className="mt-6">
                    <Button variant="outline" size="sm">
                      Discover more
                    </Button>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Research Statistics */}
        <div className="mt-20 rounded-2xl bg-emerald-600 py-10 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Advancing Healthcare Through Research
                </h2>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-white">Clinical Studies</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">2,000+</dd>
                </div>
                <div className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-white">Research Papers</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">50,000+</dd>
                </div>
                <div className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-white">Global Partners</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">100+</dd>
                </div>
                <div className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-white">Healthcare Innovations</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">500+</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
