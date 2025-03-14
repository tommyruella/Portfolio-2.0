import React from "react";
import PageTransition from "../components/PageTransition";

export default function PageTransitionStoryboard() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Page Transition Component</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4">
          This is a demonstration of the page transition component.
        </p>
        <p>
          The actual transition effect will be visible when navigating between
          pages in the application.
        </p>
      </div>
    </div>
  );
}
