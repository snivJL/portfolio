import { Card } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Client = {
  imageUrl: string;
  testimonial: string;
  name: string;
  position: string;
};

type Props = {
  client: Client;
};

export default function ClientCard({ client }: Props) {
  console.log(client);
  return (
    <Card className="relative w-full mx-auto rounded-xl">
      <div
        className={cn(
          "absolute inset-0 backdrop-blur-sm bg-slate-200/10 z-0 rounded-xl"
        )}
      />
      <div className="absolute w-20 h-20 rounded-lg -top-10 inset-x-1/2 -translate-x-1/2 border border-white">
        <Image
          src="/projects/placeholder.jpg"
          alt="Client image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="flex flex-col items-center gap-2 p-6 pt-16 relative z-10">
        <p className="text-slate-400 text-center">
          &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sapiente dicta voluptatum vel officiis debitis tempore accusantium
          enim iste. Cupiditate tempore ab nulla quas quisquam maiores
          laboriosam totam eaque praesentium sequi?&quot;
        </p>
        <div className="font-semibold">Marc Thompson</div>
        <div className="text-slate-400 text-sm text-center">
          CEO of Digital Solutions Inc.
        </div>
      </div>
    </Card>
  );
}
