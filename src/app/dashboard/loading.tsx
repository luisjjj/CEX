export default function DashboardLoading() {
  return (
    <div className="flex items-center justify-center h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <img src="/images/logo.svg" alt="" className="h-8 w-auto animate-spin" />
        <div className="w-6 h-6 border-2 border-[#FFDE02]/20 border-t-[#FFDE02] rounded-full animate-spin" />
      </div>
    </div>
  );
}
