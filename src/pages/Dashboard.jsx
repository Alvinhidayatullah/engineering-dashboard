import { useState } from 'react';
import InfoCard from "../components/Cards/InfoCard";

function Dashboard() {
  const [projects] = useState([
    { id: 1, name: 'Project Alpha', priority: 'High', progress: 75, location: 'Site A', status: 'On Track' },
    { id: 2, name: 'Project Beta', priority: 'Medium', progress: 45, location: 'Site B', status: 'Delayed' },
    { id: 3, name: 'Project Gamma', priority: 'Low', progress: 90, location: 'Site C', status: 'Completed' },
    { id: 4, name: 'Project Delta', priority: 'High', progress: 30, location: 'Site D', status: 'At Risk' },
    { id: 5, name: 'Project Epsilon', priority: 'Medium', progress: 60, location: 'Site E', status: 'On Track' },
  ]);

  const [locations] = useState([
    { name: 'Site A', projects: 12, active: 8 },
    { name: 'Site B', projects: 8, active: 5 },
    { name: 'Site C', projects: 15, active: 12 },
    { name: 'Site D', projects: 6, active: 3 },
    { name: 'Site E', projects: 10, active: 7 },
  ]);

  const overallProgress = 65.5;
  const deviation = 23.8;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">DASHBOARD</h1>
            <div className="flex items-center gap-4 mt-2">
              <span className="px-4 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                TECHNOLOGY & ENGINEERING
              </span>
              <span className="text-gray-600">SUMMARY</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Last Updated</p>
            <p className="text-lg font-semibold">Today, 15:30</p>
          </div>
        </div>
      </div>

      {/* Main Grid - 4 Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        
        {/* LEFT TOP: LIST PRIORITY PROJECT */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">LIST PRIORITY PROJECT</h2>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
              View All →
            </button>
          </div>
          
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      project.priority === 'High' ? 'bg-red-500' : 
                      project.priority === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}></div>
                    <h3 className="font-semibold text-gray-800">{project.name}</h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'On Track' ? 'bg-green-100 text-green-800' :
                    project.status === 'Delayed' ? 'bg-red-100 text-red-800' :
                    project.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <div className="mb-3">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        project.progress >= 70 ? 'bg-green-500' :
                        project.progress >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📅</span>
                    <span>Due: Dec 2024</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT TOP: PROJECT LOCATION */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">PROJECT LOCATION</h2>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
              View Map →
            </button>
          </div>
          
          <div className="space-y-4">
            {locations.map((location, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                    <span className="text-lg">📍</span>
                    {location.name}
                  </h3>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Active Projects</div>
                    <div className="text-lg font-bold">{location.active}/{location.projects}</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="w-3/4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Utilization</span>
                      <span>{Math.round((location.active / location.projects) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-blue-500"
                        style={{ width: `${(location.active / location.projects) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LEFT BOTTOM: Overall Progress */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Overall Progress</h2>
          
          <div className="flex flex-col items-center justify-center h-64">
            {/* Circular Progress */}
            <div className="relative w-48 h-48">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  fill="none" 
                  stroke="#e5e7eb" 
                  strokeWidth="8"
                />
                {/* Progress circle */}
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  fill="none" 
                  stroke="#3b82f6" 
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${overallProgress * 2.83} 283`}
                  transform="rotate(-90 50 50)"
                />
              </svg>
              
              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-4xl font-bold text-gray-800">{overallProgress}%</div>
                <div className="text-gray-600 mt-2">Completion</div>
              </div>
            </div>
            
            {/* Legend */}
            <div className="flex gap-6 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm text-gray-600">Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <span className="text-sm text-gray-600">Remaining</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">24</div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">16</div>
              <div className="text-sm text-gray-600">On Track</div>
            </div>
          </div>
        </div>

        {/* RIGHT BOTTOM: Deviasi & Overall Progress */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="grid grid-cols-2 gap-6 h-full">
            
            {/* Deviasi Card */}
            <div className="flex flex-col">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Deviasi</h2>
              <div className="flex-1 flex flex-col justify-center">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-red-600">{deviation}%</div>
                  <div className="text-gray-600 mt-2">Variance from Plan</div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Schedule Variance</span>
                      <span className="text-red-600">+12.5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="w-3/4 h-2 rounded-full bg-red-500"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Cost Variance</span>
                      <span className="text-yellow-600">+8.3%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="w-2/3 h-2 rounded-full bg-yellow-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Overall Progress Small Card */}
            <div className="flex flex-col">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Overall Progress</h2>
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="relative w-32 h-32 mb-4">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      fill="none" 
                      stroke="#e5e7eb" 
                      strokeWidth="8"
                    />
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      fill="none" 
                      stroke="#10b981" 
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray="251.2 251.2"
                      strokeDashoffset="251.2"
                      style={{ strokeDashoffset: 251.2 - (overallProgress * 2.512) }}
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-2xl font-bold text-gray-800">{overallProgress}%</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2">Monthly Target: 70%</div>
                  <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                    overallProgress >= 70 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {overallProgress >= 70 ? '✓ On Target' : '⚠ Below Target'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <InfoCard
          title="Budget Utilization"
          description="Current spending against allocated budget"
          icon="💰"
          bgColor="bg-blue-50"
        >
          <div className="mt-4">
            <div className="text-2xl font-bold text-blue-600">$2.4M / $3.0M</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="w-4/5 h-2 rounded-full bg-blue-500"></div>
            </div>
          </div>
        </InfoCard>

        <InfoCard
          title="Resource Allocation"
          description="Team members across projects"
          icon="👥"
          bgColor="bg-green-50"
        >
          <div className="mt-4">
            <div className="text-2xl font-bold text-green-600">142/180</div>
            <div className="text-sm text-gray-600">79% utilization</div>
          </div>
        </InfoCard>

        <InfoCard
          title="Risk Level"
          description="Projects with high risk status"
          icon="⚠️"
          bgColor="bg-yellow-50"
        >
          <div className="mt-4">
            <div className="text-2xl font-bold text-yellow-600">8 Projects</div>
            <div className="text-sm text-gray-600">Require attention</div>
          </div>
        </InfoCard>

        <InfoCard
          title="Upcoming Milestones"
          description="Next critical deadlines"
          icon="🎯"
          bgColor="bg-purple-50"
        >
          <div className="mt-4">
            <div className="text-2xl font-bold text-purple-600">14</div>
            <div className="text-sm text-gray-600">Next 30 days</div>
          </div>
        </InfoCard>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { action: 'Project Alpha milestone completed', user: 'John Doe', time: '2 hours ago', type: 'success' },
            { action: 'Risk identified in Project Beta', user: 'Jane Smith', time: '4 hours ago', type: 'warning' },
            { action: 'New project Delta approved', user: 'Bob Johnson', time: '1 day ago', type: 'info' },
            { action: 'Budget updated for Site C', user: 'Alice Brown', time: '2 days ago', type: 'info' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                activity.type === 'success' ? 'bg-green-100' :
                activity.type === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
              }`}>
                {activity.type === 'success' ? '✓' : activity.type === 'warning' ? '⚠' : 'ℹ'}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">{activity.action}</p>
                <p className="text-sm text-gray-600">By {activity.user} • {activity.time}</p>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;