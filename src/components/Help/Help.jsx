"use client";
import HelpTabs from "./components/HelpTabs";

export default function Help() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Help</h1>
        </div>
      </div>
      <HelpTabs />
    </div>
  );
}
