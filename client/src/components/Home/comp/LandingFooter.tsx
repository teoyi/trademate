import { FaGithubAlt, FaDiscord, FaInstagram, FaFacebookSquare } from "react-icons/fa";

const LandingFooter = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center md:my-5 xl:my-10 xl:px-10">
      <div className="w-full h-full flex flex-col md:flex-row-reverse justify-center items-center max-w-[1440px] mx-10 my-12 md:mx-10">
        {/*
            There are 3 items I deem important for the footer 
                1. A directory for the page (clicking on each should lead them to the correct section)
                2. A resource section that directs them to the repo (github). Possibly list one for "community" that will point to 404 
                3. A support column for contact us and FAQ (probably name this as Help Center)

            Other than the above 3, there should probably be on the extreme left the trademate logo with socials below

            Other items: 
                1. Legal items
                    - Privacy Policy 
                    - Terms and Conditions 
                    - Copyright Notice (probably a copyright mark that points to me and my github)
        */}
        <div className="w-full flex flex-col my-7">
            <h1 className="text-3xl font-bold mb-5">trademate<span className="text-accent">.</span></h1>
            <div className="flex flex-row text-2xl text-secondary-text">
                <i className="mr-5"><FaInstagram /></i>
                <i className="mr-5"><FaGithubAlt /></i>
                <i className="mr-5"><FaDiscord /></i>
                <i className="mr-5"><FaFacebookSquare /></i>
            </div>
        </div>
        <div className="w-full flex flex-col justify-center items-start my-7">
            <h1 className="font-bold text-2xl mb-3">Directory</h1>
            <h2 className="text-md text-secondary-text mb-1">Why trademate<span clasName="text-accent">?</span></h2>
            <h2 className="text-md text-secondary-text mb-1">Key Highlights</h2>
        </div>
        <div className="w-full flex flex-col justify-center items-start my-5">
            <h1 className="font-bold text-2xl mb-3">Resources</h1>
            <h2 className="text-md text-secondary-text mb-1">Developers</h2>
            <h2 className="text-md text-secondary-text mb-1">Community</h2>
        </div>
        <div className="w-full flex flex-col justify-center items-start my-5">
            <h1 className="font-bold text-2xl mb-3">Support</h1>
            <h2 className="text-md text-secondary-text mb-1">Contact Us</h2>
            <h2 className="text-md text-secondary-text mb-1">Help Center</h2>
        </div>

      </div>
    </section>
  )
}

export default LandingFooter