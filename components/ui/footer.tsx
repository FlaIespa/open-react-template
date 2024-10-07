import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center min-h-[100px] bg-gray-800">
      <div className="text-center">
        <p className="text-sm text-indigo-200/65">© 2024 ID8.com</p>
      </div>
    </footer>
  );
}
