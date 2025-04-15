import React from 'react';

const LicensesPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
        Licenses & Copyright
      </h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden p-8 mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Understanding SoundFont Licensing</h2>
        
        <p className="text-gray-700 mb-6">
          SoundFonts, like other audio content, are subject to copyright and licensing restrictions. 
          It's important to understand the legal aspects of using, distributing, and creating SoundFonts.
        </p>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">Types of Licenses</h3>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-900 pl-4">
              <h4 className="font-bold text-gray-900 mb-1">Free for Personal Use</h4>
              <p className="text-gray-700">
                These SoundFonts can be used for non-commercial projects, practice, and personal enjoyment, 
                but cannot be used in commercial productions or public performances.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-900 pl-4">
              <h4 className="font-bold text-gray-900 mb-1">Royalty-Free Commercial License</h4>
              <p className="text-gray-700">
                These SoundFonts can be used in commercial projects (music, games, videos) without paying 
                additional royalties, but you cannot redistribute the SoundFont itself.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-900 pl-4">
              <h4 className="font-bold text-gray-900 mb-1">Creative Commons</h4>
              <p className="text-gray-700">
                These licenses allow various degrees of usage, modification, and distribution depending on 
                the specific Creative Commons license type (CC BY, CC BY-SA, CC BY-NC, etc.).
              </p>
            </div>
            
            <div className="border-l-4 border-blue-900 pl-4">
              <h4 className="font-bold text-gray-900 mb-1">Public Domain</h4>
              <p className="text-gray-700">
                These SoundFonts have no copyright restrictions and can be freely used, modified, 
                and distributed for any purpose.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">Our SoundFont Library Licenses</h3>
          
          <p className="text-gray-700 mb-4">
            SoundFonts available for download through our platform fall into one of these categories:
          </p>
          
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-1">SoundFont Creator Original Content</h4>
              <p className="text-gray-700">
                These are SoundFonts created by our team and licensed to you under our standard license, 
                which allows:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mt-2">
                <li>Use in both personal and commercial productions</li>
                <li>No royalty payments for usage</li>
                <li>No redistribution of the raw SoundFont files</li>
                <li>No reselling of the SoundFont</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-1">Third-Party Licensed Content</h4>
              <p className="text-gray-700">
                These are SoundFonts we've licensed from third-party creators. Each SoundFont will clearly
                indicate its specific license terms on its download page.
              </p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-bold text-gray-900 mb-1">Creative Commons SoundFonts</h4>
              <p className="text-gray-700">
                These SoundFonts are available under various Creative Commons licenses. The specific
                license will be clearly indicated on each SoundFont's download page.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-3">Creating Your Own SoundFonts</h3>
          
          <p className="text-gray-700 mb-4">
            When creating your own SoundFonts using our platform, it's important to understand:
          </p>
          
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              You may only use samples that you have the legal right to use (either created by you, 
              purchased with appropriate licenses, or available under permissive licenses)
            </li>
            <li>
              The resulting SoundFont's license depends on the licenses of all samples included
            </li>
            <li>
              If you use our pre-provided samples to create a SoundFont, the resulting SoundFont is for 
              your personal use only and cannot be redistributed unless otherwise specified
            </li>
            <li>
              You retain ownership of any original samples you create and upload to our platform
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Legal Disclaimer</h2>
        <p className="text-gray-700 mb-4">
          The information provided on this page is for general informational purposes only and does not 
          constitute legal advice. You should consult with a qualified legal professional for specific 
          guidance regarding your particular situation.
        </p>
        <p className="text-gray-700 mb-4">
          SoundFont Creator does not claim responsibility for how users utilize the SoundFonts downloaded 
          from our platform. It is the user's responsibility to ensure they are complying with all relevant 
          copyright laws and licensing terms.
        </p>
        <p className="text-gray-700">
          If you believe any content on our platform infringes on your copyright, please contact us
          immediately with details of the alleged infringement.
        </p>
      </div>
    </div>
  );
};

export default LicensesPage;