// src/App.js
import React, { useEffect, useState } from "react";
import { events } from "./api/axios";

function App() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    events().then((json) => {
      setMatches(json);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Upcoming Premier League Matches
      </h1>

      {loading ? (
        <p className="text-center text-gray-600">Loading matches...</p>
      ) : matches.length === 0 ? (
        <p className="text-center text-red-500">No upcoming matches found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-2 px-4 text-left">#</th>
                <th className="py-2 px-4 text-left">Match</th>
                <th className="py-2 px-4 text-left">Home Team</th>
                <th className="py-2 px-4 text-left">Away Team</th>
                <th className="py-2 px-4 text-left">Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((match, index) => (
                <tr key={match.id} className="border-t border-gray-200 hover:bg-gray-50">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4 font-semibold text-gray-800">{match.startevent}</td>
                  <td className="py-2 px-4 text-gray-700">{match.strhometeam}</td>
                  <td className="py-2 px-4 text-gray-700">{match.startawayteam}</td>
                  <td className="py-2 px-4 text-gray-600">
                    {new Date(match.dateevent + "T" + match.starttime).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
