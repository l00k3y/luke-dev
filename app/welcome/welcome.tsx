import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export const Welcome = () => {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <h1 className="text-2xl font-bold">Welcome to Our Application!</h1>
      <p className="mt-4 text-lg">Explore our features and enjoy your stay!</p>
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
        Get Started
      </button>
    </main>
  );
};
