import { Boxes } from "../components/ui/background-boxes";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconCode,
  IconLayersIntersect,
  IconServer,
  IconGitBranch,
  IconCloudUpload,
} from "@tabler/icons-react";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Next.js",
    description: "The React framework for production-grade applications.",
    icon: <RiNextjsFill className="h-6 w-6 text-black" />,
  },
  {
    title: "React.js",
    description: "A JavaScript library for building user interfaces.",
    icon: <RiReactjsFill className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "TypeScript",
    description: "JavaScript with static types for better development experience.",
    icon: <IconCode className="h-6 w-6 text-blue-600" />,
  },
  {
    title: "Figma Designing",
    description: "A utility-first CSS framework for fast UI development.",
    icon: <IconLayersIntersect className="h-6 w-6 text-teal-500" />,
  },
  {
    title: "Node.js",
    description: "A runtime for building scalable server-side applications.",
    icon: <IconServer className="h-6 w-6 text-green-500" />,
  },
  {
    title: "GitHub Actions",
    description: "Automate your workflows with CI/CD directly in GitHub.",
    icon: <IconGitBranch className="h-6 w-6 text-black" />,
  },
  {
    title: "Vercel",
    description: "Deploy modern web applications with ease.",
    icon: <IconCloudUpload className="h-6 w-6 text-black" />,
  },
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
          Daiwiik Harihar
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative z-20">
          A 2nd Year B.Tech Student at Dr. Vishwanath Karad MIT WPU, Pune
        </p>
      </div>
      <div className="max-w-4xl mx-auto my-16 text-center space-y-4">
        <h1 className="text-6xl font-extrabold text-gray-900">
          Welcome to my Portfolio
        </h1>
        <p className="text-lg mx-4 text-purple-600">
          Explore my projects, experience, and creative journey. Discover the
          work that defines me!
        </p>
      </div>
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            // header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>

      <Footer />
    </div>
  );
}
