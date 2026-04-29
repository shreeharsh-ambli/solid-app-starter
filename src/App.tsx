import type { Component } from 'solid-js';
import { toast } from "solid-sonner"
import { Button } from '../~/components/ui/button';
import { Toaster } from '../~/components/ui/sonner';

const App: Component = () => {
  return (
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <Button
        onClick={() =>
          toast("Title", {
            description: "Description goes here.",
            action: {
              label: "Dismiss",
              onClick: () => console.log("Undo")
            }
          })
        }
      >
        Click Me!
      </Button>
      <Toaster />
    </div>
  );
};

export default App;
