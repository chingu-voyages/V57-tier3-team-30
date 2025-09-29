"use client";

export const PullRequestSkeleton = () => {
  return (
    <div
      className="max-w-sm rounded-xl border border-gray-300 p-6 opacity-20"
      style={{ width: "450px", height: "385px" }}
    >
      <div className="flex animate-pulse space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="flex gap-4 items-center">
            <div className="w-full h-6 rounded bg-gray-200"></div>
            <div className="w-36 h-8 rounded-full bg-gray-300"></div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 h-6 rounded bg-gray-200"></div>
              <div className="col-span-1 h-6 rounded bg-gray-200"></div>
            </div>
            <div className="col-span-2 h-1 rounded bg-gray-200"></div>
            <div className="h-6 rounded bg-gray-200"></div>
            <div className="col-span-2 h-1 rounded bg-gray-200"></div>
            <div className="col-span-1 h-6 rounded bg-gray-200"></div>
            <div className="col-span-2 h-1 rounded bg-gray-200"></div>
            <div className="col-span-1 h-6 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PullRequestSkeletons = () => {
  return (
    <ul className="flex gap-8 flex-wrap">
      {Array.from({ length: 6 }).map((_, index) => (
        <PullRequestSkeleton key={index} />
      ))}
    </ul>
  );
};
