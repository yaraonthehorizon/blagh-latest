export function BouncingDotsLoader() {
  return (
    <div className="flex gap-1.5">
      <div
        className="w-2 h-2 rounded-full bg-primary/40 animate-bounce"
        style={{ animationDelay: "0ms" }}
      />
      <div
        className="w-2 h-2 rounded-full bg-primary/40 animate-bounce"
        style={{ animationDelay: "150ms" }}
      />
      <div
        className="w-2 h-2 rounded-full bg-primary/40 animate-bounce"
        style={{ animationDelay: "300ms" }}
      />
    </div>
  );
}
