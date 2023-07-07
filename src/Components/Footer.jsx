const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="">
        <div className="pt-[100px] pb-[100px] px-5 lg:px-[100px] flex flex-col lg:flex-row justify-between">
          <div className="mb-5 lg:mb-[10px]">
            <h3 className="text-xl mb-5 text-white">About</h3>
            <li className="text-base cursor-pointer text-[#C2C5DB] mb-[15px]">Our Story</li>
            <li className="text-base cursor-pointer text-[#C2C5DB] mb-[15px]">Mission</li>
            <li className="text-base cursor-pointer text-[#C2C5DB] mb-[15px]">About us</li>
            <li className="text-base cursor-pointer text-[#C2C5DB] mb-[15px]">News</li>
          </div>
          <div className="mb-5 lg:mb-[10px]">
            <h3 className="text-xl mb-5 text-white">Categories</h3>
            <li className="text-base cursor-pointer text-[#C2C5DB] mb-[15px]">Work</li>
            <li className="text-base cursor-pointer text-[#C2C5DB] mb-[15px]">Services</li>
            <li className="text-base cursor-pointer text-[#C2C5DB] mb-[15px]">Product</li>
            <li className="text-base cursor-pointer text-[#C2C5DB] mb-[15px]">
              Tips & Tricks
            </li>
          </div>
          <div className="mb-5 lg:mb-[10px]">
            <h3 className="text-xl mb-[20px] text-white">Categories</h3>
            <li className="text-base cursor-pointer text-[#C2C5DB] mb-[15px]">Work</li>
            <li className="text-base cursor-pointer text-[#C2C5DB] mb-[15px]">Services</li>
            <li className="text-base cursor-pointer text-[#C2C5DB] mb-[15px]">Product</li>
            <li className="text-base cursor-pointer text-[#C2C5DB] mb-[15px]">
              Tips & Tricks
            </li>
          </div>
          <div className="mb-5 lg:mb-[10px]">
            <h3 className="text-xl mb-5 text-white">Quick Links</h3>
            <li className="text-base cursor-pointer text-[#C2C5DB] mb-[15px]">
              Privacy Policy
            </li>
            <li className="text-base cursor-pointer text-[#C2C5DB] mb-[15px]">
              Privacy Statement
            </li>
            <li className="text-base cursor-pointer text-[#C2C5DB] mb-[15px]">
              Use of cookies
            </li>
            <li className="text-base cursor-pointer text-[#C2C5DB] mb-[15px]">
              International Editions
            </li>
          </div>
        </div>
      </div>
      <div className="">
        <div className="pt-[10px] pb-5 px-[40px]">
            <div className="flex justify-center items-center b-2 border-t cursor-pointer border-solid border-color pt-[10px] lg:pt-[33px]">
                <h5 className="text-base text-[#C2C5DB] leading-loose font-light mb-[12px]">Copyright ©2023 All rights reserved</h5>
            </div>
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;
