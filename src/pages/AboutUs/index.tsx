import ArrowLeftIcon from "@/assets/icons/arrow-left-02-solid-rounded 1.svg?react";
import { useNavigate } from "react-router";
import Logo from "@/assets/svgs/logo.svg?react";
import assets from "@/assets";

export default function AboutUs() {
  const navigate = useNavigate();
  const mockData = [
    {
      text: "Your vacations are really important! Your trip should be a success: a few days that you can really enjoy. This is an opportunity for you to experience our wonderful planet accompanied by our extremely professional team. Choose the best journey for you!",
      image: assets.image.BannerSeven,
    },
    {
      title: "A JTB GROUP COMPANY",
      text: "lastminute is a company of the JTB group, the largest company of tourism and travel in Asia. JTB was founded over 100 years ago and has always been characterized by searching for excellence in the travel industry. “Perfect moments always” is our motto and our commitment.",
      image: assets.image.BannerSix,
    },
    {
      title: "WE ARE ONE OF THE LARGEST TOUR OPERATORS IN THE WORLD",
      text: "This catalog has been designed for people who want to know our planet in an international environment. Travelers from US, Australia, Philippines, India, Malaysia, Indonesia, Thailand, Latin America ... In our buses, you can see the world: not only for the popular destinations but also by the people with whom you plan to visit. Lastminute has many other catalogs. Every year more than 125,000 people from 22 different countries are traveling with Lastminute.",
      image: assets.image.BannerEight,
    },
    {
      title: "A MEMBER OF THE UNWTO",
      text: "Lastminute is the only coach tour operator company in the world affiliated to the UNWTO, a United Nations travel division agency. Our company was accepted as our mission, vision and values are aligned with those of the UN World Tourism Organization.",
      image: assets.image.BannerEleven,
    },
    {
      title: "UN GLOBAL COMPACT",
      text: "lastminute Vacaciones is a member of the Spanish network of UN Global Compact, an international initiative that promotes the implementation of Ten Universally Accepted Principles to promote sustainable development in the areas of human rights and business, labor standards, environment and anti-corruption in the activities and business strategy of companies. UN Global Compact is the largest corporate social responsibility initiative in the world and is mandated by the UN to promote the Sustainable Development Goals (SDGs) in the private sector.",
      image: assets.image.BannerFive,
    },
    {
      title: "COMPANY AFFILIATED TO WTTC",
      text: "(The World Travel and Tourism Council) Only the most prestigious enterprises belong to this organization. This is where the world leaders in tourism discuss, assess and seek out new avenues for tourism in the future.",
    },
  ];

  return (
    <section className="p-4 space-y-6">
      <div>
        <div className="flex items-center">
          <ArrowLeftIcon className="size-8" onClick={() => navigate("/")} />
          <h4 className="w-full text-[.8rem] font-semibold text-center">
            Company Introduction
          </h4>
        </div>
      </div>

      <div>
        <Logo className="w-[14.5rem] h-[3.5rem] my-6 text-primary mx-auto" />
      </div>

      <div className="text-[0.875rem] space-y-6">
        <div className="space-y-6">
          {mockData.map((item, i) => (
            <div key={i}>
              {item.title && <h5 className="font-semibold">{item.title}</h5>}
              <p>{item.text}</p>
              {item.image && (
                <img src={item.image} alt="image" className="mt-4" />
              )}
            </div>
          ))}
        </div>
        <p className="text-center mt-10">
          Copyright © 2025 lastminute - All Rights Reserved.
        </p>
      </div>
    </section>
  );
}
