import React, { useEffect, useState } from "react";
import Camera from "./Camera";
import Loading from "./Loading";

const Cameras = () => {
  const [cameras, setCameras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCameras = async () => {
      try {
        const response = await fetch(
          "https://api.angelcam.com/v1/shared-cameras/",
          {
            headers: {
              Authorization:
                "PersonalAccessToken 33c23c005c6cbb3922cd1446f7a924223b32a28c",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch cameras");
        }
        const data = await response.json();
        setCameras(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCameras();
  }, []);

  if (loading) return <Loading />;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <section>
      <div className="title">
        <h2>Shared Cameras</h2>
        <div className="title-underline"></div>
      </div>
      <div className="cameras">
        {cameras.length === 0 ? (
          <p>No cameras available.</p>
        ) : (
          cameras.map((camera) => <Camera key={camera.id} {...camera} />)
        )}
      </div>
    </section>
  );
};

export default Cameras;
