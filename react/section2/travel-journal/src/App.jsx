import Header from "./components/Header";
import Entry from "./components/Entry";
import hero_pic from "./assets/hero-location.jpg";

export default function App() {
  return (
    <>
      <Header />
      <Entry
        img={{ src: hero_pic, alt: "Sydney Opera House" }}
        title="Sydney Opera House"
        country="Australia"
        googleMapsLink="https://www.google.com/maps/place/%E6%82%89%E5%B0%BC%E6%AD%8C%E5%89%A7%E9%99%A2/@-33.8567844,151.2152967,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?entry=ttu&g_ep=EgoyMDI1MDYwOS4wIKXMDSoASAFQAw%3D%3D"
        dates="27 May,2021 - 8 Jun,2021"
        text="The Sydney Opera House is a multi-venue performing arts centre in
              Sydney. Located on the foreshore of Sydney Harbour, it is widely
              regarded as one of the world's most famous and distinctive buildings."
      />
    </>
  );
}
