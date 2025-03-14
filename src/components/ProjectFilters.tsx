import React, { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "./ui/input";

interface ProjectFiltersProps {
  onFilterChange?: (filters: {
    category: string;
    year: string;
    search: string;
  }) => void;
  categories?: string[];
  years?: string[];
}

const ProjectFilters = ({
  onFilterChange = () => {},
  categories = [
    "All",
    "Short Film",
    "Documentary",
    "Animation",
    "Experimental",
  ],
  years = ["All", "2023", "2022", "2021", "2020"],
}: ProjectFiltersProps) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeYear, setActiveYear] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    onFilterChange({
      category,
      year: activeYear,
      search: searchQuery,
    });
  };

  const handleYearChange = (year: string) => {
    setActiveYear(year);
    onFilterChange({
      category: activeCategory,
      year,
      search: searchQuery,
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onFilterChange({
      category: activeCategory,
      year: activeYear,
      search: e.target.value,
    });
  };

  const clearFilters = () => {
    setActiveCategory("All");
    setActiveYear("All");
    setSearchQuery("");
    onFilterChange({
      category: "All",
      year: "All",
      search: "",
    });
  };

  return (
    <div className="w-full bg-white p-6 mb-12 border-b border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search projects..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-10 border-gray-200 font-light"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-3 py-1 text-sm font-light rounded-full transition-colors ${activeCategory === category ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => handleYearChange(year)}
                className={`px-3 py-1 text-sm font-light rounded-full transition-colors ${activeYear === year ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
              >
                {year}
              </button>
            ))}
          </div>

          {(activeCategory !== "All" ||
            activeYear !== "All" ||
            searchQuery) && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 px-3 py-1 text-sm font-light rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
            >
              <X className="h-3 w-3" /> Clear
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectFilters;
