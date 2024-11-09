import Image from "next/image";
import './components/home.css'
export default function Home() {
  return (
    <div className="container">
      <h1>Where Memories Are Made!</h1>
      <p>
        Experience the power of connection, creativity, and growth. Our platform
        is designed to inspire, educate, and empower you to reach new heights.
        Join our dynamic community today and start shaping your future.
      </p>

      <section className="furnish-section">

        <div className="furnish-cards">
          <Image src="/sofa.jpeg" alt="sofa" width={300} height={300} />
          <Image src="/bed.jpeg" alt="bed" width={300} height={300} />
          <Image
            src="/dining.jpeg"
            alt="dining table"
            width={300}
            height={300}
          />
        </div>
      </section>
    </div>
  );
}
