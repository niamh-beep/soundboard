import Image from "next/image";
import Link from "next/link";

function FrameCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="w-[300px] rounded-[11px] border-[5px] border-[#191D2A] bg-[#F7F5F5] p-6 shadow-[0_3px_0_#191D2A]">
      <h3 className="font-[&quot;Jubel&quot;,system-ui,sans-serif] text-[28px] leading-[0.95] tracking-[-0.03em] text-[#191D2A]">
        {title}
      </h3>
      <div className="mt-4 space-y-4 text-[16px] leading-[1.5] text-[#191D2A]">
        {children}
      </div>
    </article>
  );
}

function MethodCard({
  heading,
  copy,
  tone,
}: {
  heading: React.ReactNode;
  copy: string;
  tone: string;
}) {
  return (
    <div className="relative w-[300px] pt-[35px]">
      <img
        src="/soundboard-tune-in-connect-out-white-1080px.png"
        alt=""
        className="absolute left-1/2 top-0 z-10 w-[70px] -translate-x-1/2"
      />
      <div
        className="rounded-[11px] p-[6px]"
        style={{ backgroundColor: tone }}
      >
        <article className="flex  flex-col rounded-[7px] border-[5px] border-[#191D2A] px-5 pb-6 pt-10">
          <h4 className="font-[&quot;Jubel&quot;,system-ui,sans-serif] text-[32px] leading-[0.95] tracking-[-0.03em] text-[#191D2A]">
            {heading}
          </h4>
          <p className="mt-3 flex-1 text-[16px] leading-[1.5] text-[#191D2A]">
            {copy}
          </p>
        </article>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-[#F8B617] text-[#191D2A]">
      <div className="bg-[#493083] text-[#F7F5F5]">
        <p className="mx-auto max-w-[1200px] px-4 py-1.5 text-center text-[11px] leading-snug">
          Build a culture of mentorship 🧠{" "}
          <Link
            href="#employee-workshop"
            className="underline underline-offset-2 hover:opacity-90"
          >
            Host an employee workshop &gt;
          </Link>
        </p>
      </div>

      <header className="mx-auto flex w-full max-w-[1200px] items-center justify-center px-4 pb-2 pt-6">
        <Image
          src="/soundboard-wordmark-black-white-300dpi.png"
          alt="Soundboard"
          width={256}
          height={80}
          className="h-auto w-[200px] max-w-full md:w-[240px]"
          priority
        />
      </header>

      <section className="mx-auto flex max-w-[900px] flex-col items-center px-4 pb-14 pt-4 text-center">
        <h1 className="font-[&quot;Jubel&quot;,system-ui,sans-serif] text-[58px] leading-[0.88] tracking-[-0.03em] text-[#191D2A] md:text-[92px]">
          <span className="block">TUNE IN</span>
          <span className="block">CONNECT OUT</span>
          <span className="block">MOVE FORWARD</span>
        </h1>

        <p className="mt-6 max-w-[520px] text-[15px] leading-[1.55] text-[#191D2A] md:text-[16px]">
          Life doesn&apos;t have a map. But it does have soundboards: people
          whose <strong className="font-bold">ideas</strong>,{" "}
          <em className="italic underline">experiences</em> and{" "}
          <em className="italic underline">connections</em> can chart your next
          move.
        </p>

        <form className="mt-10 w-full max-w-[420px] rounded-2xl border border-[#F7F5F5] bg-[#F7ABA8] px-6 py-6 text-center shadow-sm">
          <p className="text-[14px] leading-[1.45] text-[#191D2A]">
            For events, workshops, and creative experiments straight to your
            inbox.
          </p>
          <input
            type="email"
            name="email"
            placeholder=""
            aria-label="Email address"
            className="mt-4 w-full rounded-full border-0 bg-[#F7F5F5] px-5 py-2.5 text-[14px] text-[#191D2A] outline-none focus:ring-2 focus:ring-[#191D2A]/20"
          />
          <button
            type="submit"
            className="mt-3 w-full rounded-full bg-[#2BB673] py-2.5 text-[14px] font-medium text-[#F7F5F5] hover:bg-[#191D2A]"
          >
            Submit
          </button>
        </form>
      </section>

      <section className="bg-[#191D2A] py-12">
        <div className="mx-auto flex w-full max-w-[950px] flex-col items-center justify-between gap-8 px-6 md:flex-row md:items-start">
          <h2 className="font-[&quot;Jubel&quot;,system-ui,sans-serif] text-[36px] leading-none text-[#F7F5F5]">
            Our Mission
          </h2>
          <div className="max-w-[450px] text-center md:text-left">
            <p className="text-[16px] leading-[1.5] text-[#F7F5F5]">
              In the next 12 months (July 2025 to July 2026) we are on a mission
              to find 1000 people mentors. If you are up for being a mentor, or
              want to find a mentor, or both, sign up below.
            </p>
            <div className="mt-5 flex flex-col items-center gap-3 md:items-start">
              <Link
                href="https://forms.gle/HPok7xL6ixRVNWEH7"
                className="w-full rounded-full border border-[#F7F5F5] px-6 py-2 text-center text-[14px] tracking-[0.04em] text-[#F7F5F5] hover:opacity-90"
              >
                Become Someones Mentor &gt;
              </Link>
              <Link
                href="https://forms.gle/HPok7xL6ixRVNWEH7"
                className="w-full rounded-full border border-[#F7F5F5] px-6 py-2 text-center text-[14px] tracking-[0.04em] text-[#F7F5F5] hover:opacity-90"
              >
                Find Yourself a Mentor &gt;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7ABA8] px-6 py-8 text-center">
        <h2 className="font-[&quot;Jubel&quot;,system-ui,sans-serif] mx-auto max-w-[760px] text-[32px] leading-[0.95] tracking-[-0.03em] text-[#191D2A] md:text-[44px]">
          YOUR NEXT OPPORTUNITY ISN&apos;T
          <br />
          WAITING IN A TO-DO LIST.
        </h2>
        <p className="mt-2 font-['Caveat',cursive] text-[22px] text-[#191D2A]">
          It&apos;s in a relationship you haven&apos;t built yet.
        </p>
      </section>

      <section
        className="bg-cover bg-center bg-no-repeat px-4 py-12"
        style={{
          backgroundColor: "#F05336",
          backgroundImage: "url('/soundboard-circular-icon-pattern-red.png')",
        }}
      >
        <div className="mx-auto flex w-full max-w-[680px] flex-wrap items-start justify-center gap-8">
          <FrameCard title="FIND YOURSELF A MENTOR">
            <p>
              <strong className="font-bold">
                Scripts, templates and talk tracks.
              </strong>{" "}
              We&apos;ll give you the language to find and keep new connections.
            </p>
            <p>
              <strong className="font-bold">
                Leave with gravitas and inspiration.
              </strong>{" "}
              Our events will guarantee to inspire you, and leave you with a new
              sense of confidence.
            </p>
          </FrameCard>
          <FrameCard title="GROW YOUR BOOK OF BUSINESS">
            <p>
              <strong className="font-bold">Shortcuts to killer connections.</strong>{" "}
              Get the email strategy that brought in €30k worth of work in a few
              months.
            </p>
            <p>
              <strong className="font-bold">Progress you can feel.</strong> We
              don&apos;t give homework, you&apos;ll have made a connection by the end
              of the workshop.
            </p>
          </FrameCard>
        </div>
      </section>

      <section className="bg-[#F7F5F5] px-6 py-12 text-center">
        <h2 className="font-[&quot;Jubel&quot;,system-ui,sans-serif] text-[36px] leading-none tracking-[-0.03em] text-[#191D2A] md:text-[48px]">
          THE{" "}
          <Image
            src="/soundboard-wordmark-black.png"
            alt="Soundboard"
            width={200}
            height={60}
            className="mx-1 inline-block h-[48px] w-auto align-middle md:h-[60px]"
          />{" "}
          METHOD
        </h2>
        <p className="mx-auto mt-2 max-w-[580px] text-[16px] leading-[1.5] text-[#191D2A]">
          Find yourself a mentor and connect more meaningfully with people in
          your network.
        </p>
        <div className="mx-auto mt-12 flex w-full max-w-[1000px] flex-nowrap items-start justify-center gap-6 overflow-x-auto px-2 pb-2">
          <MethodCard
            heading={<>TUNING<br />INWARD</>}
            copy="Participants learn how to identify what they are good at, the value they can add and how to articulate it."
            tone="#F8B617"
          />
          <MethodCard
            heading={<>CONNECTING<br />OUTWARD</>}
            copy="Pitch yourself, learn how to influence and grow your network. Improve internal comms as well as external connections."
            tone="#F05336"
          />
          <MethodCard
            heading={<>TAKING<br />ACTION</>}
            copy="No one leaves without making a contact. We orient everything around taking as much action as possible in the session."
            tone="#F7ABA8"
          />
        </div>
      </section>

      <section className="bg-[#2BB673] px-5 py-9 text-center">
        <h2 className="font-[&quot;Jubel&quot;,system-ui,sans-serif] mx-auto max-w-[790px] text-[34px] leading-[0.95] tracking-[-0.03em] text-[#191D2A] md:text-[44px]">
          WE GIVE YOU SHORTCUTS TO KILLER CONNECTIONS, SO YOU SEND US EMAILS
          LIKE THESE.
        </h2>
        <div className="mx-auto mt-6 flex w-full max-w-[760px] flex-wrap justify-center gap-6">
        <img
  src="/testimonial-1.png"
  alt="Testimonial email"
  className="w-[300px] rounded-[11px] border-[5px] border-[#191D2A]"
/>
<img
  src="/testimonial-2.png"
  alt="Testimonial email"
  className="w-[300px] rounded-[11px] border-[5px] border-[#191D2A]"/>
        </div>
      </section>

      <section
        id="employee-workshop"
        className="bg-cover bg-center bg-no-repeat px-4 py-14"
        style={{
          backgroundColor: "#F05336",
          backgroundImage: "url('/soundboard-icon-pattern-red.png')",
        }}
      >
        <div className="mx-auto w-full max-w-[420px] rounded-[11px] border-[5px] border-[#191D2A] bg-[#F7F5F5] p-6 shadow-[0_4px_0_#191D2A]">
          <h3 className="font-[&quot;Jubel&quot;,system-ui,sans-serif] text-center text-[40px] leading-[0.9] tracking-[-0.03em] text-[#191D2A]">
            JOIN THE NEXT
            <br />
            WORKSHOP
          </h3>
          <p className="mt-4 text-center text-[15px] leading-[1.5] text-[#191D2A]">
            On the last Thursday of every month we&apos;ll host a free hour long
            workshop designed to help you find a mentor. Each week will cover
            different topics and when you sign up you get access to past
            recordings.
          </p>
          <p className="mt-4 text-center text-[14px] leading-[1.45] text-[#191D2A]">
            For events, workshops, and creative experiments straight to your
            inbox.
          </p>
          <input
            type="email"
            name="workshop-email"
            placeholder=""
            aria-label="Email address"
            className="mt-4 w-full rounded-full border-[5px] border-[#191D2A] bg-[#F7F5F5] px-5 py-2.5 text-[14px] text-[#191D2A] outline-none focus:ring-2 focus:ring-[#191D2A]/20"
          />
          <button
            type="button"
            className="mt-3 w-full rounded-full border-[5px] border-[#191D2A] bg-[#2BB673] py-2.5 text-[14px] font-bold uppercase tracking-[0.08em] text-[#F7F5F5]"
          >
            Submit
          </button>
        </div>
      </section>
    </main>
  );
}
