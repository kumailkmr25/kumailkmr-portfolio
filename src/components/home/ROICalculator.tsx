"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Calculator, ArrowRight, DollarSign, Clock } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/lib/data";

export function ROICalculator() {
  const [employees, setEmployees] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(25);

  // Calculation Logic
  // Assuming 4 weeks per month, and AI automates 75% of those manual hours.
  const totalManualHoursPerMonth = employees * hoursPerWeek * 4;
  const automatedHoursPerMonth = totalManualHoursPerMonth * 0.75;
  const costSavingsPerMonth = automatedHoursPerMonth * hourlyRate;
  const costSavingsPerYear = costSavingsPerMonth * 12;

  return (
    <section className="section-py bg-white dark:bg-[#0a0a0a]">
      <div className="section-container max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Sliders */}
          <div className="flex flex-col gap-8">
            <SectionHeading
              badge="ROI Calculator"
              title="Calculate Your Savings"
              subtitle="See exactly how much time and money you are losing to manual tasks, and what automation can recover."
            />

            <div className="glass-card premium-card p-6 md:p-8 space-y-8 bg-[#f4f4f5]/50 dark:bg-[#111111]/50">
              
              {/* Slider 1 */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-semibold text-foreground">Team Size</label>
                  <span className="text-primary font-bold">{employees} employees</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="50" 
                  value={employees} 
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full accent-primary h-2 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Slider 2 */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-semibold text-foreground">Manual Hours per Employee / Week</label>
                  <span className="text-primary font-bold">{hoursPerWeek} hrs</span>
                </div>
                <input 
                  type="range" 
                  min="2" 
                  max="40" 
                  value={hoursPerWeek} 
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full accent-primary h-2 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
                <p className="text-xs text-[#71717a] mt-2">Data entry, copy-pasting, answering FAQs, chasing documents.</p>
              </div>

              {/* Slider 3 */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-semibold text-foreground">Average Hourly Rate ($)</label>
                  <span className="text-primary font-bold">${hourlyRate}/hr</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="100" 
                  step="5"
                  value={hourlyRate} 
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full accent-primary h-2 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Right: Output */}
          <div className="relative">
            {/* Background decorative blob */}
            <div className="absolute inset-0 bg-primary/5 rounded-[3rem] blur-3xl transform rotate-3 scale-105 pointer-events-none" />
            
            <motion.div 
              key={`${employees}-${hoursPerWeek}-${hourlyRate}`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="glass-card premium-card p-8 md:p-12 relative z-10 border-primary/20"
            >
              <div className="w-12 h-12 rounded-xl emerald-bg text-primary flex items-center justify-center mb-8">
                <Calculator className="w-6 h-6" />
              </div>
              
              <h4 className="text-[#71717a] font-semibold text-sm uppercase tracking-wider mb-2">Potential ROI</h4>
              <div className="flex items-end gap-2 mb-8">
                <h3 className="text-5xl md:text-6xl font-sora font-bold text-foreground">
                  ${costSavingsPerYear.toLocaleString()}
                </h3>
                <span className="text-lg text-[#71717a] font-medium mb-1">/ year saved</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-white dark:bg-[#0a0a0a] rounded-xl border border-black/5 dark:border-white/5">
                  <div className="flex items-center gap-2 text-[#71717a] mb-1">
                    <Clock className="w-4 h-4" /> <span className="text-xs font-semibold uppercase tracking-wider">Time Recovered</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">{automatedHoursPerMonth.toLocaleString()} hrs/mo</div>
                </div>
                
                <div className="p-4 bg-white dark:bg-[#0a0a0a] rounded-xl border border-black/5 dark:border-white/5">
                  <div className="flex items-center gap-2 text-[#71717a] mb-1">
                    <DollarSign className="w-4 h-4" /> <span className="text-xs font-semibold uppercase tracking-wider">Monthly Value</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">${costSavingsPerMonth.toLocaleString()}</div>
                </div>
              </div>

              <Link
                href={personalInfo.social.calendly}
                target="_blank"
                className="group flex items-center justify-center gap-2 w-full py-4 bg-foreground text-background font-semibold rounded-xl transition-all hover:scale-[1.02] shadow-md"
              >
                Claim Your Savings <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
