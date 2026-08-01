export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <img src="/images/logo.svg" alt="" className="h-8 w-auto animate-spin" />
        <div className="w-6 h-6 border-2 border-[#FFDE02]/20 border-t-[#FFDE02] rounded-full animate-spin" />
      </div>
    </div>
  );
}
