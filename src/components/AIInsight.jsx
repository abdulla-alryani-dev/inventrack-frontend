import React, { useEffect, useState } from "react";
import api from "../api/axiosClient";

function AIInsight() {
  const [insight, setInsight] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchInsight = async () => {
      try {
        const res = await api.get("/ai/insight"); // Mock or real endpoint
        setInsight(res.data.insight);
        setSuggestions(res.data.suggestions || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchInsight();
  }, []);

  return (
    <div className="bg-yellow-100 p-4 rounded shadow mb-6">
      <h2 className="font-bold text-lg mb-2">AI Insight</h2>
      <p>{insight || "No insights yet."}</p>
      {suggestions.length > 0 && (
        <ul className="mt-2 list-disc list-inside">
          {suggestions.map((s, idx) => (
            <li key={idx}>
              {s.product} → reorder {s.suggest_order} units
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AIInsight;
