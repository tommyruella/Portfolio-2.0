import React from "react";
import CustomCursor from "../components/CustomCursor";

export default function CustomCursorStoryboard() {
  return (
    <div className="p-8 bg-white min-h-screen flex flex-col items-center justify-center">
      <CustomCursor color="#6366f1" />

      <h1 className="text-2xl font-bold mb-8">Custom Cursor Component</h1>

      <div className="max-w-md text-center mb-8">
        <p className="mb-4">
          Move your mouse around to see the custom cursor in action.
        </p>
        <p className="text-gray-500">
          The cursor changes when hovering over interactive elements.
        </p>
      </div>

      <div className="flex flex-col gap-4 items-center">
        <button className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors">
          Hover over me
        </button>

        <a href="#" className="text-indigo-500 hover:underline">
          I'm a link
        </a>
      </div>
    </div>
  );
}
