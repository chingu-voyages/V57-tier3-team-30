"use client";

export const PullRequestSkeleton = () => {
  return (
   <>
      <div className="bg-primary-black-200 p-4">
        <div className="flex items-center py-4">
          <div className="animate-pulse bg-gray-800 rounded-md h-10 w-48"></div>
          <button className="animate-pulse bg-gray-800 rounded-md h-10 px-4 ml-2" aria-label="Clear button"></button>
        </div>
        <div className="rounded-md border">
          <div className="animate-pulse bg-gray-800 h-12 w-full"></div>
          <div className="animate-pulse bg-gray-800 h-10 w-full mt-2"></div>
          <div className="animate-pulse bg-gray-800 h-10 w-full mt-2"></div>
          <div className="animate-pulse bg-gray-800 h-10 w-full mt-2"></div>
        </div>
        <div className="flex items-center justify-center space-x-2 py-4">
          <button className="animate-pulse bg-gray-800 rounded-md h-10 px-4" aria-label="Previous button"></button>
          <button className="animate-pulse bg-gray-800 rounded-md h-10 px-4" aria-label="Page number button"></button>
          <button className="animate-pulse bg-gray-800 rounded-md h-10 px-4" aria-label="Next button"></button>
        </div>
      </div>
    </>
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
