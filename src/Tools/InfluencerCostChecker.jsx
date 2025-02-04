// import React from 'react';
// import Header from '../components/Header';
// import FooterPage from '../components/FooterPage';
// import { FaInstagram, FaYoutube} from 'react-icons/fa'; // Import Instagram and YouTube icons


// const InfluencerCostChecker = () => {

//     return (
//         <div>
//             <Header />


//             <div className="section-background">
//                 <h1>Influencer Cost Checker</h1>
//                 <p>Use this tool to check the cost of collaborating with influencers.</p><br></br>

//                 {/* Search bar with icons */}
//                 <div
//                     style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'space-between',
//                         border: '1px solid #ccc',
//                         borderRadius: '5px',
//                         padding: '5px',
//                         maxWidth: '600px',
//                         margin: '0 auto',
//                         backgroundColor: '#fff',
//                         borderRadius: '40px',
//                     }}
//                 >
//                     {/* Social Media Icons */}
//                     <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingLeft: '20px' }}>
//                         <a
//                             href="https://instagram.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             style={{ color: '#E4405F', fontSize: '24px' }}
//                         >
//                             <FaInstagram />
//                         </a>
//                         <a
//                             href="https://youtube.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             style={{ color: '#FF0000', fontSize: '24px' }}
//                         >
//                             <FaYoutube />
//                         </a>
//                     </div>

//                     {/* Search Input and Button */}
//                     <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
//                         <input
//                             type="text"
//                             placeholder="Search..."
//                             style={{
//                                 width: '100%',
//                                 padding: '10px',
//                                 border: 'none',
//                                 borderRadius: '5px 0 0 5px',
//                                 color: '#000000',
//                                 outline: 'none',
//                             }}
//                         />
//                         <button
//                             style={{
//                                 border: 'none',
//                                 padding: '10px 15px',
//                                 backgroundColor: '#007bff',
//                                 color: '#fff',
//                                 borderRadius: '0 5px 5px 0',
//                                 cursor: 'pointer',
//                                 alignItems: 'center',
//                                 fontSize: '16px',
//                                 borderRadius: '25px',
//                             }}
//                         >
//                             Search
//                         </button>

                    
//                     </div>
//                 </div>




//             </div>



//             <div className='description'>
//                 <p>
//                     The Influencer Cost Checker is a versatile tool designed to help brands, marketers, and
//                     individuals estimate the cost of collaborating with influencers across various platforms
//                     like Instagram, YouTube, TikTok, and more.
//                 </p>

//                 <p className='mt-5'>
//                     By providing a streamlined interface,
//                     it simplifies the process of evaluating influencer pricing based on metrics like follower
//                     count, engagement rate, platform type, and niche.
//                 </p>
//             </div>

//             <div className='feature'>
//                 <h1>Key Features:</h1>
//                 <h4>1. Accurate Cost Estimation:</h4><br/>
//                 <li>Analyze pricing based on real-world market trends and influencer metrics.</li>
//                 <li>Ensure transparency in influencer partnerships.</li>
//             </div>


//             < FooterPage/>

//         </div>
//     )
// }


// export default InfluencerCostChecker;





// import React from 'react';
// import Header from '../components/Header';
// import FooterPage from '../components/FooterPage';
// import { FaInstagram, FaYoutube } from 'react-icons/fa'; // Import Instagram and YouTube icons

// const InfluencerCostChecker = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />

//       <div className="section-background flex-1">
//         <h1 className="text-center text-4xl md:text-5xl font-bold mb-5">Influencer Cost Checker</h1>
//         <p className="text-center text-lg mb-10">Use this tool to check the cost of collaborating with influencers.</p>

//         {/* Search bar with icons */}
//         <div
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             border: '1px solid #ccc',
//             borderRadius: '40px',
//             padding: '5px',
//             maxWidth: '600px',
//             margin: '0 auto',
//             backgroundColor: '#fff',
//           }}
//         >
//           {/* Social Media Icons */}
//           <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingLeft: '20px' }}>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ color: '#E4405F', fontSize: '24px' }}
//             >
//               <FaInstagram />
//             </a>
//             <a
//               href="https://youtube.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ color: '#FF0000', fontSize: '24px' }}
//             >
//               <FaYoutube />
//             </a>
//           </div>

