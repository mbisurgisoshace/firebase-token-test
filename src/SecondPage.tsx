import { Navigate, useNavigate } from "react-router-dom";

import { useAuth } from "./auth/AuthProvider";
import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription,
} from "./components/ui/card";
import Navbar from "./components/Navbar";
import { useStore } from "./store/useStore";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";

function SecondPage() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { address, firstname, lastname } = useStore();

  if (!currentUser) return <Navigate to={"/login"} replace />;

  return (
    <div className="h-full flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Populated Data</CardTitle>
            <CardDescription>Here is the data you entered</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="firstname">First Name</Label>
              <p className="text-blue-500">{firstname}</p>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastname">Last Name</Label>
              <p className="text-blue-500">{lastname}</p>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address">Address</Label>
              <p className="text-blue-500">{address}</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={() => navigate("/")}>
              Back
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default SecondPage;
