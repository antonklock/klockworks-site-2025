import { Metadata } from "next";
import MultiPhotoViewer from "@/components/PhotoView/MultiPhotoViewer";
import SinglePhotoViewer from "@/components/PhotoView/SinglePhotoViewer";

export const metadata: Metadata = {
  title: "Raise Your Glass - Project",
  description: "A detailed look at the Raise Your Glass project",
};

export default function RaiseYourGlassPage() {
  return (
    <article className="max-w-4xl mx-auto px-12 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Raise Your Glass</h1>
        <div className="text-gray-600">
          <time dateTime="2025-03-21">March 21, 2025</time>
        </div>
      </header>

      <div className="prose prose-lg font-mono">
        <p className="lead mb-6">
          Partnering with the rowdy pirate folk band{" "}
          <a
            className="text-kwRed hover:underline"
            href="https://www.yebanishedprivateers.com/"
            target="_blank"
          >
            Ye Banished Privateers
          </a>{" "}
          (YBP), and the amazing cinematographer{" "}
          <a
            className="text-kwRed hover:underline"
            href="https://www.yebanishedprivateers.com/"
            target="_blank"
          >
            Kenneth Ly
          </a>{" "}
          we developed and produced &quot;Raise Your Glass&quot; a full-motion
          interactive music video experience. Set to their rousing sea
          shanty-style music, this browser-based adventure casts the user as a
          pirate waking up after a wild night, tasked with finding three coins
          to settle their tavern debt before the song ends and their crew sails
          without them.
        </p>

        <strong>
          Try it Yourself:{""}
          <a
            className="text-kwRed hover:underline ml-2"
            href="https://raiseyourglass.yebanishedprivateers.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Experience the interactive adventure here
          </a>
        </strong>

        <h2 className="font-bold text-4xl mt-8 mb-2">The Experience</h2>
        <p className="mb-6">
          The adventure begins as the user groggily awakens in a tavern loft.
          Through point-and-click interactions within the live-action video,
          players explore the environment and the band members. Each click
          trigger different video segments, revealing new paths or items. The
          goal is a race against the clock – the duration of the YBP track
          &quot;Raise Your Glass&quot; – to find three coins and secure freedom.
          Failure means being left behind as the ship departs.
        </p>

        {/* TODO: REPLACE WITH PROPER IMAGE URLS */}
        <MultiPhotoViewer
          images={[
            "https://framerusercontent.com/images/epLmWl5fa4PEudb4asXjLR3LYQA.jpg",
            "https://framerusercontent.com/images/kXPinqRbVlEyxXXmQzy9cW9Tk.jpg",
            "https://framerusercontent.com/images/Uf1NOnG7pOhZEZLumFZ9b3bGZao.jpg",
            "https://framerusercontent.com/images/znaCywKLEAwBZCV9vaofL80em1c.jpg",
            "https://framerusercontent.com/images/7q020jLsE9mYj5oXeCKWTpMfA.jpg",
          ]}
        />

        <h2 className="font-bold text-4xl mt-8 mb-2">
          Development & Production
        </h2>
        <p className="mb-6">
          The project kicked off with collaborative concept development
          alongside YBP, mapping out the branching narrative possibilities in a
          detailed flowchart.{" "}
        </p>
        {/* TODO: REPLACE WITH PROPER IMAGE URLS */}
        <SinglePhotoViewer
          image={
            "https://framerusercontent.com/images/oo7y1SK2pLTrqarg18PNPc1bocg.png?scale-down-to=2048"
          }
        />

        <p className="mb-6">
          To visualize scene blocking and camera angles early on, I created
          preliminary 3D mockups using Unreal Engine. These were also used for
          early testing the concept of seamless video switching in the browser.
        </p>
        {/* TODO: REPLACE WITH PROPER IMAGE URLS */}
        <MultiPhotoViewer
          images={[
            "https://framerusercontent.com/images/EK02VuVvC0oQaQQZz3F37fJtUP8.png",
            "https://framerusercontent.com/images/jCfIFa0sQeXzeCKdIxIupxnP8o.png",
            "https://framerusercontent.com/images/MEELFy3tHeRfJyjmRZmwTkR2WqA.png",
          ]}
        />

        <p className="mb-6">
          The core full-motion video was shot over four days, plus an additional
          day dedicated to the opening scene, utilizing various locations around
          Umeå, Sweden. We employed creative practical effects to enhance the
          visuals, such as rigging internal lighting to simulate sunlight
          pouring through a newly opened boarded-up window – a simple trick with
          a fantastic result.
        </p>
        {/* TODO: REPLACE WITH PROPER IMAGE URLS */}
        <MultiPhotoViewer
          images={[
            "https://framerusercontent.com/images/MdgLGZcP2DLB4rG0D4uThzKCCSk.jpg",
            "https://framerusercontent.com/images/cP3HDJ9d5r4PSTwrCqlUoJ1UM.jpg",
          ]}
        />

        <h2 className="font-bold text-4xl mt-8 mb-2">
          Technical Implementation & Challenges
        </h2>
        <p className="mb-6">
          A key requirement from YBP was high accessibility: the experience
          needed to run smoothly in a web browser without requiring any
          downloads. This led to exploring various web video technologies.
        </p>

        <h3 className="font-bold text-xl">Core functionality and challenges</h3>
        <p className="mb-6">
          The core technical solution involves dynamically stacking HTML5 video
          elements, preloading potential next video clips based on user
          interaction points, and unloading clips that are no longer reachable
          in the narrative tree.
        </p>
        <p className="mb-6">
          Initial tests with streaming platforms like Cloudflare Stream and MUX
          revealed potential cost issues due to their quota-based pricing. Given
          the video&apos;s length (over four minutes) and the aggressive
          preloading strategy needed for seamless transitions, these quotas
          could be rapidly consumed, leading to great costs at scale.
        </p>
        <p className="mb-6">
          Inspired by research (including helpful insights from{" "}
          <a
            className="text-kwRed hover:underline"
            href="https://screencasting.com/cheap-video-hosting"
            target="_blank"
            rel="noopener noreferrer"
          >
            screencasting.com&apos;s blog on affordable video hosting
          </a>
          {""}
          ), I implemented a more cost-effective and robust solution. This ment
          transcoding the source video files into HLS (HTTP Live Streaming)
          format using FFMPEG and hosting these segmented video streams on
          Cloudflare R2 storage. The critical advantage of R2 is its lack of
          egress fees, making it exceptionally well-suited for this high-volume
          streaming scenario while providing valuable hands-on experience with
          HLS transcoding. I modified screencasting.com&apos;s transcoding
          script to fit our needs and allow for batch processing. For uploading
          and managing the files in the R2 storage I used rclone which gave me
          all the flexibility I needed for this.
        </p>

        <h2 className="font-bold text-4xl mt-8 mb-2">Frontend</h2>
        <p className="mb-6">
          The frontend was built using Next.js, managing the video component
          loading, swapping, and unloading logic. For interactivity, PixiJS was
          layered over the video elements, providing an efficient way to manage
          hitboxes, graphical overlays, and the custom point-and-click style
          cursor, enhancing the old-school adventure game aesthetic.
        </p>
        <p className="mb-6">
          An experimental feature involving rendering the video to a canvas and
          applying real-time shader effects (distortions, color grading) was
          prototyped. While promising on high-end machines, performance
          bottlenecks on lower-spec devices and mobiles led to its exclusion
          from the final release due to budget and time constraints. Optimizing
          the render pipeline (potentially avoiding the video-element-to-canvas
          round trip) remains an interesting area for future exploration.
        </p>

        <p className="mb-6">
          Since the music is running as it&apos;s own audio file the videos are
          being synced to it when they are preloaded. If the video drifts for
          some reason it can be slightly slowed down or sped up to get back into
          sync.
        </p>

        <h2 className="font-bold text-4xl mt-8 mb-2">
          Data & Future Potential
        </h2>
        <p className="mb-6">
          Each playthrough is anonymously tracked by logging interaction choices
          (hitbox clicks) and timestamps to Supabase. This data allows for easy
          session recreation and analysis. While not implemented within the
          initial budget, this tracking opens possibilities for future add-ons,
          such as generating a personalized, non-interactive video cut of the
          user&apos;s specific path or creating a text-based summary (&quot;You
          first went to the bar, then took the broom...&quot;) based on their
          unique journey.
        </p>
      </div>
    </article>
  );
}
