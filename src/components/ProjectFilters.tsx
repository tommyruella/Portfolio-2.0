import React, { useState } from "react";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Search, Filter, X } from "lucide-react";
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
  const [showFilters, setShowFilters] = useState(false);

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
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search projects..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-10"
          />
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            Filters
          </Button>

          {(activeCategory !== "All" ||
            activeYear !== "All" ||
            searchQuery) && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="flex items-center gap-2 text-red-500 hover:text-red-700"
            >
              <X className="h-4 w-4" />
              Clear
            </Button>
          )}
        </div>
      </div>

      {showFilters && (
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">Category</h3>
            <Tabs
              defaultValue={activeCategory}
              onValueChange={handleCategoryChange}
            >
              <TabsList className="flex flex-wrap h-auto bg-muted/50">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className={`${activeCategory === category ? "bg-primary text-primary-foreground" : ""}`}
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Year</h3>
            <div className="flex flex-wrap gap-2">
              {years.map((year) => (
                <Badge
                  key={year}
                  variant={activeYear === year ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => handleYearChange(year)}
                >
                  {year}
                </Badge>
              ))}
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <Button
              size="sm"
              variant="secondary"
              onClick={() => setShowFilters(false)}
            >
              Apply Filters
            </Button>
          </div>
        </div>
      )}

      {(activeCategory !== "All" || activeYear !== "All") && (
        <div className="mt-4 flex flex-wrap gap-2">
          <p className="text-sm text-muted-foreground">Active filters:</p>
          {activeCategory !== "All" && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {activeCategory}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => handleCategoryChange("All")}
              />
            </Badge>
          )}
          {activeYear !== "All" && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {activeYear}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => handleYearChange("All")}
              />
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectFilters;
