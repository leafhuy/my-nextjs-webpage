"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className = "title">(Leaf) Gip Sinh Huy</h2> <Image
                    src="/assets/image/IMG_9532.JPG"
                    width={200}   // chiều rộng
                    height={200} 
                    alt = "AVATAR"
                     // chiều cao
                     // class dùng để bo tròn
                  />
        <p>
            Final year student of HCMUS-HCMVNU. Possess a strong foundation in C/C++ programming and embedded systems development. Interests are in the fields of Internet of Things (IoT), circuit design, and wireless communication. 
        </p>

        <p className="contact-icons" style={{ display: "flex", gap: "20px" }}>
          <a 
            href="https://github.com/leafhuy" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub size={40} />
          </a>

          <a 
            href="https://www.linkedin.com/in/sinh-huy-g%E1%BB%8Bp-019965347" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={40} />
          </a>
        </p>
      </div>
    </section>
  );
}
