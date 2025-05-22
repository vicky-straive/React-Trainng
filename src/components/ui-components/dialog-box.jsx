import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Card } from "primereact/card";

export default function MaximizableDemo(value) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (value.value) {
      setVisible(true);
    }
  }, [value.value]);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Show"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Header"
        visible={visible}
        maximizable
        style={{ width: "50vw" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <div>
          <div className="flex justify-content-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YoHD9XEInc0?si=FKuqT9WYK7wn8Ikv"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <Card>
              <div class="grid">
                <div class="col-4">
                  <div class="text-left p-3 border-round-sm bg-primary font-bold">
                    Genre:
                  </div>
                </div>
                <div class="col-4">
                  <div class="text-left p-3 border-round-sm bg-primary font-bold">
                    Year:
                  </div>
                </div>
                <div class="col-4">
                  <div class="text-left p-3 border-round-sm bg-primary font-bold">
                    Description:
                  </div>
                </div>
                <div class="col-4">
                  <div class="text-left p-3 border-round-sm bg-primary font-bold">
                    Rating:
                  </div>
                </div>
                <div class="col-4">
                  <div class="text-left p-3 border-round-sm bg-primary font-bold">
                    Type:
                  </div>
                </div>
                <div class="col-4">
                  <div class="text-left p-3 border-round-sm bg-primary font-bold">
                    Cast:
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
