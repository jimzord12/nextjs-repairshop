import Header from "@/components/Header/Header";

interface RSLayoutProps {
  children: React.ReactNode;
}

export default async function RSLayout({ children }: RSLayoutProps) {
  return (
    <main className="mx-auto w-full max-w-7xl">
      <Header />
      <div className="px-4 py-2">{children}</div>
    </main>
  );
}
