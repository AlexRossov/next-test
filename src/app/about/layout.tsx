import React from "react";

export default function AboutLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h3>AboutLayout</h3>
      {children}
    </div>
  );
}