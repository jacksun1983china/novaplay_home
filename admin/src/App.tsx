import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'sonner'
import AdminLayout from '@/components/layout/AdminLayout'
import LoginPage from '@/pages/login/LoginPage'
import DashboardPage from '@/pages/dashboard/DashboardPage'
import HallsPage from '@/pages/halls/HallsPage'
import HallFormPage from '@/pages/halls/HallFormPage'
import GamesPage from '@/pages/games/GamesPage'
import GameFormPage from '@/pages/games/GameFormPage'
import ConfigPage from '@/pages/config/ConfigPage'
import InquiriesPage from '@/pages/inquiries/InquiriesPage'
import TranslationsPage from '@/pages/translations/TranslationsPage'
import PartnershipsPage from '@/pages/partnerships/PartnershipsPage'
import ServicesPage from '@/pages/services/ServicesPage'
import { AuthProvider } from '@/hooks/useAuth'
import ProtectedRoute from '@/components/layout/ProtectedRoute'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Toaster position="top-right" richColors />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="halls" element={<HallsPage />} />
            <Route path="halls/create" element={<HallFormPage />} />
            <Route path="halls/:id/edit" element={<HallFormPage />} />
            <Route path="games" element={<GamesPage />} />
            <Route path="games/create" element={<GameFormPage />} />
            <Route path="games/:id/edit" element={<GameFormPage />} />
            <Route path="config" element={<ConfigPage />} />
            <Route path="partnerships" element={<PartnershipsPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="inquiries" element={<InquiriesPage />} />
            <Route path="translations" element={<TranslationsPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
