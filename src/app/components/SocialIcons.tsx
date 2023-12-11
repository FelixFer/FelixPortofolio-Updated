import { social } from "../utils/social";

const SocialIcons = () => {
  return (
    <div className="justify-center lg:justify-start flex flex-row gap-3 text-3xl text-slate-400 mt-5 mb-20 lg:mt-auto">
      {social.map((data, key) => (
        <a href={data.link} key={key} target='_blank'>
          <data.logo className="cursor-pointer transition-all hover:text-slate-50 hover:animate-pulse hover:scale-125" />
        </a>
      ))}
    </div>
  );
}
export default SocialIcons;