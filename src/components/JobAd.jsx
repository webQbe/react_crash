import React from 'react';
import { useState } from 'react'; /* Import useState */
import { FaMapMarker } from 'react-icons/fa'; /* Import FontAwesome component from React-Icons */
import { Link } from 'react-router-dom';

const JobAd = ({ job }) => {  /* accepts a job object as a prop */

    /* Use useState hook to manage a boolean state, showFullDescription, which determines whether the full job description should be displayed. */
    const [showFullDescription, setShowFullDescription] = useState(false); 

    /* setShowFullDescription function (from useState) can be used to toggle the state. 
    This will switch between showing the truncated description and the full description. */
    

    // The job description is stored in the description variable.
    let description = job.description;

    if(!showFullDescription){

        description = description.substring(0, 90) + '...';
        /* If showFullDescription is false, the description is truncated to the first 90 characters, and an ellipsis (...) is appended. 
        
        When the showFullDescription state is false, users will see only the first 90 characters of the job description. This is helpful for keeping the interface clean and concise when dealing with long descriptions.*/

    }


  return (
    <div className="bg-white rounded-xl shadow-md relative">
                            <div className="p-4">
                                <div className="mb-6">
                                        <div className="text-gray-600 my-2">{ job.type }</div>
                                        <h3 className="text-xl font-bold">{ job.title }</h3>
                                </div>
                    
                                <div className="mb-5">
                                        { description }
                                </div>

                                <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="text-indigo-500 mb-5 hover:text-indigo-600">
                                    { showFullDescription ? 'Less' : 'More' }
                                </button>
                            {/* 
                                When the button is clicked, the setShowFullDescription function is called with a callback function as its argument.
                                
                                This callback function toggles the value of showFullDescription:
                                    If showFullDescription is true, clicking the button sets it to false.
                                    If showFullDescription is false, clicking the button sets it to true.

                                In the JobAd component, the showFullDescription state determines whether the full job description or a truncated version is displayed.

                                Clicking the button toggles the showFullDescription state, which updates the description displayed in the JobAd component.

                                The button's label changes dynamically based on the value of showFullDescription:
                                    If showFullDescription is true, the button displays 'Less'.
                                    If showFullDescription is false, the button displays 'More'. */}                             
                                

                                <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>
                    
                                <div className="border border-gray-100 mb-5"></div>
                    
                                <div className="flex flex-col lg:flex-row justify-between mb-4">
                                    <div className="text-orange-700 mb-3">
                                        {/* Use FontAwesome FaMapMarker */}
                                        <FaMapMarker className='inline text-lg mb-1'/>
                                                { job.location }
                                    </div>
                                <Link to={`/jobs/${job.id}`} className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
  )
}

export default JobAd