import Contact from "./components/contact";

export default function App() {
  return (
    <>
      <div className="contact-container">
        <Contact
          img="/public/images/mr-whiskerson.png"
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Contact
          img="/public/images/fluffykins.png"
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluff@me.com"
        />
        <Contact
          img="/public/images/felix.png"
          name="Felix"
          phone="(212) 555-4567"
          email="thecat@hotmail.com"
        />
        <Contact
          img="/public/images/pumpkin.png"
          name="Pumpkin"
          phone="(0800) CAT KING"
          email="pumpkin@abc.com"
        />
      </div>
    </>
  );
}
