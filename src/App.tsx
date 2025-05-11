import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function App() {
  return (
    <main className="min-h-screen bg-background">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-2">
          <Icon icon="lucide:sparkles" className="text-yellow-400 text-xl" />
          <span className="text-xl font-medium">nordastro</span>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            A revolutionary astrology book written just for you
          </h1>
          <p className="text-lg text-foreground-600">
            Take a 1-minute quiz to get your unique birth chart reading for self-growth,
            better relationships, life path, and career goals.
          </p>

          <div className="space-y-4">
            <p className="text-lg font-medium">Start by selecting your gender:</p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="solid"
                className="min-w-[120px]"
              >
                Male
              </Button>
              <Button
                size="lg"
                color="warning"
                className="min-w-[120px]"
              >
                Female
              </Button>
              <Button
                size="lg"
                variant="bordered"
                className="min-w-[120px]"
              >
                Other
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-xl overflow-hidden ${
                i === 1 || i === 4 ? "col-span-1 row-span-2" : ""
              }`}
            >
              <img
                src={`https://img.heroui.chat/image/book?w=400&h=400&u=${i}`}
                alt={`Astrology book ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}