import React from "react";
import GraphWithTable from "../components/GraphWithTable";
import PieChart from "../components/PieChart";
import {
  HomeIcon,
  GlobeAltIcon,
  CalendarIcon,
  DocumentIcon,
  PhotographIcon,
  LinkIcon,
} from "@heroicons/react/outline";

const Dashboard = () => {
  const navItems = [
    { name: "Home", icon: <HomeIcon className="h-4 w-4 mr-1 inline-block" /> },
    {
      name: "Interface",
      icon: <GlobeAltIcon className="h-4 w-4 mr-1 inline-block" />,
    },
    {
      name: "Components",
      icon: <CalendarIcon className="h-4 w-4 mr-1 inline-block" />,
    },
    {
      name: "Pages",
      icon: <DocumentIcon className="h-4 w-4 mr-1 inline-block" />,
    },
    { name: "Forms", icon: <LinkIcon className="h-4 w-4 mr-1 inline-block" /> },
    {
      name: "Gallery",
      icon: <PhotographIcon className="h-4 w-4 mr-1 inline-block" />,
    },
    {
      name: "Documentation",
      icon: <DocumentIcon className="h-4 w-4 mr-1 inline-block" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header with logo and navigation */}
      <header className="bg-white shadow px-6 py-4 flex items-center pl-10 pr-10 justify-between">
        <div className="flex items-center">
          <img src="/Tabler.png" alt="Tabler Logo" className="h-6 w-7 mr-2" />
          <h1 className="text-xl font-bold">Tabler</h1>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-blue-500 p-2 font-medium rounded-md border-2 border-blue-500">
            Source code
          </button>
          <div className="flex items-center">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
            <span className="ml-2 text-sm font-medium text-gray-700">
              Jane Pearson{" "}
              <span className="text-gray-500">(Administrator)</span>
            </span>
          </div>
        </div>
      </header>

      <div className="bg-white border-t-2 py-2 border-b-2 pl-10">
        {/* <nav className="flex space-x-6">
          {[
            "Home",
            "Interface",
            "Components",
            "Pages",
            "Forms",
            "Gallery",
            "Documentation",
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </nav> */}

        <nav>
          <div className="container">
            <ul className="flex space-x-8 py-1 text-sm font-thin text-gray-500">
              {navItems.map((item, index) => (
                <li key={index} className="flex items-center space-x-1">
                  <a href="#" className="hover:text-blue-500 flex items-center">
                    {item.icon}
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* Main Dashboard Content */}
      <div className="pl-10 pr-10 py-6">
        {/* Top Metrics */}

        <div className="grid grid-cols-6 gap-4 mb-6">
          {[
            { label: "New Tickets", value: "43", change: "+6%" },
            { label: "Closed Today", value: "17", change: "-3%" },
            { label: "New Replies", value: "7", change: "+9%" },
            { label: "Followers", value: "27.3k", change: "+3%" },
            { label: "Daily Earnings", value: "$95", change: "-2%" },
            { label: "Products", value: "621", change: "-1%" },
          ].map((item, index) => (
            <div
              key={index}
              className="relative bg-white shadow rounded p-4 text-center border border-gray-300"
            >
              <h4 className="text-sm font-medium">{item.label}</h4>
              <p className="stext-2xl font-bold">{item.value}</p>
              <p
                className={`absolute top-2 right-2 text-sm ${
                  item.change.startsWith("+")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {item.change}
              </p>
            </div>
          ))}
        </div>

        {/* Development Activity */}
        <div className="flex flex-row gap-4">
          {/*Graph with Table */}
          <div className="basis-1/2 border border-gray-300">
            <GraphWithTable />
          </div>

          <div className="basis-1/2">
            <div className="text-center basis-1/2 border border-gray-300">
              <p className="bg-blue-100 p-4 rounded">
                Read our{" "}
                <span className="text-blue-600 font-bold">documentation</span>{" "}
                with code samples.
              </p>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-2 gap-6 mt-4">
              <PieChart
                title="Chart Title"
                data={[37, 43, 20]}
                colors={["#34D399", "#60A5FA", "#FBBF24"]}
              />
              <PieChart
                title="Chart Title"
                data={[47.4, 33.1, 9.5, 10]}
                colors={["#3B82F6", "#9CA3AF", "#F472B6", "#34D399"]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
