import { FacebookIcon, GithubIcon, LinkedinIcon, InstagramIcon } from 'lucide-react';

import { TypewriterEffectSmooth } from "./../Components/ui/typewriter-effect";
import Avatar from './../Components/Avatar';

const Home = () => {
    const words = [
        {
          text: "And",
          className: "text-3xl md:text-4xl text-white/90 ",
        },
        {
          text: "I'm",
          className: "text-3xl md:text-4xl text-white/90 mr-1",
        },
        {
          text: "an",
          className: "text-3xl md:text-4xl text-white/90 mr-1",
        },
        {
          text: "Ethical Hacker.",
          className: "text-3xl md:text-4xl text-purple-400/90 font-bold font-josefinSlab",
        },
      ];
      
    const SocialLinks = () => {
        return (
          <div className="flex flex-wrap gap-4 items-center md:pt-6">
            <a href="https://www.facebook.com/profile.php?id=100017944472776" target="_blank" rel="noopener noreferrer" className="p-3 border border-purple-600 rounded-full">
              <FacebookIcon className="w-4 h-4 md:w-6 md:h-6 text-blue-500 hover:scale-[1.2] transition-transform ease-in-out duration-100" />
            </a>
            <a href="https://github.com/ShadowOG42" target="_blank" rel="noopener noreferrer" className="p-3 border border-purple-600 rounded-full">
            <GithubIcon className="w-4 h-4 md:w-6 md:h-6 text-gray-400 hover:scale-[1.2] transition-transform ease-in-out duration-100" />
            </a>
            <a href="https://www.linkedin.com/in/dipesh-karki-2145a3227/" target="_blank" rel="noopener noreferrer" className="p-3 border border-purple-600 rounded-full">
              <LinkedinIcon className="w-4 h-4 md:w-6 md:h-6 text-blue-600 hover:scale-[1.2] transition-transform ease-in-out duration-100" />
            </a>
            <a href="https://www.instagram.com/dipkarki9/" target="_blank" rel="noopener noreferrer" className="p-3 border border-purple-600 rounded-full">
              <InstagramIcon className="w-4 h-4 md:w-6 md:h-6 text-pink-400 hover:scale-[1.2] transition-transform duration-50" />
            </a>
            <button className="ml-auto px-4 p-2 md:px-6 md:p-3 border md:relative md:right-24 text-sm md:text-base text-white/80 hover:text-white/90 border-purple-600 bg-purple-600/70 rounded-full">
              Download CV
            </button>
          </div>
        )
      }
      SocialLinks.displayName = "SocialLinks";
  return (
    <main id='home' className="min-h-[calc(100vh-4rem)] ">
      <div className="intro flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-16 lg:px-44 pt-10 md:pt-32 gap-8">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="space-y-6 text-white">
            <div className="space-y-3">
              <p className="text-3xl md:text-4xl text-white/90">Hello, It&apos;s me</p>
              <p className="text-5xl md:text-6xl font-josefinSlab text-purple-200">Dipesh Karki</p>
              <TypewriterEffectSmooth words={words} />
            </div>
            {/* <p className="indent-md">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo suscipit earum quos numquam architecto distinctio quam accusantium harum eaque
              nostrum.
            </p>
            <p className="indent-md">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo suscipit earum quos numquam architecto distinctio quam accusantium harum eaque
              nostrum.
            </p> */}
            <SocialLinks />
          </div>
        </div>
      <Avatar />
      </div>
    </main>
  )
}

export default Home