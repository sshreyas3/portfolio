import React from "react";

export function Footer() {
  return (
    <footer className="py-5 bg-gray-900 text-center bg-opacity-50">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Shreyas. All rights reserved.
      </p>
    </footer>
  );
}
