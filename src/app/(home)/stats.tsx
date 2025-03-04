import { BadgeCheck, Headset, Milk, UsersRound } from "lucide-react";
import React from "react";

const statsData = [
  {
    icon: <UsersRound size={35} strokeWidth={1.5} />, 
    value: "55M+", 
    description: "People in Bangladesh & South Asia accessed healthcare services"
  },
  {
    icon: <Headset size={35} strokeWidth={1.5}/>, 
    value: "15K+", 
    description: "E-health services provided, including consultations"
  },
  {
    icon: <BadgeCheck size={35} strokeWidth={1.5}/>, 
    value: "6+", 
    description: "Years of Proven Experience worldwide"
  },
  {
    icon: <Milk size={35} strokeWidth={1.5}/>, 
    value: "1.26M+", 
    description: "People received timely COVID-19 advice"
  }
];

export default function Stats() {
  return (
    <div className="bg-white max-w-[1400px] mx-auto my-5">
      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <div key={index} className="p-6 flex items-center gap-4">
              <div className="text-gray-700">{stat.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-purple-800">{stat.value}</h3>
                <p className="text-gray-600 mt-2">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
