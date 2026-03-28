import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./i18n/LanguageContext";
import { SiteDataProvider } from "./contexts/SiteDataContext";
import Home from "./pages/Home";
import GamesListPage from "./pages/GamesListPage";
import GameDetailPage from "./pages/GameDetailPage";
import HallsPage from "./pages/HallsPage";
import HallDetailPage from "./pages/HallDetailPage";
import TurnkeyPage from "./pages/TurnkeyPage";
import FaqPage from "./pages/FaqPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/games" component={GamesListPage} />
      <Route path="/games/:slug" component={GameDetailPage} />
      <Route path="/halls" component={HallsPage} />
      <Route path="/halls/:slug" component={HallDetailPage} />
      <Route path="/turnkey" component={TurnkeyPage} />
      <Route path="/faq" component={FaqPage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <LanguageProvider>
          <SiteDataProvider>
            <TooltipProvider>
              <Toaster />
              <Router />
            </TooltipProvider>
          </SiteDataProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
