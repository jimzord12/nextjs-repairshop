import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col items-center justify-center space-y-4 mt-24">
      <h1 className="text-3xl">Page Not Found</h1>
      <Image
        className="rounded-lg"
        src="/images/not-found-1024x1024.png"
        width={400}
        height={400}
        alt="Not Found"
      />
    </div>
  );
}
