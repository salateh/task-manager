import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div>
      <Link to="/">Список задач</Link>

      <Link to="/about">/ О проекте</Link>
    </div>
  );
}
