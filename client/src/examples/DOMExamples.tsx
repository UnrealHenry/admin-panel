import React, { useRef, useEffect, useState } from 'react';

const DOMExamples: React.FC = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Example 1: Focus management
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  };

  // Example 2: Scroll to element
  const scrollToElement = () => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }
  };

  // Example 3: Measure element dimensions
  const measureElement = () => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      console.log('Element dimensions:', {
        width: rect.width,
        height: rect.height,
        top: rect.top,
        left: rect.left
      });
    }
  };

  // Example 4: Add/remove CSS classes
  const toggleClass = () => {
    if (divRef.current) {
      divRef.current.classList.toggle('highlight');
    }
  };

  // Example 5: Event delegation
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'BUTTON') {
      console.log('Button clicked:', target.textContent);
    }
  };

  // Example 6: Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        DOM Manipulation Examples
      </h1>

      {/* Example 1: Focus Management */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">1. Focus Management</h2>
        <div className="space-y-4">
          <input
            ref={inputRef}
            type="text"
            placeholder="Click the button to focus me"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={focusInput}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Focus Input
          </button>
        </div>
      </div>

      {/* Example 2: Scroll Management */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">2. Scroll Management</h2>
        <div className="space-y-4">
          <button
            onClick={scrollToElement}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Scroll to Target Element
          </button>
          <div className="h-32 bg-gray-100 rounded-md flex items-center justify-center">
            <p>Scroll down to see the target element</p>
          </div>
        </div>
      </div>

      {/* Example 3: Element Measurement */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">3. Element Measurement</h2>
        <div className="space-y-4">
          <button
            onClick={measureElement}
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          >
            Measure Element (check console)
          </button>
          <div
            ref={divRef}
            className="w-48 h-24 bg-blue-200 rounded-md flex items-center justify-center transition-all duration-300"
          >
            <p>Target Element</p>
          </div>
        </div>
      </div>

      {/* Example 4: CSS Class Manipulation */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">4. CSS Class Manipulation</h2>
        <div className="space-y-4">
          <button
            onClick={toggleClass}
            className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
          >
            Toggle Highlight Class
          </button>
          <div
            ref={divRef}
            className="w-48 h-24 bg-gray-200 rounded-md flex items-center justify-center transition-all duration-300"
          >
            <p>Click to toggle highlight</p>
          </div>
        </div>
      </div>

      {/* Example 5: Event Delegation */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">5. Event Delegation</h2>
        <div 
          onClick={handleClick}
          className="space-y-2 p-4 border border-gray-300 rounded-md"
        >
          <p className="text-sm text-gray-600">Click any button below (event delegation):</p>
          <button className="px-3 py-1 bg-red-500 text-white rounded mr-2">
            Button 1
          </button>
          <button className="px-3 py-1 bg-green-500 text-white rounded mr-2">
            Button 2
          </button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded">
            Button 3
          </button>
        </div>
      </div>

      {/* Example 6: Intersection Observer */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">6. Intersection Observer</h2>
        <div className="space-y-4">
          <div className="h-32 bg-gray-100 rounded-md flex items-center justify-center">
            <p>Scroll to see the element below</p>
          </div>
          <div
            ref={divRef}
            className={`w-full h-24 rounded-md flex items-center justify-center transition-all duration-500 ${
              isVisible 
                ? 'bg-green-200 text-green-800' 
                : 'bg-red-200 text-red-800'
            }`}
          >
            <p>{isVisible ? 'Element is visible!' : 'Element is not visible'}</p>
          </div>
        </div>
      </div>

      {/* Example 7: Dynamic Content */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">7. Dynamic Content</h2>
        <div className="space-y-4">
          <button
            onClick={() => setCount(prev => prev + 1)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Increment Counter
          </button>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              Count: {count}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .highlight {
          background-color: #fef3c7 !important;
          border: 2px solid #f59e0b !important;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default DOMExamples; 