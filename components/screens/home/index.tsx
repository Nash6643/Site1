import { Footer } from "@/components/footer";
import Link from "@/components/link";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div className="flex justify-between">
          <div>
            <h1>Omar Nash</h1>
            <h2>Software Engineer</h2>
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <div className="mb-6 rounded-lg bg-gray-2 p-6">
          <h3 className="mb-2 font-medium text-lg">Create your portfolio in minutes</h3>
          <p className="mb-4">I am from the United States and i study Software Engeering</p>
          <div className="flex gap-4">
            <Link href="/guides/getting-started" text="Get Started" underline />
            <Link href="https://github.com/WUFAZA" text="Link to GitHub" underline />
          </div>
        </div>
      </FadeIn.Item>
      <FadeIn.Item>
        <p>
          My studies in software engineering and expanding my knowledge in AI and machine learning engineering. Tech projects, especially those involving AI and
          machine learning, as well as problem-solving coding challenges. Advanced AI and machine learning concepts, and practical applications of these
          technologies. Software engineering, AI, and machine learning engineering. Anything related to tech, coding, AI, machine learning, or solving complex
          problems.
        </p>
      </FadeIn.Item>
      <FadeIn.Item>
        <div className="mt-6 mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h3 className="mb-2 font-medium">Machine Learning</h3>
            <p className="text-muted text-small">Autonomous tasks and data</p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="mb-2 font-medium">Cloud Engineering</h3>
            <p className="text-muted text-small">creating & troubleshooting cloud infrastructure</p>
          </div>
        </div>
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="guides" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="examples" />
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
    </FadeIn.Container>
  );
}
