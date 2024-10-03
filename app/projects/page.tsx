import BlurCard from "@/components/blur-card";
import TechCard from "@/components/tech-card";
import StackIcon from "tech-stack-icons";

const gradients = {
  gradient1:
    "bg-gradient-to-br from-purple-400/20 via-red-500/20 to-red-500/20",
  gradient2:
    "bg-gradient-to-br from-blue-400/20 via-green-500/20 to-yellow-500/20",
  gradient3:
    "bg-gradient-to-br from-pink-400/20 via-purple-500/20 to-indigo-500/20",
  gradient4:
    "bg-gradient-to-br from-teal-400/20 via-cyan-500/20 to-blue-500/20",
};

const ProjectsPage = () => {
  return (
    <main className="pb-12 bg-[#160b1f]">
      <section className="container px-4 mx-auto py-12">
        <h2 className="text-center text-6xl font-semibold mt-36 mb-16">
          Some recent projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <BlurCard
            imageUrl="/projects/placeholder.jpg"
            title="Cosmic Voyage"
            linkUrl="https://cosmicvoyage.com"
            gradientClass={gradients.gradient1}
          />
          <BlurCard
            imageUrl="/projects/placeholder.jpg"
            title="Cosmic Voyage"
            linkUrl="https://cosmicvoyage.com"
            gradientClass={gradients.gradient2}
          />
          <BlurCard
            imageUrl="/projects/placeholder.jpg"
            title="Cosmic Voyage"
            linkUrl="https://cosmicvoyage.com"
            gradientClass={gradients.gradient3}
          />
          <BlurCard
            imageUrl="/projects/placeholder.jpg"
            title="Cosmic Voyage"
            linkUrl="https://cosmicvoyage.com"
            gradientClass={gradients.gradient4}
          />
        </div>
      </section>
      <section className="bg-gradient-to-br from-indigo-950 via-30% via-orange-800 to-blue-900 pt-6">
        <div className="container px-4 mx-auto py-12">
          <h2 className="text-center text-6xl font-semibold mb-16">My Stack</h2>
          <div className="flex items-center flex-wrap gap-8 justify-center w-full">
            <TechCard
              title="Next.js"
              icon={() => <StackIcon name="nextjs2" />}
            />
            <TechCard title="React" icon={() => <StackIcon name="reactjs" />} />
            <TechCard
              title="React Query"
              icon={() => <StackIcon name="reactquery" />}
            />
            <TechCard
              title="Tailwind CSS"
              icon={() => <StackIcon name="tailwindcss" />}
            />
            <TechCard title="Prisma" icon={() => <StackIcon name="prisma" />} />
            <TechCard title="Vue.js" icon={() => <StackIcon name="vuejs" />} />
            <TechCard
              title="TypeScript"
              icon={() => <StackIcon name="typescript" />}
            />
            <TechCard title="Git" icon={() => <StackIcon name="git" />} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
