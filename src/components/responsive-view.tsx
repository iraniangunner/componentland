"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Laptop, Tablet, Smartphone } from "lucide-react";

const devices = [
  { id: "desktop", icon: Laptop, label: "Desktop", width: "100%" },
  { id: "tablet", icon: Tablet, label: "Tablet", width: "768px" },
  { id: "mobile", icon: Smartphone, label: "Mobile", width: "375px" },
];

export function ResponsiveView() {
  const [activeDevice, setActiveDevice] = useState("desktop");

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-center mb-8">
        {devices.map((device) => (
          <button
            key={device.id}
            onClick={() => setActiveDevice(device.id)}
            className={cn(
              "relative flex flex-col items-center justify-center p-4 transition-colors",
              activeDevice === device.id
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            )}
          >
            <device.icon className="w-8 h-8 mb-2" />
            <span className="text-sm font-medium">{device.label}</span>
            {activeDevice === device.id && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                layoutId="underline"
              />
            )}
          </button>
        ))}
      </div>

      <div className="flex justify-center">
        <motion.div
          layout
          animate={{ width: devices.find((d) => d.id === activeDevice)?.width }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative overflow-hidden rounded-lg border bg-background shadow-md"
          style={{ minHeight: "500px" }}
        >
          <div className="absolute top-0 left-0 right-0 h-6 bg-muted flex items-center px-2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <div className="w-2 h-2 rounded-full bg-yellow-500" />
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
          </div>
          <div className="pt-8 p-4">
            <h2 className="text-2xl font-bold mb-4">
              {activeDevice.charAt(0).toUpperCase() + activeDevice.slice(1)}{" "}
              View
            </h2>
            <div className="space-y-4">
              <div className="h-8 bg-muted rounded w-3/4" />
              <div className="h-4 bg-muted rounded w-1/2" />
              <div className="h-4 bg-muted rounded w-5/6" />
              <div className="h-32 bg-muted rounded" />
              <div className="grid grid-cols-2 gap-4">
                <div className="h-20 bg-muted rounded" />
                <div className="h-20 bg-muted rounded" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
