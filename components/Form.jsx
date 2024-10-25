import { FadeText } from "@/components/ui/fade-text";
import TypingAnimation from "@/components/ui/typing-animation";
import Link from "next/link";
export function TypingAnimationDemo({ text }) {
  return <TypingAnimation className={` head_text text-left `} text={text} />;
}

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <TypingAnimation text={`${type} Post!`} />
      <FadeText
        className="desc text-left max-w-md"
        direction="left"
        framerProps={{
          show: { transition: { delay: 0 } },
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
            <button class="inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110">
              <svg
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                class="h-5 w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              Cancel
            </button>
          </Link>
          <button class="Btn " type="submit" disabled={submitting}>
            <div class="sign">+</div>

            <div class="text">Create</div>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
