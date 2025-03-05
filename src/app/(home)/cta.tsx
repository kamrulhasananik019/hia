import { Circle } from "lucide-react";
import React from "react";

export default function Cta() {
  return (
    <div>
      <section className="py-14 rounded-2xl bg-gradient-to-b from-purple-900 to-purple-800 bg-purple-950 max-w-[1400px] mx-auto text-white text-center">
        <h2 className="text-3xl">
          Affordable Healthcare for Everyone
        </h2>
        <p className="mt-2 text-gray-300 max-w-4xl mx-auto">
          Get the best medical consultations at a fraction of the cost. Get the
          best medical consultations at a fraction of the cost. Get the best
          medical consultations at a fraction of the cost.
        </p>
        <div className="mt-6">
          <button className="px-6 py-3 bg-white font-semibold text-purple-900 rounded-full mr-4">
            Explore Our Pricing
          </button>
        </div>
      </section>

      <section className="my-14 py-20 px-10 rounded-2xl  max-w-[1400px] mx-auto bg-white border border-gray-400">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Ready to take Charge of your health?</h2>
            <p className="mt-2 ">Start your health journey with the right plan today </p>
          </div>
          <div className="flex items-center gap-10 ">
            <button className="px-6 py-3 bg-purple-900 font-semibold text-white rounded-full">
              Get started
            </button>
            <div className="flex items-center gap-1">
            <Circle strokeWidth={5} size={14} className="text-purple-900"/>
            <p className="font-semibold">Schedule a demo</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
