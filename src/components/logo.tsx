export default function Logo({ className }: { className?: string }) {
  return (
    <span className={`text-2xl font-bold text-primary ${className}`}>
      MEDICLINIX
    </span>
  );
}
