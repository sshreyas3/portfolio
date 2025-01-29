import React from "react";

export function Footer() {
  return (
    <footer className="py-5 bg-colorSomeBlack text-center ">
      <p className="text-sm text-colorBronze">
        &copy; {new Date().getFullYear()} Shreyas. All rights reserved.
      </p>
    </footer>
  );
}
