import React, { useState } from "react";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  className?: string;
}

const Tooltip = ({ children, content, className }: TooltipProps) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
      className={`relative inline-block ${className ?? ""}`}
    >
      {children}

      {isTooltipVisible && (
        <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-3 py-2 text-sm text-white shadow-md">
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
