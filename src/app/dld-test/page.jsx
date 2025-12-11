"use client";

import { useEffect, useState } from "react";

export default function DldDevelopersTestPage() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/dld-developers");
        if (!res.ok) throw new Error("Failed to load data");
        const data = await res.json();

        // just take first 50 rows so you don’t explode your UI
        setRows(data.slice(0, 50));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div style={{ padding: 24 }}>Loading…</div>;
  if (error) return <div style={{ padding: 24 }}>Error: {error}</div>;
  if (!rows.length) return <div style={{ padding: 24 }}>No data.</div>;

  const columns = Object.keys(rows[0]);

  return (
    <div style={{ padding: 24 }}>
      <h1>DLD Developers – Test Table</h1>
      <p>Showing {rows.length} rows (first rows from dataset).</p>

      <div
        style={{
          maxHeight: "70vh",
          overflow: "auto",
          border: "1px solid #ddd",
          marginTop: 16,
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: 13,
          }}
        >
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  style={{
                    position: "sticky",
                    top: 0,
                    background: "#f5f5f5",
                    borderBottom: "1px solid #ddd",
                    padding: "8px 6px",
                    textAlign: "left",
                    whiteSpace: "nowrap",
                  }}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {columns.map((col) => (
                  <td
                    key={col}
                    style={{
                      borderBottom: "1px solid #eee",
                      padding: "6px 6px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {row[col]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
