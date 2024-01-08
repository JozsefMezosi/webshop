export const DetailLoading = () => {
  return (
    <div className="w-full grid grid-cols-12 gap-2 py-2">
      <div className="col-span-5 grid grid-cols-12 gap-2">
        <div className="h-4 animate-pulse bg-slate-400 col-span-3"></div>
        <div className="h-4 animate-pulse bg-slate-400 col-span-5"></div>
      </div>
      <div className="col-span-5 grid grid-cols-12 gap-2">
        <div className="h-4 animate-pulse bg-slate-400 col-span-1"></div>
        <div className="h-4 animate-pulse bg-slate-400 col-span-3"></div>
        <div className="h-4 animate-pulse bg-slate-400 col-span-2"></div>
        <div className="h-4 animate-pulse bg-slate-400 col-span-5"></div>
      </div>

      <div className="col-span-2 flex justify-end pr-1">
        <div className="h-4 animate-pulse bg-slate-400 w-4"></div>
      </div>
    </div>
  );
};
