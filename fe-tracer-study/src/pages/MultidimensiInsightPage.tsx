import DashboardLayout from "@/components/dashboard/DashboardLayout";

const MultidimensiInsightPage = () => {
  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-8rem)] rounded-lg overflow-hidden border border-border">
        <iframe
          src="http://localhost:3000/public/dashboard/c3db24a3-7878-4d57-9a2d-e3f53b299b06"
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
