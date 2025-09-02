import TravelAnimation from "@/assets/travel-tickets.json";
import Lottie from "react-lottie";

export default function TravelTickets() {
  return (
    <section>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: TravelAnimation,
        }}
      />
    </section>
  );
}
