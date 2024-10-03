import BlurCard from "@/components/blur-card";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <section className="container mx-auto px-4 py-32 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Julien Lejay
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
          Full-stack Developer | Creating elegant solutions to complex problems
        </p>
        <div className="flex space-x-4">
          <Button variant="outline">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </Button>
          <Button variant="outline">
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlurCard
            imageUrl="/projects/placeholder.jpg"
            title="Reddit AI"
            linkUrl="https://cosmicvoyage.com"
            gradientClass={gradients.gradient1}
          />
          {/* <BlurCard
            imageUrl="/projects/placeholder.jpg"
            title="Cosmic Voyage"
            linkUrl="https://cosmicvoyage.com"
            gradientClass={gradients.gradient2}
          /> */}
          <BlurCard
            imageUrl="/projects/placeholder.jpg"
            title="Music Player"
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

      {/* About Me Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Image
            src="/placeholder.svg?height=300&width=300"
            alt="Julien Lejay"
            width={300}
            height={300}
            className="rounded-full border-4 border-purple-500"
          />
          <div className="max-w-xl">
            <p className="text-lg mb-4">
              Hi, I&apos;m Julien Lejay, a passionate full-stack developer with
              5+ years of experience in creating web applications. I specialize
              in React, Node.js, and cloud technologies.
            </p>
            <p className="text-lg mb-4">
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or enjoying a
              good cup of coffee.
            </p>
            <Button variant="outline">Download Resume</Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Get in Touch
        </h2>
        <Card className="max-w-xl mx-auto bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg border-gray-700">
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription>
              Fill out the form below to send me a message
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="mt-8 flex justify-center space-x-4">
          <Button variant="outline" size="icon">
            <Mail className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Twitter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Github className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Linkedin className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>&copy; 2024 Julien Lejay. All rights reserved.</p>
      </footer>
    </div>
  );
}

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
