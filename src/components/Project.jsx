export function Project({ id }) {
  return (
    <>
      <div className=" h-screen p-4" id={id}>
        <h1 className="text-3xl col-span-3 text-center uppercase text-white">Project</h1>
        <div className="max-w-5xl mx-auto py-6 max-h-full grid grid-cols-4 grid-rows-4 gap-2">
          <div className="bg-slate-50 p-1 rounded-md w-full h-full col-span-2 row-span-2 shadow-md">
            <img src="https://picsum.photos/640/360" className="h-full w-full rounded-md" alt="" />
          </div>
          <div className="bg-slate-50 p-1 rounded-md w-full h-full shadow-md">
            <img src="https://picsum.photos/640/360" className="h-full w-full rounded-md" alt="" />
          </div>
          <div className="bg-slate-50 p-1 rounded-md w-full h-full shadow-md row-span-2">
            <img src="https://picsum.photos/640/360" className="h-full w-full rounded-md" alt="" />
          </div>
          <div className="bg-slate-50 p-1 rounded-md w-full h-full shadow-md">
            <img src="https://picsum.photos/640/360" className="h-full w-full rounded-md" alt="" />
          </div>
          <div className="bg-slate-50 p-1 rounded-md w-full h-full shadow-md row-span-2">
            <img src="https://picsum.photos/640/360" className="h-full w-full rounded-md" alt="" />
          </div>
          <div className="bg-slate-50 p-1 rounded-md w-full h-full shadow-md">
            <img src="https://picsum.photos/640/360" className="h-full w-full rounded-md" alt="" />
          </div>
          <div className="bg-slate-50 p-1 rounded-md w-full h-full shadow-md col-span-2 row-span-2">
            <img src="https://picsum.photos/640/360" className="h-full w-full rounded-md" alt="" />
          </div>
          <div className="bg-slate-50 p-1 rounded-md w-full h-full shadow-md">
            <img src="https://picsum.photos/640/360" className="h-full w-full rounded-md" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
