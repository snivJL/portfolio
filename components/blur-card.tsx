import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

type BlurCardProps = {
  title: string;
  imageUrl: string;
  linkUrl: string;
  gradientClass: string;
};

export default function BlurCard({
  title,
  imageUrl,
  linkUrl,
  gradientClass,
}: BlurCardProps) {
  return (
    <Card className="relative w-full mx-auto overflow-hidden rounded-xl">
      <div
        className={cn("absolute inset-0 backdrop-blur-lg z-0", gradientClass)}
      ></div>
      <div className="relative z-10 p-4">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <Button
          asChild
          variant="secondary"
          size="icon"
          className="absolute top-4 right-4 rounded-full"
        >
          <Link href={linkUrl} target="_blank" rel="noopener noreferrer">
            <ArrowTopRightIcon className="h-6 w-6" />
            <span className="sr-only">External link</span>
          </Link>
        </Button>
        <div className="mt-6">
          <Image
            src={imageUrl}
            alt="Card image"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </Card>
  );
}
