import React from 'react';
import './Communities.css'; // Import the CSS file for Communities component
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';

const Communities = () => {
    return (
        <div className="content">
            <div>
                <img src={image1} alt="Image 1" />
                <h1>HoopShooters</h1>
                <p>This community is all about basketball, whether it's casual or competitive. </p>
                <p>The HoopShooters community sets up different tournaments and casual games for the community to participate in.</p>
                <p>Want to join the HoopShooters community? Just go to one of the activities/events that they post on the calendar.</p>
            </div>
            <div>
                <img src={image2} alt="Image 2" />
                <h2>MoreYoga</h2>
                <p>MoreYoga is a community that offers various Yoga exercises and free sessions for anyone to enjoy!</p>
                <p>MoreYoga offers free outside AND indoor yoga sessions available for anyone above the age 16. To join just attend an event.</p>
            </div>
            <div>
                <img src={image3} alt="Image 3" />
                <h3>Dodge the Ball</h3>
                <p>This is a community that actively sets up fun dodgeball games in either local highschool gyms or outside courts.</p>
                <p>These activities include competitive tournaments for teams that are signed up through Dodge the Ball. To join just attend an activity that is on the calendar.</p>
            </div>
            <div>
                <img src={image4} alt="Image 4" />
                <h3>Outdoor Movie Night</h3>
                <p>This is a community that invites all to watch a movie outside in a parking lot, watch in your car or bring a chair.</p>
                <p>All attendance is free of charge and snacks wilk available to be purchase at the event, or bring your own!</p>
            </div>
        </div>
    );
};

export default Communities;
