
import Image from "next/image";
import '../components/about.css'
export default function About(){
  return (
    <div className='container'>
    
      <section >
        <h1>About Furnish Fiesta</h1>
        <p>
          At Furnish Fiesta, we believe that every piece of furniture tells a story and brings character to your living spaces. Our mission is to provide beautiful, functional, and lasting furniture that transforms any room into a place of comfort and style.
        </p>
      </section>

      <section className="home.img" style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '500px',   
  }}>
        <Image src='/fur-1.jpeg' alt="Quality Furniture" width={600} height={400} style={{
      borderRadius: '15px',  
      maxWidth: '100%',      
      height: 'auto'         
    }}/>
      </section>

      <section>
        <h2>Our Commitment to Quality</h2>
        <p>
          Furnish Fiesta is dedicated to sourcing only the finest materials to ensure that every item meets our high standards of durability and aesthetics.
        </p>

        <h2>Customer-Centric Approach</h2>
        <p>
          Your satisfaction is our priority. Our team is passionate about guiding you through our collections and helping you find the perfect pieces for your home.
        </p>

        <h2>Our Story</h2>
        <p>
          Established in [1949], Furnich Fiesta started as a small family business with a love for finely crafted furniture.
        </p>

        <h2>Why Choose Us?</h2>
        <p>
          Choosing Furnish Fiesta means investing in furniture that stands the test of time. We are proud to be your partner in creating spaces that inspire joy, relaxation, and togetherness.
        </p>
      </section>
    
        </div>
    )
}