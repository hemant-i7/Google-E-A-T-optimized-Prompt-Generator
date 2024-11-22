export const generateFullPrompt = (data: {
  name: string;
  years: string;
  websiteName: string;
  industry: string;
}) => {
  return `Hey there! I'm ${data.name}, and I've been blogging for over ${data.years} years—long enough to know that getting noticed by Google Discover isn't as easy as it looks. That's why I recently kicked off my new website, ${data.websiteName}. My mission? To get it to rank like a rockstar on Google Discover and still keep my sanity intact.

Now, I could sit here writing 20 posts a day and pretend I have it all figured out, but let's be real: That's not happening. And that's where you come in. I'll be passing you some articles from other sources (don't worry, I won't make you work in the dark), and your job is to rewrite them so they feel fresh, unique, and like they were written by me—no AI bots involved. It's all about making sure Google doesn't think it's just another run-of-the-mill article, but rather, the kind of content that makes it want to say, "Hey, this deserves to be in Google Discover."

Here's the game plan for ${data.industry} content:

1. 🎯 E-A-T (Expertise, Authoritativeness, Trustworthiness)
Let's show Google we know our stuff in ${data.industry}. The more expertise we show, the more likely we are to get those sweet authority points.

2. 🔍 SEO Magic
- Strategic keyword placement (but keep it natural!)
- Internal linking to boost site engagement
- Authoritative external links
- Proper meta descriptions and header structure

3. 🚀 Google Discover-Friendly Content
- Eye-catching headlines (no clickbait!)
- Latest ${data.industry} trends and updates
- Scannable, actionable content

4. 💫 Engagement Boosters
- Clear sections with compelling subheadings
- Practical tips and key takeaways
- Strong calls-to-action

5. 🎨 Rich Media
- Relevant images and infographics
- Optimized alt text and file names
- Fast-loading media elements

6. 📱 Mobile Optimization
- Responsive design
- Quick loading times
- Easy navigation

7. 🔥 Fresh Content
- Breaking news in ${data.industry}
- Trending topics
- Regular updates

8. 🎭 My Voice (${data.name}'s Style)
- Conversational but professional
- Industry expertise with a personal touch
- Relatable examples and analogies

Remember: We're not just creating content—we're building a trusted resource in the ${data.industry} space that Google Discover can't resist featuring! Let's make ${data.websiteName} the go-to destination for quality ${data.industry} content. 🎉`;
};

export const generateImagePrompt = (data: {
  heading: string;
  imageType: string;
  colorStyle: string;
}) => {
  return `Create a ${data.imageType.toLowerCase()} image of ${data.heading}. The image should feature a ${data.colorStyle.toLowerCase()} color palette and maintain professional quality with the following specifications:

Key Elements:
- Main Subject: ${data.heading}
- Style: ${data.imageType}
- Color Theme: ${data.colorStyle}
- Quality: Ultra-high resolution
- Composition: Professional, balanced layout

Technical Details:
- Sharp focus on main elements
- Professional lighting and shadows
- Detailed textures and surfaces
- Balanced composition
- High-quality rendering

The final image should be suitable for professional use, maintaining artistic integrity while capturing the essence of the description in a ${data.imageType.toLowerCase()} style with ${data.colorStyle.toLowerCase()} tones.`;
};