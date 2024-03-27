import 'react'
import { useState, useEffect } from 'react';

// Define a React component
function TimeDisplay() {
    const [timeContent, setTimeContent] = useState(""); // State to hold the content of time.txt
  
    // Function to fetch the content of time.txt and update the state
    const fetchTimeContent = async () => {
      try {
        const response = await fetch("/time.txt"); // Fetch the content of time.txt from the public directory
        const data = await response.text(); // Extract the text content from the response
        setTimeContent(data); // Update the state with the text content
      } catch (error) {
        console.error("Error fetching time content:", error);
      }
    };
  
    // Fetch the content of time.txt when the component mounts
    useEffect(() => {
      fetchTimeContent();
    }, []); // Empty dependency array ensures the effect runs only once after the initial render
  
    return (
        <label className=" mt-1.5  bg-emerald-400 bg-opacity-40 uppercase tracking-widest font-bold text-white text-lg">
          {timeContent}
        </label>
    );
  }
  
  export default TimeDisplay;
  