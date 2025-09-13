"use client";

import { useCopyToClipboard } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";

const Swatch = ({ color, value }: { color: `bg-${string}`; value: string }) => {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const [showCopied, setShowCopied] = useState(false);
  const [showValueCopied, setShowValueCopied] = useState(false);

  const hasCopiedText = Boolean(copiedText) && showCopied;

  const colorString = color.replace(/^bg-/, "");

  const handleColorClick = (value: string) => {
    copyToClipboard(value);
    setShowCopied(true);
  };

  const handleClickValue = (value: string) => {
    copyToClipboard(value);
    setShowValueCopied(true);
  };

  useEffect(() => {
    if (!showCopied) return;
    const t = setTimeout(() => setShowCopied(false), 2000);
    return () => clearTimeout(t);
  }, [showCopied]);

  useEffect(() => {
    if (!showValueCopied) return;
    const t = setTimeout(() => setShowValueCopied(false), 2000);
    return () => clearTimeout(t);
  }, [showValueCopied]);

  return (
    <div className="flex items-start mb-3 min-w-[215px]">
      <div className={`w-12 h-12 rounded ${color} mr-3`}></div>
      <div>
        {hasCopiedText ? (
          <p
            className="text-md font-medium text-green-400 min
          "
          >
            Copied!
          </p>
        ) : (
          <p
            className="text-md font-medium cursor-pointer"
            onClick={() => handleColorClick(colorString)}
          >
            {colorString}
          </p>
        )}
        <p
          className="text-sm text-gray-300 cursor-pointer"
          onClick={() => handleClickValue(value)}
        >
          {showValueCopied ? "Copied!" : value}
        </p>
      </div>
    </div>
  );
};

export default Swatch;
