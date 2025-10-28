import React, { useState } from 'react';

const DataStructureExamples: React.FC = () => {
  const [arrayResult, setArrayResult] = useState<string>('');
  const [objectResult, setObjectResult] = useState<string>('');
  const [mapResult, setMapResult] = useState<string>('');
  const [setResult, setSetResult] = useState<string>('');

  // Array Examples
  const demonstrateArrays = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    // Filter even numbers
    const evens = numbers.filter(n => n % 2 === 0);
    
    // Map to squares
    const squares = numbers.map(n => n * n);
    
    // Reduce to sum
    const sum = numbers.reduce((acc, n) => acc + n, 0);
    
    // Find first number > 5
    const firstLarge = numbers.find(n => n > 5);
    
    // Check if all numbers are positive
    const allPositive = numbers.every(n => n > 0);
    
    // Check if any number is even
    const hasEven = numbers.some(n => n % 2 === 0);
    
    // Sort in descending order
    const sorted = [...numbers].sort((a, b) => b - a);
    
    // Remove duplicates
    const unique = [...new Set([1, 2, 2, 3, 3, 4])];
    
    setArrayResult(`
      Original: [${numbers.join(', ')}]
      Evens: [${evens.join(', ')}]
      Squares: [${squares.join(', ')}]
      Sum: ${sum}
      First > 5: ${firstLarge}
      All positive: ${allPositive}
      Has even: ${hasEven}
      Sorted desc: [${sorted.join(', ')}]
      Unique: [${unique.join(', ')}]
    `);
  };

  // Object Examples
  const demonstrateObjects = () => {
    const user = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      age: 30,
      isActive: true
    };
    
    // Object.keys()
    const keys = Object.keys(user);
    
    // Object.values()
    const values = Object.values(user);
    
    // Object.entries()
    const entries = Object.entries(user);
    
    // Object.assign() - merge objects
    const additionalInfo = { role: 'admin', department: 'IT' };
    const merged = Object.assign({}, user, additionalInfo);
    
    // Destructuring
    const { name, email, ...rest } = user;
    
    // Spread operator
    const updatedUser = { ...user, age: 31 };
    
    setObjectResult(`
      Original: ${JSON.stringify(user, null, 2)}
      Keys: [${keys.join(', ')}]
      Values: [${values.join(', ')}]
      Entries: ${JSON.stringify(entries, null, 2)}
      Merged: ${JSON.stringify(merged, null, 2)}
      Destructured name: ${name}, email: ${email}
      Rest: ${JSON.stringify(rest, null, 2)}
      Updated: ${JSON.stringify(updatedUser, null, 2)}
    `);
  };

  // Map Examples
  const demonstrateMaps = () => {
    const userMap = new Map();
    
    // Set values
    userMap.set('user1', { name: 'Alice', age: 25 });
    userMap.set('user2', { name: 'Bob', age: 30 });
    userMap.set('user3', { name: 'Charlie', age: 35 });
    
    // Get value
    const user1 = userMap.get('user1');
    
    // Check if key exists
    const hasUser1 = userMap.has('user1');
    
    // Delete key
    userMap.delete('user2');
    
    // Size
    const size = userMap.size;
    
    // Iterate
    const keys = Array.from(userMap.keys());
    const values = Array.from(userMap.values());
    
    // Clear
    const mapCopy = new Map(userMap);
    mapCopy.clear();
    
    setMapResult(`
      Original Map:
      ${Array.from(userMap.entries()).map(([key, value]) => 
        `${key}: ${JSON.stringify(value)}`
      ).join('\n')}
      
      Get user1: ${JSON.stringify(user1)}
      Has user1: ${hasUser1}
      Size after delete: ${size}
      Keys: [${keys.join(', ')}]
      Values: ${JSON.stringify(values, null, 2)}
      Cleared map size: ${mapCopy.size}
    `);
  };

  // Set Examples
  const demonstrateSets = () => {
    const numberSet = new Set([1, 2, 3, 4, 5]);
    
    // Add value
    numberSet.add(6);
    
    // Check if value exists
    const hasThree = numberSet.has(3);
    
    // Delete value
    numberSet.delete(2);
    
    // Size
    const size = numberSet.size;
    
    // Convert to array
    const array = Array.from(numberSet);
    
    // Set operations
    const set1 = new Set([1, 2, 3, 4]);
    const set2 = new Set([3, 4, 5, 6]);
    
    // Union
    const union = new Set([...set1, ...set2]);
    
    // Intersection
    const intersection = new Set(
      Array.from(set1).filter(x => set2.has(x))
    );
    
    // Difference
    const difference = new Set(
      Array.from(set1).filter(x => !set2.has(x))
    );
    
    setSetResult(`
      Original Set: [${Array.from(numberSet).join(', ')}]
      Has 3: ${hasThree}
      Size after delete: ${size}
      To array: [${array.join(', ')}]
      
      Set Operations:
      Set1: [${Array.from(set1).join(', ')}]
      Set2: [${Array.from(set2).join(', ')}]
      Union: [${Array.from(union).join(', ')}]
      Intersection: [${Array.from(intersection).join(', ')}]
      Difference (set1 - set2): [${Array.from(difference).join(', ')}]
    `);
  };

  // Algorithm Examples
  const demonstrateAlgorithms = () => {
    // Binary Search
    const binarySearch = (arr: number[], target: number): number => {
      let left = 0;
      let right = arr.length - 1;
      
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
      }
      return -1;
    };
    
    // Bubble Sort
    
    // Quick Sort
    const quickSort = (arr: number[]): number[] => {
      if (arr.length <= 1) return arr;
      
      const pivot = arr[Math.floor(arr.length / 2)];
      const left = arr.filter(x => x < pivot);
      const middle = arr.filter(x => x === pivot);
      const right = arr.filter(x => x > pivot);
      
      return [...quickSort(left), ...middle, ...quickSort(right)];
    };
    
    const testArray = [64, 34, 25, 12, 22, 11, 90];
    const sortedArray = quickSort(testArray);
    const searchResult = binarySearch(sortedArray, 22);
    
    console.log('Algorithm Results:', {
      original: testArray,
      sorted: sortedArray,
      searchIndex: searchResult
    });
  };

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Data Structure Examples
      </h1>

      {/* Array Examples */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Array Operations</h2>
        <button
          onClick={demonstrateArrays}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mb-4"
        >
          Demonstrate Array Methods
        </button>
        {arrayResult && (
          <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md text-sm overflow-auto">
            {arrayResult}
          </pre>
        )}
      </div>

      {/* Object Examples */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Object Operations</h2>
        <button
          onClick={demonstrateObjects}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 mb-4"
        >
          Demonstrate Object Methods
        </button>
        {objectResult && (
          <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md text-sm overflow-auto">
            {objectResult}
          </pre>
        )}
      </div>

      {/* Map Examples */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Map Operations</h2>
        <button
          onClick={demonstrateMaps}
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 mb-4"
        >
          Demonstrate Map Methods
        </button>
        {mapResult && (
          <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md text-sm overflow-auto">
            {mapResult}
          </pre>
        )}
      </div>

      {/* Set Examples */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Set Operations</h2>
        <button
          onClick={demonstrateSets}
          className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 mb-4"
        >
          Demonstrate Set Methods
        </button>
        {setResult && (
          <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md text-sm overflow-auto">
            {setResult}
          </pre>
        )}
      </div>

      {/* Algorithm Examples */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Algorithm Examples</h2>
        <button
          onClick={demonstrateAlgorithms}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Run Algorithms (check console)
        </button>
        <p className="text-sm text-gray-600 mt-2">
          Check the browser console to see algorithm results including binary search, bubble sort, and quick sort.
        </p>
      </div>
    </div>
  );
};

export default DataStructureExamples; 