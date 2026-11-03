import React from "react";
import { Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../hooks/useAuth";
import { supabase } from "../utils/supabase/client";

// Wrap any route element with this to make it admin-only.
// In your router setup:
//
//   <Route
//     path="/teilnehmer"
//     element={
//       <RequireAdmin>
//         <ParticipantsPage />
//       </RequireAdmin>
//     }
//   />
//
// Note: this guard is UX, not security. The real enforcement is the
// RLS policies in your database (see the migration). A non-admin who
// bypasses the router still gets nothing from the API.

const RequireAdmin = ({ children }) => {
  const { user, loading } = useAuth();

  // Fetch the caller's own role. This relies on an RLS policy that
  // lets members read their own row (same as the booking page uses).
  const { data: member, isLoading: memberLoading } = useQuery({
    queryKey: ["member", user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("Members")
        .select("role")
        .eq("id", user.id)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!user,
    staleTime: 5 * 60 * 1000, // role rarely changes; don't refetch constantly
  });

  if (loading || (!!user && memberLoading)) {
    return <div>Loading...</div>;
  }

  // Not logged in -> send to home (or your login route)
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Logged in but not an admin -> show feedback instead of a blank redirect
  if (member?.role !== "admin") {
    return (
      <div style={{ padding: "2em", textAlign: "center" }}>
        <h2>Kein Zugriff</h2>
        <p>Dieser Bereich ist nur für Administratoren.</p>
      </div>
    );
  }

  return children;
};

export default RequireAdmin;