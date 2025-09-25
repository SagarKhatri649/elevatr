export default function GlassCard({ children }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-glass backdrop-blur-md shadow-lg p-6">
      {children}
    </div>
  );
}
