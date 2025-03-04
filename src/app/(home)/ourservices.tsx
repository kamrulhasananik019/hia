import { ClipboardPlus, Syringe } from 'lucide-react';
import React from 'react';

const services = [
  { id: 1, name: "Routine Check-ups", icon: ClipboardPlus },
  { id: 2,  name: "Routine Check-ups", icon: ClipboardPlus },
  { id: 3,  name: "Routine Check-ups", icon: ClipboardPlus },
  { id: 4, name: "Emergency Care", icon: Syringe },
  { id: 5,  name: "Routine Check-ups", icon: ClipboardPlus },
  { id: 6, name: "Routine Check-ups", icon: ClipboardPlus },
  { id: 7,  name: "Routine Check-ups", icon: ClipboardPlus },
  { id: 8, name: "Surgical Procedures", icon: Syringe },
];

export default function OurServices() {
  return (
    <div className='bg-white max-w-[1400px] mx-auto'>
      <section className="py-16 text-center flex flex-col items-center">
        <h2 className="text-5xl font-semibold">Our Services</h2>
        <p className="text-gray-600 mt-2">Healthcare services ensure accurate diagnosis and effective treatment.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 px-6">
          {services.map(({ id, name, icon: Icon }) => (
            <div key={id} className="p-6 bg-[#F2EEF7] shadow rounded-md text-center">
              <div className='flex justify-center'>
                <Icon size={80} strokeWidth={0.5} className='text-purple-900' />
              </div>
              <h3 className="text-purple-900 font-semibold mt-2">{name}</h3>
              <button className="mt-3 bg-purple-900 text-white py-1 px-4 rounded">Explore</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
