import usePageMetadata from '../hooks/usePageMetadata';

const Dashboard = () => {
  usePageMetadata({
    title: "Dashboard | Power BI Portal",
    description: "View and manage your Power BI dashboards and reports"
  });

  return (
    <div className="bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to your dashboard!
          </h2>
          <p className="text-muted-foreground">
            You have successfully logged in with the test credentials.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard 