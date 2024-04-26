
import { useState, useEffect } from 'react';

// Define a React component
function TimeDisplay() {
  const [timeContent, setTimeContent] = useState(""); // State to hold the content of time.txt

  // Function to fetch the content of time.txt and update the state
  const fetchTimeContent = async () => {
    try {
      // Construct the URL for the time.txt in the S3 bucket
      const bucketUrl = "https://sdp-smart-cities.s3.amazonaws.com/time.txt";

      const response = await fetch(bucketUrl); // Fetch the content of time.txt from S3
      const data = await response.text(); // Extract the text content from the response
      setTimeContent(data); // Update the state with the text content
    } catch (error) {
      console.error("Error fetching time content from S3:", error);
    }
  };

  // Fetch the content of time.txt periodically when the component mounts
  useEffect(() => {
    fetchTimeContent(); // Fetch immediately once component is mounted
    const intervalId = setInterval(fetchTimeContent, 10000); // Set up an interval to fetch every 10 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <label className="mt-1.5 bg-emerald-400 bg-opacity-40 uppercase tracking-widest font-bold text-white text-lg">
      {timeContent}
    </label>
  );
}

export default TimeDisplay;
 
