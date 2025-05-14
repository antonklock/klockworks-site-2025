import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raise Your Glass - Project",
  description: "A detailed look at the Raise Your Glass project",
};

export default function RaiseYourGlassPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Raise Your Glass</h1>
        <div className="text-gray-600">
          <time dateTime="2024-03-21">March 21, 2024</time>
        </div>
      </header>

      <div className="prose prose-lg">
        <p className="lead">
          Partnering with the rowdy pirate folk band Ye Banished Privateers
          (YBP), we developed and produced "Raise Your Glass" a full-motion
          interactive music video experience. Set to their rousing sea
          shanty-style music, this browser-based adventure casts the user as a
          pirate waking up after a wild night, tasked with finding three coins
          to settle their tavern debt before the song ends and their crew sails
          without them.
        </p>

        <h2>The Experience</h2>
        <p>
          The adventure begins as the user groggily awakens in a tavern loft.
          Through point-and-click interactions within the live-action video,
          players explore the environment and the band members. Each click
          trigger different video segments, revealing new paths or items. The
          goal is a race against the clock – the duration of the YBP track Raise
          Your Glass – to find three coins and secure freedom. Failure means
          being left behind as the ship departs.
        </p>
        {/* ---- Images ---- */}
        {/* <img></img> */}
        {/* <img></img> */}
        {/* <img></img> */}
        {/* <img></img> */}

        <h2>Development & Production</h2>
        <p>
          The project kicked off with collaborative concept development
          alongside YBP, mapping out the branching narrative possibilities in a
          detailed flowchart.{" "}
        </p>
        {/* ---- Images ---- */}
        {/* <img></img> */}

        <p>
          To visualize scene blocking and camera angles early on, I created
          preliminary 3D mockups using Unreal Engine. These were also used for
          early testing the concept of seamless video switching in the browser.
        </p>
        {/* ---- Images ---- */}
        {/* <img></img> */}
        {/* <img></img> */}
        {/* <img></img> */}

        <p>
          The core full-motion video was shot over four days, plus an additional
          day dedicated to the opening scene, utilizing various locations around
          Umeå, Sweden. We employed creative practical effects to enhance the
          visuals, such as rigging internal lighting to simulate sunlight
          pouring through a newly opened boarded-up window – a simple trick with
          a fantastic result.
        </p>
        {/* ---- Images ---- */}
        {/* <img></img> */}
        {/* <img></img> */}

        <h2>Technical Implementation & Challenges</h2>
        <p>
          A key requirement from YBP was high accessibility: the experience
          needed to run smoothly in a web browser without requiring any
          downloads. This led to exploring various web video technologies.
        </p>

        <h3>Core functionality and challenges</h3>
        <p>
          The core technical solution involves dynamically stacking HTML5 video
          elements, preloading potential next video clips based on user
          interaction points, and unloading clips that are no longer reachable
          in the narrative tree. Initial tests with streaming platforms like
          Cloudflare Stream and MUX revealed potential cost issues due to their
          quota-based pricing. Given the video's length (over four minutes) and
          the aggressive preloading strategy needed for seamless transitions,
          these quotas could be rapidly consumed, leading to great costs at
          scale. Inspired by research (including helpful insights from
          screencasting.com's blog on affordable video hosting), I implemented a
          more cost-effective and robust solution. This ment transcoding the
          source video files into HLS (HTTP Live Streaming) format using FFMPEG
          and hosting these segmented video streams on Cloudflare R2 storage.
          The critical advantage of R2 is its lack of egress fees, making it
          exceptionally well-suited for this high-volume streaming scenario
          while providing valuable hands-on experience with HLS transcoding. I
          modified screencasting.com's transcoding script to fit our needs and
          allow for batch processing. For uploading and managing the files in
          the R2 storage I used rclone which gave me all the flexibility I
          needed for this.
        </p>

        <h2>Frontend</h2>
        <p>
          The frontend was built using Next.js, managing the video component
          loading, swapping, and unloading logic. For interactivity, PixiJS was
          layered over the video elements, providing an efficient way to manage
          hitboxes, graphical overlays, and the custom point-and-click style
          cursor, enhancing the old-school adventure game aesthetic.
        </p>
        <p>
          An experimental feature involving rendering the video to a canvas and
          applying real-time shader effects (distortions, color grading) was
          prototyped. While promising on high-end machines, performance
          bottlenecks on lower-spec devices and mobiles led to its exclusion
          from the final release due to budget and time constraints. Optimizing
          the render pipeline (potentially avoiding the video-element-to-canvas
          round trip) remains an interesting area for future exploration.
        </p>

        <h2>Music sync</h2>
        <p>
          Each playthrough is anonymously tracked by logging interaction choices
          (hitbox clicks) and timestamps. This data allows for easy session
          recreation and analysis. While not implemented within the initial
          budget, this tracking opens possibilities for future add-ons, such as
          generating a personalized, non-interactive video cut of the user's
          specific path or creating a text-based summary ("You first went to the
          bar, then took the broom...") based on their unique journey.
        </p>

        <p>
          Try it Yourself: Experience the interactive adventure here:
          https://raiseyourglass.yebanishedprivateers.com/
        </p>
      </div>
    </article>
  );
}
