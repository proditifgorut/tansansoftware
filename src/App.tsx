import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import HomePage from "@/pages/Home";
import PricingPage from "@/pages/PricingPage";
import PortfolioPage from "@/pages/PortfolioPage";
import DataAnalysisPage from "@/pages/DataAnalysisPage";
import DataMiningPage from "@/pages/DataMiningPage";
import DataSciencePage from "@/pages/DataSciencePage";
import MachineLearningPage from "@/pages/MachineLearningPage";
import PortfolioDetailPage from "@/pages/PortfolioDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="portfolio/:projectId" element={<PortfolioDetailPage />} />
          <Route path="data-analysis" element={<DataAnalysisPage />} />
          <Route path="data-mining" element={<DataMiningPage />} />
          <Route path="data-science" element={<DataSciencePage />} />
          <Route path="machine-learning" element={<MachineLearningPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
