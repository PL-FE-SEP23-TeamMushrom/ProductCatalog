import React from "react";

const About = () => {
  return (
    <div className="flex flex-col p-4 sm:mx-8 md:mx-16 lg:mx-24 flex-wrap md:w-600 lg:w-600">
      <div className="font-bold text-2xl mb-5">
        <h1>About</h1>
      </div>
      <hr className="border-t-2" />
      <div className="font-bold text-xl mt-10 mb-5">
        <h2>And then there was Pro</h2>
      </div>
      <p className="mt-3 mb-3">
        A transformative triple-camera system that adds tons of capability
        without complexity.
      </p>
      <p className="mt-3 mb-3">
        An unprecedented leap in battery life. And a mind-blowing chip that
        doubles down on machine learning and pushes the boundaries of what a
        smartphone can do. Welcome to the first iPhone powerful enough to be
        called Pro.
      </p>
      <div className="font-bold text-xl mt-10 mb-5">
        <h2>Camera</h2>
      </div>
      <p className="mt-3 mb-3">
        Meet the first triple-camera system to combine cutting-edge technology
        with the legendary simplicity of iPhone. Capture up to four times more
        scene. Get beautiful images in drastically lower light. Shoot the
        highest-quality video in a smartphone — then edit with the same tools
        you love for photos. You`ve never shot with anything like it.
      </p>
      <div className="font-bold text-xl mt-10 mb-5">
        <h2>
          Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love
          it.
        </h2>
      </div>
      <p className="mt-3 mb-3">
        iPhone 11 Pro lets you capture videos that are beautifully true to life,
        with greater detail and smoother motion. Epic processing power means it
        can shoot 4K video with extended dynamic range and cinematic video
        stabilization — all at 60 fps. You get more creative control, too, with
        four times more scene and powerful new editing tools to play with.
      </p>
    </div>
  );
};

export default About;
