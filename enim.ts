// Define the structure for the NewAssign type
interface NewAssign {
  title: string;
  score: number;
}

// Function to create a new assignment with title and score
function createNewAssign(title: string, score: number): NewAssign {
  return {
    title,
    score,
  };
}

// Create a new assignment using the createNewAssign function
const tsAssign: NewAssign = createNewAssign("Utility Types", 100);

// Output the assignment to the console (optional)
console.log(tsAssign);
