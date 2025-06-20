import { ArrowLeft, Link } from "lucide-react";

export const News = () => {
  return (
    <div className="min-h-screen">
      <div className="max-h-7xl mx-auto p-8">
        <div className="lg:w-2/3">
          <Link to="/news" className="inline-flex items-center">
            <ArrowLeft className="" />
            Назад
          </Link>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};
