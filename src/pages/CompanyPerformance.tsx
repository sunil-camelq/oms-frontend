// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   PieChart,
//   Pie,
//   Cell,
//   AreaChart,
//   Area
// } from 'recharts';

// import {
//   Download,
//   FileText,
//   TrendingUp,
//   DollarSign,
//   Briefcase,
//   Target
// } from 'lucide-react';

// // ========================== MOCK DATA =============================

// const revenueData = [
//   { month: 'Jan', revenue: 25000, expenses: 12000 },
//   { month: 'Feb', revenue: 30000, expenses: 15000 },
//   { month: 'Mar', revenue: 28000, expenses: 14000 },
//   { month: 'Apr', revenue: 35000, expenses: 17000 },
//   { month: 'May', revenue: 40000, expenses: 18000 },
//   { month: 'Jun', revenue: 42000, expenses: 19000 }
// ];

// const projectStatusData = [
//   { name: 'Completed', value: 45 },
//   { name: 'In Progress', value: 30 },
//   { name: 'Pending', value: 15 },
//   { name: 'On Hold', value: 10 }
// ];

// const employeePerformance = [
//   { department: 'Marketing', score: 90 },
//   { department: 'Sales', score: 85 },
//   { department: 'HR', score: 78 },
//   { department: 'Finance', score: 82 }
// ];

// const marketShareData = [
//   { month: 'Jan', share: 12 },
//   { month: 'Feb', share: 14 },
//   { month: 'Mar', share: 13 },
//   { month: 'Apr', share: 15 },
//   { month: 'May', share: 16 },
//   { month: 'Jun', share: 18 }
// ];

// // ==================================================================

// const CompanyPerformance = () => {
//   const COLORS = ['#10B981', '#3B82F6', '#F59E0B', '#EF4444'];

//   return (
//     <div className="space-y-6">
//       {/* PAGE HEADER */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold text-foreground">Company Performance</h1>
//           <p className="text-muted-foreground mt-1">
//             Monitor revenue, projects, employee productivity and market growth
//           </p>
//         </div>
//         <div className="flex space-x-3">
//           <Button variant="outline" className='hover:bg-violet-700'>
//             <Download className="h-4 w-4 mr-2" />
//             Export Data
//           </Button>
//           <Button variant='violet'>
//             <FileText className="h-4 w-4 mr-2" />
//             Generate Report
//           </Button>
//         </div>
//       </div>

//       {/* SUMMARY CARDS */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         {/* Revenue */}
//         <Card className="shadow-custom-md">
//           <CardContent className="p-6">
//             <div className="flex items-center space-x-3">
//               <div className="p-3 bg-gradient-primary rounded-2xl">
//                 <DollarSign className="h-6 w-6 text-white" />
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-muted-foreground">Revenue</p>
//                 <p className="text-2xl font-bold text-foreground">$42,000</p>
//                 <Badge variant="secondary" className="mt-1">+12% this quarter</Badge>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Profit Margin */}
//         <Card className="shadow-custom-md">
//           <CardContent className="p-6">
//             <div className="flex items-center space-x-3">
//               <div className="p-3 bg-gradient-success rounded-2xl">
//                 <TrendingUp className="h-6 w-6 text-white" />
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-muted-foreground">Profit Margin</p>
//                 <p className="text-2xl font-bold text-foreground">32%</p>
//                 <Badge variant="secondary" className="mt-1">+4% vs last quarter</Badge>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Active Projects */}
//         <Card className="shadow-custom-md">
//           <CardContent className="p-6">
//             <div className="flex items-center space-x-3">
//               <div className="p-3 bg-gradient-warning rounded-2xl">
//                 <Briefcase className="h-6 w-6 text-white" />
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-muted-foreground">Active Projects</p>
//                 <p className="text-2xl font-bold text-foreground">18</p>
//                 <Badge variant="secondary" className="mt-1">5 new this month</Badge>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Market Share */}
//         <Card className="shadow-custom-md">
//           <CardContent className="p-6">
//             <div className="flex items-center space-x-3">
//               <div className="p-3 bg-gradient-info rounded-2xl">
//                 <Target className="h-6 w-6 text-white" />
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-muted-foreground">Market Share</p>
//                 <p className="text-2xl font-bold text-foreground">18%</p>
//                 <Badge variant="secondary" className="mt-1">+2% growth</Badge>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* CHARTS */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Revenue vs Expenses */}
//         <Card className="shadow-custom-md">
//           <CardHeader>
//             <CardTitle>Revenue vs Expenses</CardTitle>
//             <CardDescription>Monthly comparison</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <ResponsiveContainer width="100%" height={300}>
//               <AreaChart data={revenueData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="month" />
//                 <YAxis />
//                 <Tooltip />
//                 <Area type="monotone" dataKey="revenue" stroke="#10B981" fill="#10B981" fillOpacity={0.5} />
//                 <Area type="monotone" dataKey="expenses" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.5} />
//               </AreaChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>

