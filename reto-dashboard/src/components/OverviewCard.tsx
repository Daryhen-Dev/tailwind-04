import facebookLogo from "../assets/images/icon-facebook.svg";
import twitterLogo from "../assets/images/icon-twitter.svg";
import instagramLogo from "../assets/images/icon-instagram.svg";
import youtubeLogo from "../assets/images/icon-youtube.svg";
import iconUp from "../assets/images/icon-up.svg";
import iconDown from "../assets/images/icon-down.svg";

interface Props {
  id: string;
  network: "Facebook" | "Twitter" | "Instagram" | "YouTube";
  user: string;
  audienceType: string;
  audience: number;
  today: number;
  isUp: boolean;
}

interface TodayProps {
  id: string;
  network: "Facebook" | "Twitter" | "Instagram" | "YouTube";
  statsType: string;
  stats: number;
  porcentage: number;
  isUp: boolean;
}

const networkLogos = {
  Facebook: facebookLogo,
  Twitter: twitterLogo,
  Instagram: instagramLogo,
  YouTube: youtubeLogo,
};
const networkColors = {
  Facebook: "bg-facebook",
  Twitter: "bg-twitter",
  Instagram: "bg-gradient-to-r from-[hsl(37,97%,70%)] to-[hsl(329,70%,58%)]",
  YouTube: "bg-youtube",
};

const convertNumberTok = (numero: number) => {
    if (numero >= 10000) {
      numero = numero / 1000;
      return `${numero}k`;
    }
    return numero;
  };

export const OverviewCard = ({
  user,
  network,
  audienceType,
  audience,
  today,
  isUp,
}: Props) => {

  return (
    <article className="bg-light-grayish-blue w-[326px] h-[216px] mb-4 rounded-[5px] mx-auto overflow-hidden text-center dark:bg-dark-desaturated-blue hover:brightness-95 cursor-pointer hover:dark:brightness-125">
      <span
        className={`${networkColors[network]} block w-full h-1 mb-8`}
      ></span>
      <div className="flex items-center justify-center gap-2 ">
        <img src={networkLogos[network]} alt={`logo ${network}`} />
        <p className="text-xs font-bold text-dark-grayish-blue">{user}</p>
      </div>
      <p className="text-[56px] font-bold text-very-dark-blue dark:text-white">
        {convertNumberTok(audience)}
      </p>
      <p className="uppercase tracking-[5px] text-xs text-dark-grayish-blue mb-6">
        {audienceType}
      </p>
      <div className="flex items-center justify-center gap-1 ">
        <img src={isUp ? iconUp : iconDown} alt="icon arrow" />
        <p
          className={`text-xs font-bold ${
            isUp ? "text-lime-green" : "text-bright-red"
          }`}
        >
          {today} Today
        </p>
      </div>
    </article>
  );
};

export const OverviewTodayCard = ({
  network,
  statsType,
  stats,
  porcentage,
  isUp,
}: TodayProps) => {
  return (
    <article className="bg-light-grayish-blue w-[326px] h-[125px] mb-4 mx-auto rounded-[5px] p-[27px] cursor-pointer hover:brightness-95 hover:dark:brightness-125 dark:bg-dark-desaturated-blue">
      <div className="flex items-center justify-between">
        <p className="text-dark-grayish-blue">{statsType}</p>
        <img src={networkLogos[network]} alt="" />
      </div>
      <div className="flex justify-between">
        <p className="text-[42px] font-bold text-very-dark-blue dark:text-white" >{convertNumberTok(stats)}</p>
        <div className="flex items-center justify-center gap-1 ">
          <img src={isUp ? iconUp : iconDown} alt="icon arrow" />
          <p
            className={`text-xs font-bold ${
              isUp ? "text-lime-green" : "text-bright-red"
            }`}
          >
            {convertNumberTok(porcentage)} Today
          </p>
        </div>
      </div>
    </article>
  );
};
