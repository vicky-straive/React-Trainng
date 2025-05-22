import React from "react";
import { Dialog } from "primereact/dialog";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import data from "../../servicesess/data.json";

export default function DialogBox({ movieId, onClose }) {
  if (!movieId) return null;
  const movie = data.find((m) => String(m.id) === String(movieId));

  return (
    <Dialog
      header={movie ? movie.title : "Not found"}
      visible={!!movieId}
      maximizable
      style={{ width: "50vw" }}
      onHide={onClose}
    >
      {!movie && <div style={{ color: "red" }}>Movie not found.</div>}
      {movie && (
        <div className="flex flex-column gap-4">
          <div className="flex justify-content-center">
           <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <Card>
            <div className="grid">
              <div className="col-4">
                <div className="text-left p-3 border-round-sm bg-primary font-bold">
                  Genre:
                  <span className="font-normal ml-2">
                    {movie.genre}
                  </span>
                </div>
              </div>
              <div className="col-4">
                <div className="text-left p-3 border-round-sm bg-primary font-bold">
                  Year:
                  <span className="font-normal ml-2">
                    {movie.year}
                  </span>
                </div>
              </div>
              <div className="col-14">
                <div className="text-left p-3 border-round-sm bg-primary font-bold">
                  Description:
                  <span className="font-normal ml-2">
                    {movie.description}
                  </span>
                </div>
              </div>
              <div className="col-4">
                <div className="text-left p-3 border-round-sm bg-primary font-bold">
                  Rating:
                  <span className="font-normal ml-2">
                    {movie.rating}
                  </span>
                </div>
              </div>
              <div className="col-4">
                <div className="text-left p-3 border-round-sm bg-primary font-bold">
                  Type:
                  <span className="font-normal ml-2">
                    {movie.type}
                  </span>
                </div>
              </div>
              <div className="col-4">
                <div className="text-left p-3 border-round-sm bg-primary font-bold">
                  Cast:
                  <span className="font-normal ml-2">
                    {movie.cast?.join(", ")}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </Dialog>
  );
}