//         {/* Project Status Distribution */}
//         <Card className="shadow-custom-md">
//           <CardHeader>
//             <CardTitle>Project Status Distribution</CardTitle>
//             <CardDescription>All ongoing projects</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie
//                   data={projectStatusData}
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={90}
//                   label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                   dataKey="value"
//                 >
//                   {projectStatusData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Employee Performance Score */}
//         <Card className="shadow-custom-md">
//           <CardHeader>
//             <CardTitle>Employee Performance Score</CardTitle>
//             <CardDescription>By department</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={employeePerformance} layout="vertical">
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis type="number" domain={[0, 100]} />
//                 <YAxis dataKey="department" type="category" />
//                 <Tooltip />
//                 <Bar dataKey="score" fill="#3B82F6" radius={[0, 4, 4, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>

//         {/* Market Share Growth */}
//         <Card className="shadow-custom-md">
//           <CardHeader>
//             <CardTitle>Market Share Growth</CardTitle>
//             <CardDescription>Monthly progress</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={marketShareData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="month" />
//                 <YAxis domain={[0, 20]} />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="share" stroke="#8B5CF6" strokeWidth={2} />
//               </LineChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default CompanyPerformance;


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';   // ✅ Import navigation hook

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts';

import {
  Download,
  FileText,
  TrendingUp,
  DollarSign,
  Briefcase,
  Target
} from 'lucide-react';

// ========================== MOCK DATA =============================
const revenueData = [
  { month: 'Jan', revenue: 25000, expenses: 12000 },
  { month: 'Feb', revenue: 30000, expenses: 15000 },
  { month: 'Mar', revenue: 28000, expenses: 14000 },
  { month: 'Apr', revenue: 35000, expenses: 17000 },
  { month: 'May', revenue: 40000, expenses: 18000 },
  { month: 'Jun', revenue: 42000, expenses: 19000 }
];

const projectStatusData = [
  { name: 'Completed', value: 45 },
  { name: 'In Progress', value: 30 },
  { name: 'Pending', value: 15 },
  { name: 'On Hold', value: 10 }
];

const employeePerformance = [
  { department: 'IT', score: 90 },
  { department: 'Sales', score: 85 },
  { department: 'HR', score: 78 },
  { department: 'Finance', score: 82 }
];

const marketShareData = [
  { month: 'Jan', share: 12 },
  { month: 'Feb', share: 14 },
  { month: 'Mar', share: 13 },
  { month: 'Apr', share: 15 },
  { month: 'May', share: 16 },
  { month: 'Jun', share: 18 }
];
// ==================================================================

const CompanyPerformance = () => {
  const COLORS = ['#10B981', '#3B82F6', '#F59E0B', '#EF4444'];

  const navigate = useNavigate(); // ✅ Initialize navigation

  const handleExportNavigation = () => {
    navigate('/exportdata'); // ✅ Navigate to ExportData page
  };

  return (
    <div className="space-y-6">
      {/* PAGE HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Company Performance</h1>
          <p className="text-muted-foreground mt-1">
            Monitor revenue, projects, employee productivity and market growth
          </p>
        </div>
        <div className="flex space-x-3">
          {/* ✅ Export Data button now navigates */}
          <Button variant="outline" className='hover:bg-violet-700' onClick={handleExportNavigation}>
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
          <Button variant='violet'>
            <FileText className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Revenue */}
        <Card className="shadow-custom-md">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-primary rounded-2xl">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Revenue</p>
                <p className="text-2xl font-bold text-foreground">$42,000</p>
                <Badge variant="secondary" className="mt-1">+12% this quarter</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profit Margin */}
        <Card className="shadow-custom-md">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-success rounded-2xl">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Profit Margin</p>
                <p className="text-2xl font-bold text-foreground">32%</p>
                <Badge variant="secondary" className="mt-1">+4% vs last quarter</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Projects */}
        <Card className="shadow-custom-md">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-warning rounded-2xl">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Projects</p>
                <p className="text-2xl font-bold text-foreground">18</p>
                <Badge variant="secondary" className="mt-1">5 new this month</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Market Share */}
        <Card className="shadow-custom-md">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-info rounded-2xl">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Market Share</p>
                <p className="text-2xl font-bold text-foreground">18%</p>
                <Badge variant="secondary" className="mt-1">+2% growth</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue vs Expenses */}
        <Card className="shadow-custom-md">
          <CardHeader>
            <CardTitle>Revenue vs Expenses</CardTitle>
            <CardDescription>Monthly comparison</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stroke="#10B981" fill="#10B981" fillOpacity={0.5} />
                <Area type="monotone" dataKey="expenses" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.5} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Project Status Distribution */}
        <Card className="shadow-custom-md">
          <CardHeader>
            <CardTitle>Project Status Distribution</CardTitle>
            <CardDescription>All ongoing projects</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={projectStatusData}
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  dataKey="value"
                >
                  {projectStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Employee Performance Score */}
        <Card className="shadow-custom-md">
          <CardHeader>
            <CardTitle>Employee Performance Score</CardTitle>
            <CardDescription>By department</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={employeePerformance} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="department" type="category" />
                <Tooltip />
                <Bar dataKey="score" fill="#3B82F6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Market Share Growth */}
        <Card className="shadow-custom-md">
          <CardHeader>
            <CardTitle>Market Share Growth</CardTitle>
            <CardDescription>Monthly progress</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={marketShareData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 20]} />
                <Tooltip />
                <Line type="monotone" dataKey="share" stroke="#8B5CF6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompanyPerformance;
