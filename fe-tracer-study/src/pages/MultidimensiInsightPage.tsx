import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const METABASE_URL = (import.meta.env.VITE_METABASE_URL || "http://localhost:3000").replace(/\/+$/, "");
const METABASE_DASHBOARD_ID = import.meta.env.VITE_METABASE_MULTIDIMENSI_DASHBOARD_ID || "c3db24a3-7878-4d57-9a2d-e3f53b299b06";
const METABASE_DASHBOARD_URL = `${METABASE_URL}/public/dashboard/${METABASE_DASHBOARD_ID}`;

const MultidimensiInsightPage = () => {
  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-8rem)] rounded-lg border border-border flex flex-col items-center justify-center gap-4 text-center p-8">
        <p className="text-muted-foreground max-w-md">
          Dashboard Multidimensi Insight dilayani dari Metabase lewat koneksi terpisah (bukan HTTPS),
          jadi tidak bisa ditampilkan langsung di dalam halaman ini. Buka di tab baru untuk melihatnya.
        </p>
        <Button asChild>
          <a href={METABASE_DASHBOARD_URL} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Buka Dashboard Metabase
          </a>
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default MultidimensiInsightPage;
