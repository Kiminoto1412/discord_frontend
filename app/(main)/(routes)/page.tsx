import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <p className="text-3xl text-blue-600">This is protected route.</p>
      <Button variant="default">Click me</Button>
    </div>
  );
}
