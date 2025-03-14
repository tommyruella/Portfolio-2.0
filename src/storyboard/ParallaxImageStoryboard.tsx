import React from "react";
import ParallaxImage from "../components/ParallaxImage";

export default function ParallaxImageStoryboard() {
  return (
    <div className="min-h-screen bg-white">
      <div className="p-8 mb-8">
        <h1 className="text-2xl font-bold mb-4">Parallax Image Component</h1>
        <p className="text-gray-500 mb-8">
          Scroll down to see the parallax effect in action.
        </p>
      </div>

      <div className="h-[50vh] w-full mb-16">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=90"
          alt="Parallax demo 1"
          speed={0.5}
        />
      </div>

      <div className="p-8 mb-8">
        <h2 className="text-xl font-semibold mb-4">Different Speed Values</h2>
        <p className="text-gray-500 mb-8">
          The parallax effect can be adjusted with different speed values.
        </p>
      </div>

      <div className="h-[50vh] w-full mb-16">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=90"
          alt="Parallax demo 2"
          speed={0.2}
        />
      </div>

      <div className="p-8 mb-8">
        <h2 className="text-xl font-semibold mb-4">Faster Parallax</h2>
        <p className="text-gray-500 mb-8">
          A higher speed value creates a more dramatic effect.
        </p>
      </div>

      <div className="h-[50vh] w-full">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?w=1200&q=90"
          alt="Parallax demo 3"
          speed={0.8}
        />
      </div>
    </div>
  );
}
