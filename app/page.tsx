import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-screen bg-gradient-to-br from-indigo-950 via-30% via-orange-700 to-blue-900 p-8 pb-20 sm:p-20">
      <div className="max-w-[800px] flex flex-col justify-center gap-6 h-full">
        <h1 className="text-4xl font-bold text-slate-300">
          👋 Hey, I&apos;m Julien
        </h1>
        <h2 className="text-7xl font-bold py-4">Full Stack Developer</h2>
        <p className="text-lg text-slate-300">
          I&apos;m passionate about creating efficient, scalable, and
          user-friendly web applications. With expertise in React, Node.js, and
          cloud technologies, I bring ideas to life.
        </p>
        <div className="flex items-center gap-4">
          <Button size="lg">Get In Touch</Button>
          <Button size="lg" variant="outline">
            View Projects
          </Button>
        </div>
      </div>
    </main>
  );
}
