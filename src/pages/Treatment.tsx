import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, PieChart, Shield, Users, Calendar, Microscope } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Treatment() {
  const treatmentServices = [
    {
      title: "Personalized Treatment Plans",
      description: "AI-generated treatment plans tailored to your specific condition and medical history",
      icon: FileText,
      link: "/treatment/personalized"
    },
    {
      title: "Medication Management",
      description: "Smart medication scheduling and interaction checking for optimal treatment",
      icon: Shield,
      link: "/treatment/medication"
    },
    {
      title: "Treatment Monitoring",
      description: "Real-time monitoring of treatment effectiveness and side effects",
      icon: PieChart,
      link: "/treatment/monitoring"
    },
    {
      title: "Specialist Coordination",
      description: "Seamless coordination between healthcare providers for comprehensive care",
      icon: Users,
      link: "/treatment/specialist"
    },
    {
      title: "Treatment Timeline",
      description: "Clear visualization of your treatment progress and milestones",
      icon: Calendar,
      link: "/treatment/timeline"
    },
    {
      title: "Advanced Therapies",
      description: "Access to cutting-edge treatment options and clinical trials",
      icon: Microscope,
      link: "/treatment/advanced"
    }
  ];

  return (
    <div className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Personalized Treatment Solutions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our AI-driven platform creates personalized treatment plans and monitors your progress 
            to ensure the best possible outcomes for your health journey.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {treatmentServices.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-emerald-600" aria-hidden="true" />
                  {service.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-6">
                    <Button variant="outline" size="sm">
                      Explore options
                    </Button>
                  </p>
                </dd>
              </Link>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
