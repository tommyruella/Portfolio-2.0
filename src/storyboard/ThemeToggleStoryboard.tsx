import React from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { ThemeProvider } from "../components/ThemeProvider";

export default function ThemeToggleStoryboard() {
  return (
    <div className="p-8 bg-background min-h-screen flex items-center justify-center">
      <ThemeProvider>
        <div className="bg-card p-6 rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-bold mb-6">Theme Toggle Component</h1>
          <div className="flex justify-center">
            <ThemeToggle />
          </div>
          <p className="mt-6 text-muted-foreground">
            Click the icon to toggle between light and dark mode
          </p>
        </div>
      </ThemeProvider>
    </div>
  );
}
