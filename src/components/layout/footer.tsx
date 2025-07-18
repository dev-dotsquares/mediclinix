export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto py-6 px-4 md:px-6">
        <div className="text-center text-sm text-muted-foreground">
          © {currentYear} HealthHub Navigator. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
