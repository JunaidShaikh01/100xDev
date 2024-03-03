export default function RootLayout({
  children
}: {children: React.ReactNode}
  ) {
  return (
    <>
      <div className="border-b p-1 text-center">20% for login right now</div>
      {children}
    </>
  );
}
