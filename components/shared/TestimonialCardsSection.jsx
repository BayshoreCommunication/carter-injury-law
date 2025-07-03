import Image from "next/image";

const TestimonialCardsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "RAY",
      category: "CAR ACCIDENT",
      accentColor: "red",
      videoUrl: "https://www.youtube.com/embed/CBXh_z7koPM",
      testimonial: "Carter Injury Law provided excellent legal support during my car accident. They remained clear, communicative, and professional throughout. They promptly answered all my questions. David was aggressive and committed during negotiation, securing a much better settlement than expected. I highly recommend Carter Injury Law for their professionalism and strong advocacy."
    },
    {
      id: 2,
      name: "CHRISTINA", 
      category: "CAR ACCIDENT",
      accentColor: "green",
      videoUrl: "https://www.youtube.com/embed/-UagpRHfFE8",
      testimonial: "After a frustrating two-year experience with a large law firm that showed minimal communication or progress, switching to Carter Injury Law made an immediate difference. David and his team were responsive, compassionate, and actually cared about my case. Within just a few months, they accomplished more than the previous firm had in years. I highly recommend Carter Injury Law for anyone seeking a dedicated and effective legal team."
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className="text-yellow-400 text-lg">
        ★
      </span>
    ));
  };

  return (
    <section 
      className="relative py-16 px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("https://bayshore.nyc3.cdn.digitaloceanspaces.com/carterEmailTemplate/image%2023.png")'
      }}
    >
      
      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="rounded-lg overflow-hidden shadow-xl mx-4">
              {/* Video Section */}
              <div className="relative aspect-video bg-black">
                <iframe
                  src={testimonial.videoUrl}
                  title={`${testimonial.name} Testimonial Video`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                

                
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Name */}
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {testimonial.name.charAt(0) + testimonial.name.slice(1).toLowerCase()}
                </h3>

                {/* Star Rating */}
                <div className="flex mb-4">
                  {renderStars(5)}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {testimonial.testimonial}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCardsSection; 