import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-customPurple">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((project) => (
            <Card
              key={project}
              className="bg-customYellow rounded-lg shadow-md p-5"
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  className="font-bold mb-2 text-customPurple"
                >
                  Hotel Configuration System
                </Typography>
                <Typography variant="body2" className="text-customRose">
                  A description of the project showcasing the key features and
                  technologies used.
                </Typography>
                <a
                  href="#"
                  className="text-customPurple hover:underline mt-3 block"
                >
                  View Details
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
