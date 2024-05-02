import { Navigate, useNavigate } from "react-router-dom";

import "./App.css";
import {
  Card,
  CardTitle,
  CardHeader,
  CardFooter,
  CardContent,
  CardDescription,
} from "./components/ui/card";
import { useAuth } from "./auth/AuthProvider";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { useStore } from "./store/useStore";
import Navbar from "./components/Navbar";

function App() {
  const {
    address,
    setAddress,
    firstname,
    setFirstname,
    lastname,
    setLastname,
  } = useStore();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  if (!currentUser) return <Navigate to={"/login"} replace />;

  return (
    <div className="h-full flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Welcome</CardTitle>
            <CardDescription>
              Enter your data and go to next page
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="firstname">First Name</Label>
              <Input
                id="firstname"
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastname">Last Name</Label>
              <Input
                id="lastname"
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={() => navigate("/second")}>
              Next
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default App;
