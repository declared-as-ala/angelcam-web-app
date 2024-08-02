import React from "react";

const Camera = ({ id, name, snapshot, status, streams }) => {
  return (
    <article className="single-camera">
      <img src={snapshot.url} alt={name} className="img" />
      <span className={`camera-status ${status.toLowerCase()}`}>{status}</span>
      <div className="camera-info">
        <h5>{name}</h5>
        <p>
          Snapshot created at: {new Date(snapshot.created_at).toLocaleString()}
        </p>
        <div className="streams">
          {streams.map((stream, index) => (
            <a
              key={index}
              href={stream.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View {stream.format} Stream
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Camera;
