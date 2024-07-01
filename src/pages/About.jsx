import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>About Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            Welcome to our application! We are dedicated to providing the best
            experience for our users. Our team works hard to continuously
            improve and bring new features to the platform.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;