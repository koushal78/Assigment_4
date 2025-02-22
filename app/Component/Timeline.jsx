import React from "react";

const timelineData = [
  { year: "2014", content: "After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all." },
  { year: "2015", content: "Better Mortgage funds its first mortgage loan entirely online (without a single phone call!)." },
  { year: "2016", content: "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors." },
  { year: "2017", content: "Company expands operations and continues to innovate in the mortgage industry Launches new AI-driven mortgage approval system." },
  { year: "2018", content: "Launches new AI-driven mortgage approval system Launches new AI-driven mortgage approval system ." },
  { year: "2019", content: "Company hits major funding milestone and expands globally Launches new AI-driven mortgage approval systemLaunches new AI-driven mortgage approval system." },
  { year: "2020", content: "Launches new digital mortgage platform with enhanced features Launches new AI-driven mortgage approval systemLaunches new AI-driven mortgage approval system." },
  { year: "2021", content: "Crosses 1 million customers served Launches new AI-driven mortgage approval systemLaunches new AI-driven mortgage approval system." },
  { year: "2022", content: "Introduces automated underwriting system Launches new AI-driven mortgage approval systemLaunches new AI-drive Launches new AI-driven mortgage approval systemLaunches new AI-driven mortgage approval system n mortgage approval system." },
  { year: "2023", content: "Celebrates 10 years of innovation in home financing Launches new AI-driven mortgage approval systemLaunches new AI-driven mortgage approval systemLaunches new AI-driven mortgage approval system." },
];

const Timeline = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-10">Company Timeline</h2>
      
      {/* Timeline Container */}
      <div className="relative before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-gray-300">
        {timelineData.map((event, index) => (
          <div key={index} className="flex items-center w-full mb-10 relative">
            {/* Left Side (Even Index) */}
            {index % 2 === 0 ? (
              <>
                <div className="w-1/2 text-right mr-8 pr-6">
                  <div className="bg-gray-200 shadow-lg p-4 rounded-lg">
                    <p className="text-gray-600">{event.content}</p>
                  </div>
                </div>
                <div className="w-0 flex justify-center items-center relative">
                  <div className="w-4 h-4 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                  <div className="absolute -left-12 bg-green-700 text-white font-semibold text-lg py-1 px-4 rounded-full">
                    {event.year}
                  </div>
                </div>
                <div className="w-1/2"></div>
              </>
            ) : (
              /* Right Side (Odd Index) */
              <>
                <div className="w-1/2"></div>
                <div className="w-0 flex justify-center items-center relative">
                  <div className="w-4 h-4 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                  <div className="absolute -right-12 bg-green-700 text-white font-semibold text-lg py-1 px-4 rounded-full">
                    {event.year}
                  </div>
                </div>
                <div className="w-1/2 text-left pl-6 ml-8">
                  <div className="bg-gray-200 shadow-lg p-4 rounded-lg">
                    <p className="text-gray-600 mx-4">{event.content}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
