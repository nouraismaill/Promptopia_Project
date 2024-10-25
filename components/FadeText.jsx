import { FadeText } from "@/components/ui/fade-text";

export function FadeText({ text }) {
  return (
    <div className="flex flex-col space-y-8 text-center">
      <FadeText
        className="text-4xl font-bold text-black dark:text-white"
        direction="up"
        framerProps={{
          show: { transition: { delay: 0.2 } },
        }}
        text={text}
      />
      <FadeText
        className="text-4xl font-bold text-black dark:text-white"
        direction="right"
        framerProps={{
          show: { transition: { delay: 0.4 } },
        }}
        text={text}
      />
      <FadeText
        className="text-4xl font-bold text-black dark:text-white"
        direction="down"
        framerProps={{
          show: { transition: { delay: 0.6 } },
        }}
        text={text}
      />
      <FadeText
        className="text-4xl font-bold text-black dark:text-white"
        direction="left"
        framerProps={{
          show: { transition: { delay: 0.8 } },
        }}
        text={text}
      />
    </div>
  );
}
