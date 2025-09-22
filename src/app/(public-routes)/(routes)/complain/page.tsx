import ComplainFeatures from "../../components/complain/complain-features";
import ComplainForm from "../../components/complain/complain-form";
import ComplainHeader from "../../components/complain/complain-header";

export default function ComplainPage() {
  return (
    <div className="pt-24 pb-16 container mx-auto px-4 lg:px-8 max-w-7xl">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" /> */}

      <div className="relative z-10">
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <ComplainHeader />
              <ComplainForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ComplainFeatures />
            </div>
          </div>
        </div>
      </div>
  );
}