//           {/* Search Input and Button */}
//           <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
//             <input
//               type="text"
//               placeholder="Search..."
//               style={{
//                 width: '100%',
//                 padding: '10px',
//                 border: 'none',
//                 borderRadius: '5px 0 0 5px',
//                 color: '#000000',
//                 outline: 'none',
//               }}
//             />
//             <button
//               style={{
//                 border: 'none',
//                 padding: '10px 15px',
//                 backgroundColor: '#007bff',
//                 color: '#fff',
//                 borderRadius: '0 5px 5px 0',
//                 cursor: 'pointer',
//                 fontSize: '16px',
//                 borderRadius: '25px',
//               }}
//             >
//               Search
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="description text-center p-5">
//         <p className="text-lg md:text-xl mb-5">
//           The Influencer Cost Checker is a versatile tool designed to help brands, marketers, and individuals estimate the cost of collaborating with influencers across various platforms like Instagram, YouTube, TikTok, and more.
//         </p>

//         <p className="text-lg md:text-xl mb-5">
//           By providing a streamlined interface, it simplifies the process of evaluating influencer pricing based on metrics like follower count, engagement rate, platform type, and niche.
//         </p>
//       </div>

//       <div className="feature text-center p-5">
//         <h1 className="text-3xl md:text-4xl font-bold mb-5">Key Features:</h1>
//         <h4 className="text-xl md:text-2xl mb-3">1. Accurate Cost Estimation:</h4>
//         <ul className="text-lg md:text-xl list-inside list-disc">
//           <li>Analyze pricing based on real-world market trends and influencer metrics.</li>
//           <li>Ensure transparency in influencer partnerships.</li>
//         </ul>
//       </div>

//       <div className="flex-grow" />

//       {/* Footer */}
//       <FooterPage />
//     </div>
//   );
// };

// export default InfluencerCostChecker;




// import React from 'react';
// import { FaInstagram, FaYoutube } from 'react-icons/fa'; // Import Instagram and YouTube icons
// import Header from '../components/Header';
// import FooterPage from '../components/FooterPage';
// import rangerImage from '../Images/ranger-4df6c1b6.png'; // Correct path from src

// const InfluencerCostChecker = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <div
//   className="section-background flex-1"
//   style={{
//     backgroundImage: `url(${rangerImage})`, // Use the imported image
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     paddingTop: '150px',
//     paddingBottom: '150px',
//     color: 'white',
//     textAlign: 'center',
//   }}
// >


      
//         <h1 className="text-center text-4xl md:text-5xl font-bold mb-5">
//           Influencer Cost Checker
//         </h1>
//         <p className="text-center text-lg mb-10">
//           Use this tool to check the cost of collaborating with influencers.
//         </p>

//         {/* Search bar with icons */}
//         <div
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             border: '1px solid #ccc',
//             borderRadius: '40px',
//             padding: '5px',
//             maxWidth: '600px',
//             margin: '0 auto',
//             backgroundColor: '#fff',
//           }}
//         >
//           {/* Social Media Icons */}
//           <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingLeft: '20px' }}>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ color: '#E4405F', fontSize: '24px' }}
//             >
//               <FaInstagram />
//             </a>
//             <a
//               href="https://youtube.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ color: '#FF0000', fontSize: '24px' }}
//             >
//               <FaYoutube />
//             </a>
//           </div>

//           {/* Search Input and Button */}
//           <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
//             <input
//               type="text"
//               placeholder="Search..."
//               style={{
//                 width: '100%',
//                 padding: '10px',
//                 border: 'none',
//                 borderRadius: '5px 0 0 5px',
//                 color: '#000000',
//                 outline: 'none',
//               }}
//             />
//             <button
//               style={{
//                 border: 'none',
//                 padding: '10px 15px',
//                 backgroundColor: '#007bff',
//                 color: '#fff',
//                 borderRadius: '0 5px 5px 0',
//                 cursor: 'pointer',
//                 fontSize: '16px',
//                 borderRadius: '25px',
//               }}
//             >
//               Search
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="description text-center p-5">
//         <p className="text-lg md:text-xl mb-5">
//           The Influencer Cost Checker is a versatile tool designed to help brands, marketers, and
//           individuals estimate the cost of collaborating with influencers across various platforms
//           like Instagram, YouTube, TikTok, and more.
//         </p>

