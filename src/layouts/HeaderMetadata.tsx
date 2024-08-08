import * as React from "react";
import Head from "next/head";

export default function HeaderMetadata(): React.JSX.Element {
  return (
    <Head>
      <title>Andelle Gianzra Basae&apos;s Portfolio Website</title>

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        name="subject"
        content="Andelle Gianzra Basae, Mobile Developer | Video Editor | Designer"
      />
      <meta
        name="description"
        content="Hi Precious People!👋, I'am Andelle Gianzra Basae. A  Mobile Developer from Indonesia. This is my personal portfolio website that created using Next.js and Chakra UI"
      />
      <meta
        name="author"
        content="Andelle Gianzra Basae"
      />

      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
  );
}
