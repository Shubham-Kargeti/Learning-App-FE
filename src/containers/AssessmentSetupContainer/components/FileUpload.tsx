import React, { useState } from "react";

interface Props {
  label: string;
  onFileSelect: (file: File | null) => void;
}

const FileUpload: React.FC<Props> = ({ label, onFileSelect }) => {
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    if (!file) return;

    setFileName(file.name);
    onFileSelect(file);
  };

  const handleBrowse = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    onFileSelect(file);
  };

  return (
    <div
      className={`file-upload ${dragActive ? "drag-active" : ""}`}
      onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
      onDragLeave={() => setDragActive(false)}
      onDrop={handleDrop}
    >
      <label>{label}</label>

      <div className="upload-box">
        <p>{fileName || "Drag & drop or click to browse"}</p>
        <input type="file" onChange={handleBrowse} />
      </div>
    </div>
  );
};

export default FileUpload;
