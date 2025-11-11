import { LoremPicsum } from "react-lorem-picsum";
import ShinyText from "../../components/ShinyText/ShinyText";

const data = [
  {
    username: "JobSeekerJane",
    imageurl: "https://example.com/images/jane.jpg",
    successStory:
      "I was struggling to find a job in my field for months until a friend recommended this job board. Within two weeks, I found several relevant postings and landed my dream job as a marketing manager! The interface was so easy to use, and the filters really helped narrow down my search. I'm so grateful for this platform!",
  },
  {
    username: "TechGuruTom",
    imageurl: "https://example.com/images/tom.jpg",
    successStory:
      "As a software developer, I've used many job boards, but this one stands out. The quality of the job postings was exceptional, and I appreciated the direct links to company career pages. I secured a fantastic senior developer role that offered everything I was looking for, thanks to this platform. Highly recommend it to fellow tech professionals!",
  },
  {
    username: "CreativeCarla",
    imageurl: "https://example.com/images/carla.jpg",
    successStory:
      "Finding creative roles can be tough, but this job board had a surprising number of opportunities for graphic designers. I found a great position at a design agency that perfectly matches my skills and aspirations. The application process was smooth, and I received prompt responses. It truly accelerated my job search!",
  },
  {
    username: "SalesStarSam",
    imageurl: "https://example.com/images/sam.jpg",
    successStory:
      "I've been in sales for over a decade, and I was looking for a new challenge. This job board connected me with several top-tier companies, and I eventually accepted a regional sales manager position. The platform's notifications were super helpful, alerting me to new opportunities as soon as they were posted. It made my job hunt efficient and successful!",
  },
  {
    username: "FinanceFiona",
    imageurl: "https://example.com/images/fiona.jpg",
    successStory:
      "After completing my MBA, I was eager to jump into the finance industry. This job board was an invaluable resource, providing access to a wide range of roles from investment banking to financial analysis. I found an amazing entry-level analyst position at a reputable firm, and I couldn't be happier with how my career is starting. Thank you!",
  },
  {
    username: "DataDan",
    imageurl: "https://example.com/images/dan.jpg",
    successStory:
      "I spent weeks sifting through generic postings elsewhere. This platform's specialization in data science roles was a game-changer. I secured a Senior Data Scientist position with excellent compensation. The detail in the job descriptions here saved me so much time!",
  },
  {
    username: "RemoteRachel",
    imageurl: "https://example.com/images/rachel.jpg",
    successStory:
      "I was specifically looking for a fully remote position, and the filtering tools here worked flawlessly. I accepted a Content Strategist role that allows me to work from anywhere. It truly connected me with location-independent opportunities I couldn't find easily before.",
  },
  {
    username: "HRHarry",
    imageurl: "https://example.com/images/harry.jpg",
    successStory:
      "Switching from generalist HR to a specialist role was my goal. This job board highlighted several niche Talent Acquisition Manager roles. I was hired by a fantastic start-up! The professional quality of the listings made all the difference.",
  },
  {
    username: "EngineeringErin",
    imageurl: "https://example.com/images/erin.jpg",
    successStory:
      "Finding civil engineering positions outside of major cities can be tough, but this platform had a great geographical reach. I found a great Field Engineer role close to home, cutting my commute time significantly. This board made my local search successful!",
  },
  {
    username: "MarketingMick",
    imageurl: "https://example.com/images/mick.jpg",
    successStory:
      "After a brief career break, I needed an effective way to re-enter the workforce. The platform's 'Returnship' options and supportive company profiles helped me land a Digital Marketing Coordinator role. It gave me the confidence boost I needed!",
  },
  {
    username: "HealthcareHolly",
    imageurl: "https://example.com/images/holly.jpg",
    successStory:
      "As a registered nurse looking for an administrative role, I found this job board to be incredibly organized. I secured a Clinical Operations Manager position at a leading hospital network. It streamlined my search in the competitive healthcare sector.",
  },
  {
    username: "ProductPaul",
    imageurl: "https://example.com/images/paul.jpg",
    successStory:
      "I utilized the resume critique service linked on this job board before applying. It must have helped! I got multiple interviews and ultimately accepted a fantastic Product Owner role at a top SaaS company. This platform is a full-service career booster.",
  },
  {
    username: "EduEdward",
    imageurl: "https://example.com/images/edward.jpg",
    successStory:
      "I was looking to transition from classroom teaching to curriculum development. This job board had a dedicated section for education technology roles. I landed a Curriculum Designer job that perfectly aligns with my passion and expertise. A true niche finder!",
  },
  {
    username: "LogisticsLena",
    imageurl: "https://example.com/images/lena.jpg",
    successStory:
      "The supply chain industry is booming, and this job board had the most current listings. I found a Supply Chain Analyst position with a global logistics firm. The ability to filter by company size was particularly helpful in finding the right fit.",
  },
  {
    username: "JuniorJack",
    imageurl: "https://example.com/images/jack.jpg",
    successStory:
      "As a recent graduate, I needed entry-level roles with clear training paths. This job board had great 'Junior' and 'Trainee' options. I am now working as a Junior Accountant and loving the mentorship provided. This site is excellent for starting your career!",
  },
];

const MySlider = () => {
  
  const repeatedChildren = [...data, ...data];
  return (
    <div className="m-20">
      <h1 className="text-3xl subtitle-text m-2 text-center">
        <ShinyText
          text="  What our users feel about this platform ..."
          disabled={false}
          speed={3}
          className="custom-class"
        />
      </h1>
      <div className="carousel carousel-container carousel-center bg-blue-100 rounded-box space-x-1 p-1 m-2 group">
        <div className="carousel-item carousel-track">
          {repeatedChildren.map((d, index) => (
            <div
              key={index}
              className="carousel-card bg-white text-blue-600  rounded-xl max-w-96 m-2 p-2 h-[600px] flex flex-col"
            >
              <div className="rounded-t-xl h-[300px] bg-blue-300 flex justify-center items-center">
                <LoremPicsum
                  width={250}
                  height={250}
                  random
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col h-[300px] justify-center items-center p-1 gap-4 word-wrap">
                <p className="text-3xl font-bold">{d.username}</p>
                <div className="successStory text-wrap">
                  <p className="text-lg text-black mt-2">
                    {d.successStory.slice(0, 100)}...
                  </p>
                </div>
                <button className="btn bg-blue-400 text-white hover:bg-blue-800 rounded-xl">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySlider;