//         <p className="text-lg md:text-xl mb-5">
//           By providing a streamlined interface, it simplifies the process of evaluating influencer pricing based on metrics like follower count, engagement rate, platform type, and niche.
//         </p>
//       </div>

//       <div className="feature text-center p-5">
//         <h1 className="text-3xl md:text-4xl font-bold mb-5">Key Features:</h1>
//         <h4 className="text-xl md:text-2xl mb-3">1. Accurate Cost Estimation:</h4>
//         <ul className="text-lg md:text-xl list-inside list-disc">
//           <li>Analyze pricing based on real-world market trends and influencer metrics.</li>
//           <li>Ensure transparency in influencer partnerships.</li>
//         </ul>
//       </div>

//       <div className="flex-grow" />

//       {/* Footer */}
//       <FooterPage />
//     </div>
//   );
// };

// export default InfluencerCostChecker;






import React from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/fa'; // Import Instagram and YouTube icons
import Header from '../components/Header';
import FooterPage from '../components/FooterPage';
import rangerImage from '../Images/ranger-4df6c1b6.png'; // Correct path from src
const InfluencerCostChecker = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div
        className="section-background flex-1"
        style={{
            backgroundImage: `url(${rangerImage})`, // Use the imported image/ Use the imported image from public folder
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: '150px',
          paddingBottom: '150px',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-5">
          Influencer Cost Checker
        </h1>
        <p className="text-center text-lg mb-10">
          Use this tool to check the cost of collaborating with influencers.
        </p>

        {/* Search bar with icons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #ccc',
            borderRadius: '40px',
            padding: '5px',
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: '#fff',
          }}
        >
          {/* Social Media Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingLeft: '20px' }}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#E4405F', fontSize: '24px' }}
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#FF0000', fontSize: '24px' }}
            >
              <FaYoutube />
            </a>
          </div>

          {/* Search Input and Button */}
          <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <input
              type="text"
              placeholder="Search..."
              style={{
                width: '100%',
                padding: '10px',
                border: 'none',
                borderRadius: '5px 0 0 5px',
                color: '#000000',
                outline: 'none',
              }}
            />
            <button
              style={{
                border: 'none',
                padding: '10px 15px',
                backgroundColor: '#007bff',
                color: '#fff',
                borderRadius: '0 5px 5px 0',
                cursor: 'pointer',
                fontSize: '16px',
                borderRadius: '25px',
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="description text-center p-5">
        <p className="text-lg md:text-xl mb-5">
          The Influencer Cost Checker is a versatile tool designed to help brands, marketers, and
          individuals estimate the cost of collaborating with influencers across various platforms
          like Instagram, YouTube, TikTok, and more.
        </p>

        <p className="text-lg md:text-xl mb-5">
          By providing a streamlined interface, it simplifies the process of evaluating influencer pricing based on metrics like follower count, engagement rate, platform type, and niche.
        </p>
      </div>

      {/* Key Features section */}
      <div
        style={{
          position: 'relative',
          padding: '40px',
          backgroundColor: 'white', // Background color for the Key Features section
          color: 'black',
        }}
      >
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Key Features:</h3>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          <li style={{ marginBottom: '10px' }}>1. Accurate Cost Estimation:</li>
          <li style={{ marginBottom: '10px' }}>
            Analyze pricing based on real-world market trends and influencer metrics.
          </li>
          <li style={{ marginBottom: '10px' }}>
            Ensure transparency in influencer partnerships.
          </li>
        </ul>
      </div>

      {/* Footer */}
      <FooterPage />
    </div>
  );
};

export default InfluencerCostChecker;
