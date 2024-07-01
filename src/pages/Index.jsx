import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl font-bold">Welcome to Your App</h1>
      <p className="text-lg">This is a bare-bones application to get you started.</p>
      <Button onClick={() => navigate("/about")}>Go to About Page</Button>
    </div>
  );
};

export default Index;
