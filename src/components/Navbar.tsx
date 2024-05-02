import { signOut } from "firebase/auth";

import { Button } from "./ui/button";
import { auth } from "../db/firebase";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-3">
      <h3>Test App</h3>
      <Button onClick={() => signOut(auth)}>Logout</Button>
    </div>
  );
}
