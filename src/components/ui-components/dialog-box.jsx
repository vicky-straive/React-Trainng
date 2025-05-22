import React, { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

export default function DialogBox({ movieId, onClose }) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    setLoading(true);
    setError(null);
    setMovie(null);
    fetch(`/data.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch movie data");
        return res.json();
      })
      .then((data) => {
        const found = data.find((m) => String(m.id) === String(movieId));
        setMovie(found);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <Dialog
      header={movie ? movie.title : loading ? "Loading..." : "Not found"}
      visible={!!movieId}
      maximizable
      style={{ width: "50vw" }}
      onHide={onClose}
    >
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}
      {!loading && !movie && !error && <div style={{ color: "red" }}>Movie not found.</div>}
      {movie && !loading && !error && (
        <div className="flex flex-column gap-4">
          <div className="flex justify-content-center">
            <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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
