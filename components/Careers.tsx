import { motion } from "framer-motion";

export function Careers() {
  return (
    <section id="careers" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-space-grotesk text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Join Our Team
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Build the future of African technology with us. We're looking for passionate individuals who want to make a meaningful impact.
          </p>
        </motion.div>

        {/* Job Listings */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-8 sm:p-10 relative overflow-hidden cursor-pointer group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            onClick={() => window.open('https://tally.so/r/wk8p4j', '_blank')}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                  <h3 className="font-space-grotesk text-2xl sm:text-3xl font-bold mb-2">
                    State Venture Partner
                  </h3>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30">
                      Remote
                    </span>
                    <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-400/30">
                      Partnership
                    </span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30">
                      Africa-wide
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                  <span className="text-sm mr-2">Apply Now</span>
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white text-sm">→</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We're looking for entrepreneurial leaders to represent Wenzo Technologies in key African markets. As a State Venture Partner, you'll identify promising startups, facilitate partnerships, and help build the next generation of African tech companies.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-space-grotesk font-semibold text-white mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Scout and evaluate early-stage startups
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Build relationships with local ecosystem
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Facilitate venture partnerships
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-space-grotesk font-semibold text-white mb-3">What We Offer</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Competitive salary
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Access to our global network
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Professional development support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div 
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't see a role that fits? We're always interested in connecting with talented individuals who share our vision. 
            <a 
              href="https://tally.so/r/wbQ1Y1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors ml-1"
            >
              Get in touch
            </a> to explore opportunities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}