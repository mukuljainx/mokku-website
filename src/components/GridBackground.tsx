export const GridBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.04)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
};
