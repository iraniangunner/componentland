export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Authentication</h1>
      <main>{children}</main>
    </div>
  );
}
