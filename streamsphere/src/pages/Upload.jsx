import { useRef, useState } from "react";
import axios from "axios";

const Upload = () => {
  const fileInputRef = useRef(null);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [channel, setChannel] = useState("");

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file || !title || !channel) {
      setMessage("Please fill in title, channel name, and select a video.");
      return;
    }

    const formData = new FormData();
    formData.append("video", file);

    try {
      // 1. Upload file to server
      const uploadRes = await axios.post("http://localhost:5000/api/upload", formData);
      const videoUrl = uploadRes.data.url;

      // 2. Save metadata to MongoDB
      await axios.post("http://localhost:5000/api/videos", {
        title,
        channel,
        url: videoUrl,
      });

      setMessage("Upload successful!");
      setTitle("");
      setChannel("");
    } catch (err) {
      console.error(err);
      setMessage("Upload failed.");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Upload a Video</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter video title"
        className="w-full mb-3 px-3 py-2 border rounded"
      />
      <input
        type="text"
        value={channel}
        onChange={(e) => setChannel(e.target.value)}
        placeholder="Enter channel name"
        className="w-full mb-4 px-3 py-2 border rounded"
      />

      {/* Hidden file input */}
      <input
        type="file"
        accept="video/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Upload button */}
      <button
        type="button"
        onClick={handleButtonClick}
        className="px-6 py-2 bg-blue-500 text-white rounded cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      >
        Choose and Upload Video
      </button>

      {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
    </div>
  );
};

export default Upload;
