import TimelineItem from './timelineitem';
import styles from '../styles/Timeline.module.css';

// Helper to import images from a public folder (e.g., public/logos/)
// Make sure your logos are in the public folder or adjust the path accordingly.
const StSebastianLogo = '../assets/ssc.png'; // Replace with your actual path
// For the IIT logo, since it's a red shield in the example,
// we might pass a style or a specific component. For simplicity,
// I'll assume it's an image or we'll use a styled div.
const IitLogoShield = '../assets/iit.png'; // Replace or handle differently


const Timeline = ({ events }) => {
  if (!events || events.length === 0) {
    return null;
  }

  return (
    <div className={styles.timelineContainer}>
      <div className={styles.mainHorizontalLine}></div>
      <div className={styles.timelineEvents}>
        {events.map((event, index) => (
          <TimelineItem
            key={index}
            logo={event.logo}
            yearRange={event.yearRange}
            institutionName={event.institutionName}
            degree={event.degree}
            isFirst={index === 0}
            isLast={index === events.length - 1}
            logoStyle={event.logoStyle}
          />
        ))}
      </div>
    </div>
  );
};

// Example Usage (you would typically fetch this data or pass it as props)
const educationHistory = [
  {
    logo: StSebastianLogo, // Path to the image in your public folder
    yearRange: '2010 - 2023',
    institutionName: "St. Sebastian's College, Moratuwa",
    degree: '(Grade 01 - G.C.E Advanced Level Examination)',
    logoStyle: { width: '70px', height: 'auto', marginBottom: '10px' } // Example style
  },
  {
    // For the IIT entry, if it's not an image but a styled shape,
    // you might omit the logo prop and use logoStyle to create it,
    // or use a specific component passed as a 'logoComponent' prop.
    // Here, I'm assuming it could be an image or we'll use a placeholder.
    logo: IitLogoShield, // Path to the shield image or null if using placeholder
    yearRange: '2024 - 2025',
    institutionName: 'Informatics Institute of Technology',
    degree: '(Foundation Certificate in Higher Education - IT | Computer Science)',
    logoStyle: { // Styles for the red shield
        width: '50px',
        height: '60px',
        backgroundColor: '#A30000', // Dark red color from image
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '10px', // Adjust as needed
        // You could add a ::before pseudo-element for the notch if using pure CSS for the shield
        // For simplicity, an image or SVG for the shield is easier.
        // If logo is null and logoStyle is present, TimelineItem can render a styled div.
        marginBottom: '10px'
     }
  },
  // Add more events here
];

// To render this in your App.js or another component:
// import Timeline from './Timeline'; // Adjust path
// const App = () => {
//   return (
//     <div>
//       <Timeline events={educationHistory} />
//     </div>
//   );
// }
// export default App;

export default Timeline;