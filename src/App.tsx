import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DashboardLayout } from "./components/Layout/Layout"; // Sidebar + Header layout
import Login from "./pages/Login";
import Dashboard from "./components/Layout/Dashboard";
import Employees from "./pages/Employees";
import Tasks from "./pages/Tasks";
import Attendance from "./pages/Attendance";
import Leave from "./pages/Leave";
import Departments from "./pages/Departments";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Payroll from "./pages/Payroll";
import Recruitment from "./pages/Recruitment";
import CompanyPerformance from "./pages/CompanyPerformance";
import ProjectStatus from "./pages/ProjectStatus";
import AssetManagement from "./pages/AssetManagement";
import Profile from "./pages/Profile";
import ExportData from "./pages/ExportData";
import ForgotPassword from "./pages/ForgotPassword";
import OtpVerification from "./pages/OtpVerification";
import OtpSuccess from "./pages/OtpSuccess";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/otp-success" element={<OtpSuccess />} />

          {/* Dashboard routes with layout */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/companyperformance" element={<CompanyPerformance />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/projectstatus" element={<ProjectStatus />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/leave" element={<Leave />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/exportdata" element={<ExportData />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/assetmanagement" element={<AssetManagement />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
