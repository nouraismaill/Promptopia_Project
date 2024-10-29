import BoxReveal from "@/components/ui/box-reveal";
import Feed from "@components/Feed";
const Home = () => {
  return (
    <>
      <section className="w-full flex-center flex-col">
        <BoxReveal boxColor={"#EB5D0C"} duration={0.5}>
          <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center ">
              {"  "}AI-Powered Prompts
            </span>
          </h1>
        </BoxReveal>
        <BoxReveal boxColor={"#EB5D0C"} duration={0.5}>
          <p className="desc text-center">
            Promptopia is an open-source AI prompting tool for modern world to
            discover, create and share creative prompts
          </p>
        </BoxReveal>

        <Feed />
      </section>
    </>
  );
};

export default Home;
