import { CheckCircle2 } from "lucide-react";
import user1 from "../assets/profile-pic/user1.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <section id="workflow" className="mt-24 px-6 lg:px-12">
      {/* Heading */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide text-foreground">
        Accelerate your{" "}
        <span className="text-gradient">workflow.</span>
      </h2>

      {/* Content */}
      <div className="flex flex-wrap justify-center items-center mt-16 lg:mt-20">
        {/* Image Side */}
        <div className="p-4 w-full lg:w-1/2 flex justify-center">
          <div className="glass rounded-xl overflow-hidden max-w-lg w-full">
            <img
              src={user1}
              alt="Coding"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Checklist Side */}
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-10 items-start">
              {/* Icon */}
              <div className="flex items-center justify-center h-12 w-12 rounded-full glass text-accent-foreground mr-6">
                <CheckCircle2 size={22} />
              </div>

              {/* Text */}
              <div>
                <h5 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h5>
                <p className="text-md text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
