export function MainContainer({ children }: { children: React.ReactNode }) {
  return (
    <main className="container mx-auto flex-grow px-4 py-8 sm:px-6 lg:px-8">
      {children}
    </main>
  );
}
