import React, { useEffect, useRef, useState } from "react";

export type TabItemType = {
  name: string;
  element: React.ReactNode | null;
};

export type TabProps = {
  items: TabItemType[];
};

const Tab = ({ items }: TabProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabIndicatorRef = useRef<HTMLSpanElement>(null);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const updateTabIndicator = () => {
    const currentTab = tabsRef.current[activeTabIndex];
    if (currentTab && tabIndicatorRef.current) {
      tabIndicatorRef.current.style.left = `${currentTab.offsetLeft}px`;
      tabIndicatorRef.current.style.width = `${currentTab.clientWidth}px`;
    }
  };

  useEffect(() => {
    updateTabIndicator();
    window.addEventListener("resize", updateTabIndicator);

    return () => {
      window.removeEventListener("resize", updateTabIndicator);
    };
  }, [activeTabIndex]);

  return (
    <div className="flex flex-col items-center justify-center relative">
      <div
        className={`relative grid grid-cols-${items.length} gap-1 mb-6 bg-zinc-800 rounded-xl p-1 z-10`}
      >
        {items.map((item, index) => (
          <button
            key={item.name}
            ref={(el) => {
              tabsRef.current[index] = el;
            }}
            onClick={() => setActiveTabIndex(index)}
            className={`px-4 py-2 text-sm relative z-10 transition-colors duration-300 ${
              activeTabIndex === index ? "text-black" : "text-white"
            }`}
          >
            {item.name}
          </button>
        ))}
        <span
          ref={tabIndicatorRef}
          className="absolute bottom-[0.25rem] h-[calc(100%-0.5rem)] bg-white rounded-md shadow-sm transition-all duration-300"
        />
      </div>
      <div key={items[activeTabIndex]?.name} className="w-full">
        {items[activeTabIndex]?.element}
      </div>
    </div>
  );
};

export default Tab;
