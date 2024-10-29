"use client";
import { MagicCard } from "@/components/ui/magic-card";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { theme } = useTheme();
  AOS.init();
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const [copied, setCopied] = useState("");
  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 3000);
  };
  return (
    <div
      className="flex h-[250px] w-full flex-col gap-4 lg:flex-row py-auto "
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
    >
      <MagicCard
        className=" px-10 md:py-10 py-30 lg:flex-row flex-col items-center justify-center shadow-2xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <div className="flex pr-3 items-center gap-3 w-full lg:justify-between   ">
          <Image
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full  object-contain"
          />
          <div className="flex flex-col mr-8">
            <h3 className="font-satochi font-bold text-gray-900">
              {post.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500  ">
              {post.creator.email}
            </p>
          </div>
        </div>
        <div
          className=" ml-auto mr-[-30px] mt-[-30px]  copy_btn  "
          onClick={handleCopy}
        >
          <Image
            src={
              copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            width={12}
            height={12}
            alt={copied === post.prompt ? "Tick_icon" : "copy_icon"}
          />
        </div>
        <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
        <p
          className="font-inter text-sm blue_gradient cursor-pointer"
          onClick={() => handleTagClick && handleTagClick(post.tag)}
        >
          #{post.tag}
        </p>
        {session?.user.id === post.creator._id && pathName === "/profile" && (
          <div className="flex-center mt-5 gap-4 border-t border-gray-100 pt-3 ">
            <p
              className="font-iner text-sm green_gradient cursor-pointer"
              onClick={handleEdit}
            >
              Edit
            </p>
            <p
              className="font-iner text-sm orange_gradient cursor-pointer"
              onClick={handleDelete}
            >
              Delete
            </p>
          </div>
        )}
      </MagicCard>
    </div>
  );
};

export default PromptCard;
