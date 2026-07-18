import DashboardLayout from "@/components/dashboard/DashboardLayout";

const METABASE_URL = import.meta.env.VITE_METABASE_URL || "http://localhost:3000";
const METABASE_DASHBOARD_ID = import.meta.env.VITE_METABASE_MULTIDIMENSI_DASHBOARD_ID || "c3db24a3-7878-4d57-9a2d-e3f53b299b06";

const MultidimensiInsightPage = () => {
  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-8rem)] rounded-lg overflow-hidden border border-border">
        <iframe
          src={`${METABASE_URL}/public/dashboard/${METABASE_DASHBOARD_ID}`}
          width="100%"
          height="100%"
          frameBorder="0"
          title="Multidimensi Insight"
        />
      </div>
    </DashboardLayout>
  );
};

export default MultidimensiInsightPage;
