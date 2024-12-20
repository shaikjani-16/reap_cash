export function GridBackgroundDemo({ children }) {
  return (
    <div className="min-h-[30rem] md:min-h-[40rem] lg:min-h-[50rem] w-full dark:bg-[rgba(255, 255, 255, 1)] bg-[#f6f5ee] dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center py-8 ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-[#f4f2e2] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-[#f8f7f2] from-neutral-200 to-neutral-500 py-8">
        {children}
      </div>
    </div>
  );
}
