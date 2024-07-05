import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-900 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Mobile App</h1>
        <p className="text-lg mb-6">Experience the best features and seamless performance.</p>
        <Button variant="primary" size="lg">Get Started</Button>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-700">
              <CardHeader>
                <CardTitle>Feature One</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover the amazing feature one that enhances your experience.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-700">
              <CardHeader>
                <CardTitle>Feature Two</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore feature two for better productivity and efficiency.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-700">
              <CardHeader>
                <CardTitle>Feature Three</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Feature three offers you the best tools to manage your tasks.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800">
              <CardHeader className="flex items-center space-x-4">
                <Avatar className="w-12 h-12" src="/placeholder.svg" alt="User 1" />
                <div>
                  <h3 className="text-lg font-semibold">User One</h3>
                  <p className="text-sm text-gray-400">CEO, Company</p>
                </div>
              </CardHeader>
              <CardContent>
                <p>"This app has transformed the way I work. Highly recommended!"</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800">
              <CardHeader className="flex items-center space-x-4">
                <Avatar className="w-12 h-12" src="/placeholder.svg" alt="User 2" />
                <div>
                  <h3 className="text-lg font-semibold">User Two</h3>
                  <p className="text-sm text-gray-400">Manager, Business</p>
                </div>
              </CardHeader>
              <CardContent>
                <p>"A game-changer in the industry. Exceptional features and support."</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800">
              <CardHeader className="flex items-center space-x-4">
                <Avatar className="w-12 h-12" src="/placeholder.svg" alt="User 3" />
                <div>
                  <h3 className="text-lg font-semibold">User Three</h3>
                  <p className="text-sm text-gray-400">Developer, Tech</p>
                </div>
              </CardHeader>
              <CardContent>
                <p>"The best app I've used in years. It has everything I need."</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-800 text-white text-center">
        <p>&copy; 2023 Mobile App. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-gray-400">Facebook</a>
          <a href="#" className="hover:text-gray-400">Twitter</a>
          <a href="#" className="hover:text-gray-400">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;