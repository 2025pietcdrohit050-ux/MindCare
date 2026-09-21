// Central API base URL.
// Set VITE_API_URL in production when the frontend and API use different hosts.
// The default keeps local development working with the bundled Express server.
export const API_BASE = (
  import.meta.env.VITE_API_URL || "http://localhost:5000"
).replace(/\/$/, "");

export function apiUrl(path) {
  return `${API_BASE}${path.startsWith("/") ? path : `/${path}`}`;
}
