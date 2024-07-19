import { useState } from "react";

const demoIngredients = ["Apple", "Cinnamon"];

export default function HomePage() {
  const [reason, setReason] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  async function generatePairingReason() {
    setIsLoading(true);
    setError(false);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(demoIngredients),
      });

      if (response.ok) {
        const generatedReason = await response.json();
        setReason(generatedReason);
      } else {
        const error = await response.json();
        console.error("Error from server:", error.message);

        setError(error);
      }
    } catch (error) {
      console.error("Network or unexpected error:", error);

      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <h1>Flavour Pairing Reason Generator</h1>
      <button
        type="button"
        onClick={generatePairingReason}
        disabled={isLoading}
      >
        Click here to generate a reason for the pair{" "}
        {demoIngredients.join(" and ")}
      </button>
      {reason && <p>{reason}</p>}
      {error && <p>{error.message}</p>}
    </div>
  );
}
