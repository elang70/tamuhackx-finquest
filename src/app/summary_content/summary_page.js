import hsJOB from "../data/hs_main.json";
import collegeD from "../data/colleges.json";
import collegeL from "../data/colleges_loan.json";
import frJob from "../data/job_options.json";
import "reactjs-popup/dist/index.css";
// import { router, useRouter}

export default function Summary() {
  const hs_summaryInfo = hsJOB;
  const hs_job = hsJOB.choices[0];

  const firstCollege = collegeD.colleges[0];

  const loanDetails = collegeL["Financial Options"][0];

  const earlyCareerJob = frJob;

  const { job, ...otherAttributes } = hs_job;

  return (
    <>
      <h1>Congratulations!</h1>

      <h1>FinQuest Overview</h1>

      <h2>1. High School Job and Pre-planning:</h2>
      <p>
        Players start by taking on the role of a high school student eager to
        start earning money. Explore job options, considering factors such as
        hourly rates, working hours, and long-term benefits. Learn the
        importance of pre-planning and budgeting for future financial goals.
      </p>

      <h2>2. College School Choice:</h2>
      <p>
        Transition to the college phase where players must choose between
        community college, state school, or a private university. Each option
        comes with its own tuition costs, benefits, and potential career
        impacts. Emphasize the significance of balancing educational quality
        with financial considerations.
      </p>

      <h2>3. College Loans:</h2>
      <p>
        Experience the challenge of managing college expenses through various
        financial options. Decide on student loans, considering subsidized vs.
        unsubsidized, work-study programs, scholarships, and part-time
        employment. Learn about the advantages and disadvantages of each
        financial aid option.
      </p>

      <h2>4. Early Professional Career Jobs:</h2>
      <p>
        Enter the workforce and explore different job opportunities with varying
        salary, benefits, and growth prospects. Understand the importance of
        career choices in achieving financial stability and growth.
      </p>

      <h2>5. Choosing a House:</h2>
      <p>
        Players face the decision of buying a house, with options ranging from
        affordable starter homes to dream homes and fixer-uppers. Consider the
        financial implications, mortgage terms, and long-term consequences of
        each housing choice.
      </p>

      <h2>6. Investing in a Retirement Plan:</h2>
      <p>
        As players progress in their careers, they are introduced to retirement
        planning. Explore 401(k), Roth IRA, and other retirement plans,
        understanding their benefits and long-term implications. Make informed
        investment decisions to secure financial stability in retirement.
      </p>

      <h2>7. Preparing for Financial Problems:</h2>
      <p>
        The game introduces unexpected financial challenges, such as medical
        emergencies or job loss. Players must make decisions on utilizing
        emergency funds, negotiating payment plans, seeking financial
        assistance, or taking out loans. Emphasize the importance of
        preparedness and strategic decision-making during unforeseen
        circumstances.
      </p>

    <a href="/" ><button className="bigButton" style={{marginBottom:10}}>Return to Home</button></a>
    </>
  );
}
