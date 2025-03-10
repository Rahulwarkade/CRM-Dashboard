"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  increment,
  decrement,
  incrementByAmount,
  fetchDemoData,
} from "@/store/slices/demoSlice";

export default function DemoCounter() {
  const dispatch = useAppDispatch();
  const { value, status, data, error } = useAppSelector((state) => state.demo);

  useEffect(() => {
    // Fetch data when component mounts
    dispatch(fetchDemoData());
  }, [dispatch]);

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Redux Demo Counter</h2>

      <div className="mb-4">
        <p className="text-lg font-semibold">Count: {value}</p>
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => dispatch(decrement())}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(incrementByAmount(5))}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add 5
          </button>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Async Data Demo</h3>
        {status === "loading" && <p>Loading data...</p>}
        {status === "failed" && <p className="text-red-500">Error: {error}</p>}
        {status === "succeeded" && (
          <div>
            <p className="mb-2">Data loaded successfully:</p>
            {data.length > 0 ? (
              <ul className="list-disc pl-5">
                {data.map((item) => (
                  <li key={item.id}>
                    <strong>{item.title}</strong>: {item.description}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No data available</p>
            )}
          </div>
        )}
        <button
          onClick={() => dispatch(fetchDemoData())}
          className="mt-2 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Refresh Data
        </button>
      </div>
    </div>
  );
}
