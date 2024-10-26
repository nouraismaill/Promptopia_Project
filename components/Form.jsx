import { FadeText } from "@/components/ui/fade-text";
import TypingAnimation from "@/components/ui/typing-animation";
import Link from "next/link";
export function TypingAnimationDemo({ text }) {
  return <TypingAnimation className={` head_text text-left `} text={text} />;
}

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <TypingAnimation text={`${type} a Post!`} />
      <FadeText
        className="desc text-left max-w-md"
        direction="left"
        framerProps={{
          show: { transition: { delay: 0.2 } },
        }}
        text={`${type} and share amazing prompts with the world, and let your
        imagination run wild with AI-powered platform.`}
      />

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          {" "}
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write Your Prompt Here..."
            required
            className="form_textarea"
          />
        </label>
        <label>
          {" "}
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag {` `}
            <span className="font-normal">
              (#product, #webdevelopmet, #idea)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>
        <div className="flex-end gap-5 mb-5 mx-3">
          <Link href={"/"}>
            <button
              class="appearance-none bg-transparent border border-[#1A1A1A] rounded-[0.9375em] box-border text-[#3B3B3B] cursor-pointer inline-block font-sans font-semibold text-[16px] leading-normal m-0 min-h-[3.75em] min-w-0 outline-none py-4 px-[2.3em] text-center no-underline transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] select-none touch-manipulation will-change-transform
    hover:text-white hover:bg-[#1A1A1A] hover:shadow-[0_8px_15px_rgba(0,0,0,0.25)] hover:-translate-y-0.5
    disabled:bg-[#C7C7C7] disabled:border-[#C7C7C7] disabled:text-gray-500
    disabled:hover:bg-[#E63535] disabled:hover:border-[#E63535] disabled:hover:text-white disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:translate-y-0
    active:shadow-none active:translate-y-0"
            >
              Cancel
            </button>
          </Link>

          <button
            className="appearance-none bg-transparent border border-[#FF5722] rounded-[0.9375em] box-border text-[#3B3B3B] cursor-pointer inline-block font-sans font-semibold text-[16px] leading-normal m-0 min-h-[3.75em] min-w-0 outline-none py-4 px-[2.25em] text-center no-underline transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] select-none touch-manipulation will-change-transform
    hover:text-white hover:bg-[#FF5722] hover:shadow-[0_8px_15px_rgba(0,0,0,0.25)] hover:-translate-y-0.5
    disabled:pointer-events-none
    active:shadow-none active:translate-y-0"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
