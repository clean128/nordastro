import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <main className="h-screen overflow-hidden bg-background relative">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-2">
          <Icon icon="lucide:sparkles" className="text-yellow-400 text-xl" />
          <span className="text-xl font-medium">nordastro</span>
        </div>
      </nav>

      <div className="container mx-auto px-6 h-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            A revolutionary astrology book written just for you
          </h1>
          <p className="text-lg text-foreground-600">
            Take a 1-minute quiz to get your unique birth chart reading for
            self-growth, better relationships, life path, and career goals.
          </p>

          <div className="space-y-4">
            <p className="text-lg font-medium">
              Start by selecting your gender:
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="solid" className="min-w-[120px]">
                Male
              </Button>
              <Button size="lg" color="warning" className="min-w-[120px]">
                Female
              </Button>
              <Button size="lg" variant="bordered" className="min-w-[120px]">
                Other
              </Button>
            </div>
          </div>
        </div>

        <div className="relative h-full overflow-hidden">
          <div className="grid grid-cols-3 gap-4 absolute inset-0">
            <AutoScrollColumn images={[0, 1, 2]} speed={20} />
            <AutoScrollColumn images={[3, 4, 5]} speed={25} delay={0.5} />
            <AutoScrollColumn images={[6, 7, 8]} speed={15} delay={1} />
          </div>
        </div>
      </div>
    </main>
  );
}

interface AutoScrollColumnProps {
  images: number[];
  speed?: number;
  delay?: number;
}

const AutoScrollColumn: React.FC<AutoScrollColumnProps> = ({
  images,
  speed = 20,
  delay = 0,
}) => {
  return (
    <div className="relative h-full">
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: "-50%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
          delay,
        }}
        className="space-y-4"
      >
        {/* Original images */}
        {images.map((i) => (
          <div key={i} className="aspect-square rounded-xl overflow-hidden">
            <img
              src={`https://img.heroui.chat/image/book?w=400&h=400&u=${i}`}
              alt={`Astrology book ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Duplicated images for seamless loop */}
        {images.map((i) => (
          <div
            key={`dup-${i}`}
            className="aspect-square rounded-xl overflow-hidden"
          >
            <img
              src={`https://img.heroui.chat/image/book?w=400&h=400&u=${i}`}
              alt={`Astrology book ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
