import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import React, { useEffect, useState } from "react";
import { Button, Divider, Modal, PasswordInput, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { loginUser, logoutUser } from "../../Service/UserService";
import { errorNotification, successNotification } from "../../Service/NotificationService";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, setUser } from "../../Slices/UserSlice";
import { Link, useNavigate } from "react-router-dom";
import { addEmail } from "../../Service/EmailService";


const Footer = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const year = new Date().getFullYear();

  // 🕒 Auto logout after 30 minutes if user exists
  useEffect(() => {
    if (user && user.id) {
      const timer = setTimeout(() => {
        handleAutoLogout();
      }, 1800000); 

      return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }
  }, [user]); // Runs when `user` changes

  const handleAutoLogout = () => {
    if (!user || !user.id) {
      errorNotification("Logout Failed", "No active session found.");
      return;
    }

    logoutUser(user.id)
      .then(() => {
        dispatch(removeUser()); // ✅ Clear Redux user state
        successNotification("Session Expired", "You have been logged out.");
      })
      .catch((err) => {
        console.error("Logout Error:", err);
        errorNotification("Logout Failed", "Something went wrong. Please try again.");
      });
  };

  const form = {
    email: "",
    password: ""
  };

  const [data, setData] = useState(form);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  

  const handleSubmit = () => {
    loginUser(data)
      .then((res) => {
        console.log(res);
        dispatch(setUser(res)); 
        successNotification("Login Successful", "Login...");
        close();
      })
      .catch((err) => {
        console.error("Login Error:", err);
        errorNotification("Login Failed", "Invalid credentials. Please try again.");
      });
  };
  

  const logout = () => {
    if (!user || !user.id) {
      errorNotification("Logout Failed", "No user found to log out.");
      return;
    }
  
    logoutUser(user.id)  // Pass the logged-in user ID
      .then(() => {
        dispatch(setUser(null)); // ✅ Clear Redux state
        successNotification("Logout Successful", "Logout...");
      })
      .catch((err) => {
        console.error("Logout Error:", err);
        errorNotification("Logout Failed", "Logout failed. Please try again.");
      });

      dispatch(removeUser());
  };

  const handleEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
    
    if (!email.trim()) {
      errorNotification("Subscription Failed", "Email cannot be empty.");
      return;
    }
  
    if (!emailPattern.test(email)) {
      errorNotification("Subscription Failed", "Please enter a valid email address.");
      return;
    }
  
    addEmail(email)
      .then((res) => {
        successNotification("Subscription Successful", "You have been subscribed!");
        setEmail(""); // Clear input after success
      })
      .catch((err) => {
        console.error("Subscription Error:", err);
        errorNotification("Subscription Failed", "This email is already subscribed.");
      });
  };
  

  

  return (
    <div>
      <footer className="bg-[#0d0c1d] text-gray-300 py-10 px-5">
        <Divider className="px-7 py-7" color="#2d2d2d" size="sm" />

        <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Section - About */}
          <div className="md:col-span-2 text-center md:text-left pl-6">
            <h2 className="text-lg font-semibold text-white">TECHVISTRA</h2>
            <p className="text-md mt-3 py-5 pr-8 sm-mx:text-sm ">
            At TECHVISTRA SOFTWARE SOLUTIONS, we turn ideas into reality with high-performance software solutions. Whether you’re a startup or an enterprise, we have the right technology for you.
            </p>

            {/* Subscription Form */}
            <div className="mt-4">
              <h3 className="text-sm font-medium">Get the latest updates from TechVistra</h3>
              <div className="flex flex-col sm:flex-row items-center gap-2 mt-3">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-2/3 bg-gray-800 text-white px-4 py-2 rounded-full outline-none"
                required
              />

              <button 
                className="bg-gradient-to-r from-[#A9A9D2] to-[#C4C4DE] text-black font-bold px-6 py-2 rounded-full" 
                onClick={handleEmail}
              >
                Subscribe
              </button>

              </div>
              <div className="flex justify-center md:justify-start gap-4 mt-4">
                <a href="https://m.facebook.com/techvistra/" target="_blank"><FontAwesomeIcon size="xl" icon={faFacebook}/></a>
                <a href="https://www.instagram.com/techvistra?igsh=enhwYXNob2pld2hl&utm_source=qr" target="_blank" ><FontAwesomeIcon size="xl" icon={faInstagram} /></a>
                < a href="https://www.linkedin.com/company/techvistra-software-solutions-llp/posts/?feedView=all" target="_blank"><FontAwesomeIcon size="xl" icon={faLinkedin} /></a>
              </div>
            </div>
          </div>

          <div className="flex gap-11 md:col-span-2 md:gap-8 justify-around md-mx:justify-evenly">
            {/* Middle Section - Services */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-white">Our Services</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>Custom Software Development</li>
                <li>Web Application Development</li>
                <li>Mobile App Development</li>
                <li>Cybersecurity Solutions</li>
                <li>UI/UX Design</li>
                <li>Software Integration</li>
                <li>Cloud Solutions</li>
              </ul>
            </div>

            {/* Right Section - Company */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <ul className="mt-3 space-y-2 text-sm">
              <li>
        <Link to="/about-us" className="hover:text-white">Go to About Page</Link>
      </li>
      <li>
        <Link to="/testimonials" className="hover:text-white">Testimonials</Link>
      </li>
      <li>
        <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
      </li>
      <li>
        <Link to="/terms-of-use" className="hover:text-white">Terms & Conditions</Link>
      </li>
      <li>
        <Link to="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
      </li>
                 
               
              
                {/* <li>FAQ</li> */}
                
                {user && user.id ? (
                  <li onClick={logout} className="cursor-pointer">Logout</li>
                ) : (
                  <li onClick={open} className="cursor-pointer">Login</li>
                )}


<li>
        <Link to="/contact" className="hover:text-white">Contact Us</Link>
      </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <Divider className="mx-7 my-7" color="#2d2d2d" size="sm" />

        <div className="flex flex-col md:flex-row items-center justify-center text-sm pt-2 max-w-lg mx-auto text-center">
          <img className="w-16 h-16 mb-2 md:mb-0" src="/assets/logo-img.png" alt="Logo" />
          <div>
          <p>Copyright &copy; {year} TECHVISTRA SOFTWARE SOLUTIONS LLP. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="/legal-notice-DMAC" className="hover:text-white">Legal Notice DMCA</a> |
              <a href="/terms-of-use" className="hover:text-white">Terms of Service</a> |
              <a href="/cookie-policy" className="hover:text-white">Cookie Policy</a> |
              <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center ${opened ? 'visible' : 'invisible'}`}>
        <Modal opened={opened} onClose={close} radius="lg" title="Login Admin" centered>
          <div className="w-full max-w-md px-8 py-6 bg-white shadow-lg rounded-lg">
            <div className="font-semibold text-2xl text-center">Login Account</div>

            <TextInput
              name="email"
              value={data.email}
              onChange={handleChange}
              withAsterisk
              leftSection={<IconAt size={16} />}
              label="Email"
              placeholder="Your email"
              className="mt-4"
            />

            <PasswordInput
              name="password"
              value={data.password}
              onChange={handleChange}
              withAsterisk
              leftSection={<IconLock size={18} stroke={1.5} />}
              label="Password"
              placeholder="Password"
              className="mt-4"
            />

            <Button onClick={handleSubmit} autoContrast variant="filled" fullWidth className="mt-6">
              Login
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Footer;
